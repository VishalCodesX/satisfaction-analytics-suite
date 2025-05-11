
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import FilterBar from "@/components/dashboard/FilterBar";
import StatCard from "@/components/dashboard/StatCard";
import ChartCard from "@/components/dashboard/ChartCard";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

// Mock customer segmentation data
const customerSegmentationData = [
  { name: "High Value", value: 40, color: "#213448" },
  { name: "Regular", value: 30, color: "#547792" },
  { name: "Occasional", value: 20, color: "#94B4C1" },
  { name: "New", value: 10, color: "#ECEFCA" },
];

// Mock product demand data
const productDemandData = [
  { name: "Electronics", value: 400, fill: "#213448" },
  { name: "Clothing", value: 300, fill: "#547792" },
  { name: "Beauty", value: 200, fill: "#94B4C1" },
  { name: "Home", value: 278, fill: "#ECEFCA" },
  { name: "Sports", value: 189, fill: "#213448" },
];

// Mock satisfaction by delivery time data
const satisfactionByDeliveryData = [
  { x: 1, y: 4.8, z: 20, name: "Same Day" },
  { x: 2, y: 4.5, z: 40, name: "Next Day" },
  { x: 3, y: 4.0, z: 70, name: "2-3 Days" },
  { x: 5, y: 3.6, z: 50, name: "4-7 Days" },
  { x: 10, y: 2.7, z: 30, name: "8-14 Days" },
  { x: 15, y: 2.3, z: 15, name: "15+ Days" },
];

// Mock return rate by price data
const returnRateData = [
  {
    name: "Budget",
    "Return Rate": 12,
  },
  {
    name: "Mid-range",
    "Return Rate": 8,
  },
  {
    name: "Premium",
    "Return Rate": 5,
  },
  {
    name: "Luxury",
    "Return Rate": 2,
  },
];

// Mock satisfaction trend data
const satisfactionTrendData = [
  { name: "Jan", satisfaction: 3.5 },
  { name: "Feb", satisfaction: 3.8 },
  { name: "Mar", satisfaction: 4.0 },
  { name: "Apr", satisfaction: 3.9 },
  { name: "May", satisfaction: 4.2 },
  { name: "Jun", satisfaction: 4.5 },
  { name: "Jul", satisfaction: 4.3 },
  { name: "Aug", satisfaction: 4.4 },
];

