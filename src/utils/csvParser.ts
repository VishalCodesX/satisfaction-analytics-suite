
/**
 * Utility functions for parsing and analyzing CSV data
 */

export interface DataRow {
  Administrative: number;
  Administrative_Duration: number;
  Informational: number;
  Informational_Duration: number;
  ProductRelated: number;
  ProductRelated_Duration: number;
  BounceRates: number;
  ExitRates: number;
  PageValues: number;
  SpecialDay: number;
  Month: string;
  OperatingSystems: number;
  Browser: number;
  Region: number;
  TrafficType: number;
  VisitorType: string;
  Weekend: boolean;
  Revenue: boolean;
}

export async function parseCSV(file: File): Promise<DataRow[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const csvText = event.target?.result as string;
        if (!csvText) {
          reject(new Error("Failed to read file"));
          return;
        }
        
        // Split by lines and get headers
        const lines = csvText.split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        
        // Parse data rows
        const data: DataRow[] = [];
        for (let i = 1; i < lines.length; i++) {
          if (!lines[i].trim()) continue; // Skip empty lines
          
          const values = lines[i].split(',').map(v => v.trim());
          const row: any = {};
          
          headers.forEach((header, index) => {
            const value = values[index];
            if (value === undefined) return;
            
            // Parse based on expected types
            if (header === 'Month') {
              row[header] = value;
            } else if (header === 'Weekend' || header === 'Revenue') {
              row[header] = value.toLowerCase() === 'true';
            } else if (header === 'VisitorType') {
              row[header] = value;
            } else {
              // Parse numeric values
              row[header] = parseFloat(value);
            }
          });
          
          data.push(row as DataRow);
        }
        
        resolve(data);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };
    
    reader.readAsText(file);
  });
}