const Dashboard = () => {
  const [filters, setFilters] = useState<{
    category?: string;
    timeRange?: string;
    satisfaction?: string;
  }>({
    timeRange: "30d",
  });
  const [hasUploadedData, setHasUploadedData] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if data has been uploaded
    const uploadStatus = sessionStorage.getItem('hasUploadedData');
    if (uploadStatus === 'true') {
      setHasUploadedData(true);
    } else {
      toast({
        title: "No data available",
        description: "Please upload a dataset first to view insights.",
        variant: "destructive",
      });
      // Redirect to upload page if no data
      navigate('/upload');
    }
  }, [navigate, toast]);

  const handleFilterChange = (newFilters: {
    category?: string;
    timeRange?: string;
    satisfaction?: string;
  }) => {
    setFilters(newFilters);
    console.log("Filters applied:", newFilters);
  };

  if (!hasUploadedData) {
    return null; // Don't render anything while redirecting
  }

  return (
    <PageLayout>
      <div className="dashboard-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Customer Analysis Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Insights and analytics from your uploaded customer data
            </p>
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <Button variant="outline" size="sm" className="text-xs">
              <FileText className="mr-1 h-4 w-4" />
              Export PDF
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <Download className="mr-1 h-4 w-4" />
              Export Excel
            </Button>
          </div>
        </div>

        <FilterBar onFilterChange={handleFilterChange} />

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Average Satisfaction"
            value="4.2/5"
            icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>}
            change={5.3}
            description="vs. previous period"
          />
          <StatCard
            title="Return Rate"
            value="6.8%"
            icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
            </svg>}
            change={-2.1}
            description="vs. previous period"
          />
          <StatCard
            title="Avg. Delivery Time"
            value="3.5 days"
            icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}
            change={-8.4}
            description="vs. previous period"
          />
          <StatCard
            title="Price Sensitivity"
            value="Medium"
            icon={<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}
            description="Based on purchase patterns"
          />
        </div>

        {/* Charts - First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ChartCard 
            title="Customer Segmentation" 
            description="Distribution by customer value and purchase frequency"
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={customerSegmentationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {customerSegmentationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard 
            title="Product Demand Analysis" 
            description="Distribution by product category"
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productDemandData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" name="Units Sold">
                    {productDemandData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        {/* Charts - Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ChartCard 
            title="Satisfaction by Delivery Time" 
            description="Impact of delivery time on customer satisfaction"
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid />
                  <XAxis 
                    type="number" 
                    dataKey="x" 
                    name="Delivery Time" 
                    unit=" days" 
                    domain={[0, 'dataMax + 2']}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="y" 
                    name="Satisfaction" 
                    domain={[0, 5]} 
                    tickCount={6}
                  />
                  <ZAxis 
                    type="number" 
                    dataKey="z" 
                    range={[50, 400]} 
                    name="Orders" 
                    unit=" orders"
                  />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }} 
                    formatter={(value, name) => {
                      if (name === 'Delivery Time') return [`${value} days`, name];
                      if (name === 'Satisfaction') return [`${value} / 5`, name];
                      return [value, name];
                    }}
                    labelFormatter={(label) => {
                      const dataPoint = satisfactionByDeliveryData.find((_, index) => index === label);
                      return dataPoint?.name || '';
                    }}
                  />
                  <Scatter 
                    name="Satisfaction vs Delivery" 
                    data={satisfactionByDeliveryData} 
                    fill="#547792"
                    shape="circle"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard 
            title="Return Rate by Price Segment" 
            description="Analysis of return rates across different price segments"
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={returnRateData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit="%" />
                  <Tooltip formatter={(value) => [`${value}%`, "Return Rate"]} />
                  <Bar dataKey="Return Rate" fill="#213448" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        {/* Satisfaction Trend Chart */}
        <div className="mb-6">
          <ChartCard 
            title="Satisfaction Trend" 
            description="Average customer satisfaction over time"
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={satisfactionTrendData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 5]} tickCount={6} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="satisfaction" 
                    stroke="#547792" 
                    fill="#94B4C1" 
                    name="Satisfaction Score"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        {/* ML Model Insights */}
        <div className="bg-card rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Machine Learning Model Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Decision Tree Model</h3>
              <div className="space-y-3">
                <div className="bg-muted/30 p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Accuracy</span>
                    <span className="text-sm font-semibold">78%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-marine-blue h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                
                <div className="bg-muted/30 p-3 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Feature Importance</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs">Product Quality</span>
                        <span className="text-xs font-semibold">45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div className="bg-marine-blue h-1.5 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs">Delivery Time</span>
                        <span className="text-xs font-semibold">30%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div className="bg-marine-blue h-1.5 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs">Price</span>
                        <span className="text-xs font-semibold">15%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div className="bg-marine-blue h-1.5 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs">Return Policy</span>
                        <span className="text-xs font-semibold">10%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div className="bg-marine-blue h-1.5 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Random Forest Model</h3>
              <div className="space-y-3">
                <div className="bg-muted/30 p-3 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Accuracy</span>
                    <span className="text-sm font-semibold">83%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-steel-blue h-2 rounded-full" style={{ width: "83%" }}></div>
                  </div>
                </div>
                
                <div className="bg-muted/30 p-3 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Feature Importance</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs">Product Quality</span>
                        <span className="text-xs font-semibold">42%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div className="bg-steel-blue h-1.5 rounded-full" style={{ width: "42%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs">Delivery Time</span>
                        <span className="text-xs font-semibold">28%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div className="bg-steel-blue h-1.5 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs">Price</span>
                        <span className="text-xs font-semibold">18%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div className="bg-steel-blue h-1.5 rounded-full" style={{ width: "18%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs">Return Policy</span>
                        <span className="text-xs font-semibold">12%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div className="bg-steel-blue h-1.5 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Key Insights</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Product quality is the most important factor influencing customer satisfaction</li>
              <li>Delivery times under 3 days significantly improve satisfaction scores</li>
              <li>Customers are more sensitive to price in the mid-range segment</li>
              <li>A flexible return policy reduces cart abandonment by 24%</li>
              <li>Premium pricing with fast delivery results in highest customer loyalty</li>
            </ul>
            <Button className="mt-4 bg-marine-blue hover:bg-steel-blue">Retrain Models</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