export function analyzeData(data: DataRow[]): {
  customerSegmentation: { name: string; value: number; color: string }[];
  productDemand: { name: string; value: number; fill: string }[];
  satisfactionByDelivery: { x: number; y: number; z: number; name: string }[];
  returnRateData: { name: string; "Return Rate": number }[];
  satisfactionTrend: { name: string; satisfaction: number }[];
  averageSatisfaction: number;
  returnRate: number;
  avgDeliveryTime: number;
  priceSensitivity: string;
} {
  // Ensure we have data
  if (!data.length) {
    throw new Error("No data to analyze");
  }
  
  // Colors for visualizations
  const colors = ["#213448", "#547792", "#94B4C1", "#ECEFCA"];
  
  // 1. Customer Segmentation based on Revenue and Visit Type
  const visitorTypes = new Map<string, number>();
  data.forEach(row => {
    const key = row.Revenue ? `High Value ${row.VisitorType}` : `Regular ${row.VisitorType}`;
    visitorTypes.set(key, (visitorTypes.get(key) || 0) + 1);
  });
  
  const customerSegmentation = Array.from(visitorTypes.entries())
    .map(([name, count], index) => ({
      name,
      value: Math.round((count / data.length) * 100),
      color: colors[index % colors.length]
    }));
  
  // 2. Product Demand based on ProductRelated counts
  const productCategories = [
    { min: 0, max: 5, name: "Low Interest" },
    { min: 5, max: 15, name: "Medium Interest" },
    { min: 15, max: 30, name: "High Interest" },
    { min: 30, max: Infinity, name: "Very High Interest" }
  ];
  
  const productCounts = new Map<string, number>();
  data.forEach(row => {
    const category = productCategories.find(
      cat => row.ProductRelated >= cat.min && row.ProductRelated < cat.max
    )?.name || "Other";
    productCounts.set(category, (productCounts.get(category) || 0) + 1);
  });
  
  const productDemand = Array.from(productCounts.entries())
    .map(([name, count], index) => ({
      name,
      value: count,
      fill: colors[index % colors.length]
    }));
  
  // 3. "Satisfaction" approximated from PageValues and Bounce Rates
  // Since we don't have direct satisfaction scores, we'll derive it
  const bounceGroups = [
    { min: 0, max: 0.01, name: "Very Low Bounce", score: 5 },
    { min: 0.01, max: 0.02, name: "Low Bounce", score: 4 },
    { min: 0.02, max: 0.04, name: "Medium Bounce", score: 3 },
    { min: 0.04, max: 0.08, name: "High Bounce", score: 2 },
    { min: 0.08, max: Infinity, name: "Very High Bounce", score: 1 }
  ];
  
  // Approximate delivery time using Month info and visitor type (just for visualization)
  const satisfactionByDelivery = bounceGroups.map((group, index) => {
    const matchingRows = data.filter(
      row => row.BounceRates >= group.min && row.BounceRates < group.max
    );
    
    const avgPageValue = matchingRows.length
      ? matchingRows.reduce((sum, row) => sum + row.PageValues, 0) / matchingRows.length
      : 0;
    
    // For visualization purposes, use index as x value (delivery days)
    return {
      x: index + 1, // Simulated delivery days
      y: group.score, // Satisfaction score
      z: matchingRows.length, // Size based on count
      name: group.name
    };
  });
  
  // 4. Return rate approximated from ExitRates and Page Values
  const exitRateGroups = [
    { min: 0, max: 0.1, name: "Budget" },
    { min: 0.1, max: 0.2, name: "Mid-range" },
    { min: 0.2, max: 0.3, name: "Premium" },
    { min: 0.3, max: Infinity, name: "Luxury" }
  ];
  
  const returnRateData = exitRateGroups.map(group => {
    const matchingRows = data.filter(
      row => row.ExitRates >= group.min && row.ExitRates < group.max
    );
    
    const returnRate = matchingRows.length
      ? matchingRows.filter(row => !row.Revenue).length / matchingRows.length * 100
      : 0;
    
    return {
      name: group.name,
      "Return Rate": Math.round(returnRate * 10) / 10
    };
  });
  
  // 5. Satisfaction trend approximated by month
  const monthOrder = ["Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];
  
  const satisfactionByMonth = new Map<string, number[]>();
  data.forEach(row => {
    if (!satisfactionByMonth.has(row.Month)) {
      satisfactionByMonth.set(row.Month, []);
    }
    // Higher PageValues and lower BounceRates indicate higher satisfaction
    const satisfactionScore = Math.min(5, (row.PageValues * 0.8) + ((1 - row.BounceRates) * 4));
    satisfactionByMonth.get(row.Month)?.push(satisfactionScore);
  });
  
  const satisfactionTrend = monthOrder
    .filter(month => satisfactionByMonth.has(month))
    .map(month => {
      const scores = satisfactionByMonth.get(month) || [];
      const avgScore = scores.length 
        ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length * 10) / 10
        : 0;
      return {
        name: month,
        satisfaction: avgScore
      };
    });
  
  // Calculate top-level metrics
  const calculateAvgSatisfaction = () => {
    const totalSatisfaction = data.reduce((sum, row) => {
      const score = Math.min(5, (row.PageValues * 0.8) + ((1 - row.BounceRates) * 4));
      return sum + score;
    }, 0);
    return Math.round(totalSatisfaction / data.length * 10) / 10;
  };
  
  const averageSatisfaction = calculateAvgSatisfaction();
  
  // Return rate based on those who bounced and had low page values
  const returnRate = Math.round(data.filter(row => row.BounceRates > 0.02 && !row.Revenue).length / data.length * 1000) / 10;
  
  // Simulate delivery time based on page values and product related duration
  const avgDeliveryTime = Math.round(data.reduce((sum, row) => sum + (row.ProductRelated_Duration / 100), 0) / data.length * 10) / 10;
  
  // Price sensitivity based on exit rates when page values are high
  const highValueExits = data.filter(row => row.PageValues > 10 && row.ExitRates > 0.1).length;
  const priceSensitivity = highValueExits / data.length > 0.3 ? "High" : highValueExits / data.length > 0.15 ? "Medium" : "Low";
  
  return {
    customerSegmentation,
    productDemand,
    satisfactionByDelivery,
    returnRateData,
    satisfactionTrend,
    averageSatisfaction,
    returnRate,
    avgDeliveryTime,
    priceSensitivity
  };
}
