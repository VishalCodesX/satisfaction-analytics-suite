
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Filter } from "lucide-react";

interface FilterBarProps {
  onFilterChange: (filters: {
    category?: string;
    timeRange?: string;
    satisfaction?: string;
    priceRange?: { min: number; max: number };
    deliveryTime?: { min: number; max: number };
  }) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [category, setCategory] = useState<string>("");
  const [timeRange, setTimeRange] = useState<string>("30d");
  const [satisfaction, setSatisfaction] = useState<string>("");
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });
  const [deliveryTime, setDeliveryTime] = useState<{ min: number; max: number }>({ min: 1, max: 14 });

  const handleFilterChange = (
    key: "category" | "timeRange" | "satisfaction" | "priceRange" | "deliveryTime",
    value: any
  ) => {
    let updatedFilters = {
      category,
      timeRange,
      satisfaction,
      priceRange,
      deliveryTime,
    };
    
    if (key === "category") {
      setCategory(value);
      updatedFilters.category = value;
    } else if (key === "timeRange") {
      setTimeRange(value);
      updatedFilters.timeRange = value;
    } else if (key === "satisfaction") {
      setSatisfaction(value);
      updatedFilters.satisfaction = value;
    } else if (key === "priceRange") {
      setPriceRange(value);
      updatedFilters.priceRange = value;
    } else if (key === "deliveryTime") {
      setDeliveryTime(value);
      updatedFilters.deliveryTime = value;
    }
    
    onFilterChange(updatedFilters);
  };

  const handlePriceInputChange = (field: 'min' | 'max', value: string) => {
    const numValue = value === '' ? 0 : Number(value);
    setPriceRange(prev => {
      const updated = { ...prev, [field]: numValue };
      return updated;
    });
  };

  const handleDeliveryTimeInputChange = (field: 'min' | 'max', value: string) => {
    const numValue = value === '' ? 0 : Number(value);
    setDeliveryTime(prev => {
      const updated = { ...prev, [field]: numValue };
      return updated;
    });
  };

  const applyAdvancedFilters = () => {
    onFilterChange({
      category,
      timeRange,
      satisfaction,
      priceRange,
      deliveryTime,
    });
  };

  const resetAdvancedFilters = () => {
    setPriceRange({ min: 0, max: 1000 });
    setDeliveryTime({ min: 1, max: 14 });
    
    onFilterChange({
      category,
      timeRange,
      satisfaction,
      priceRange: { min: 0, max: 1000 },
      deliveryTime: { min: 1, max: 14 },
    });
  };

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <Select 
        value={timeRange} 
        onValueChange={(value) => handleFilterChange("timeRange", value)}
      >
        <SelectTrigger className="w-[120px] bg-white">
          <SelectValue placeholder="Time Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7d">Last 7 days</SelectItem>
          <SelectItem value="30d">Last 30 days</SelectItem>
          <SelectItem value="90d">Last 90 days</SelectItem>
          <SelectItem value="1y">Last year</SelectItem>
        </SelectContent>
      </Select>

      <Select 
        value={category} 
        onValueChange={(value) => handleFilterChange("category", value)}
      >
        <SelectTrigger className="w-[150px] bg-white">
          <SelectValue placeholder="Product Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="electronics">Electronics</SelectItem>
          <SelectItem value="clothing">Clothing</SelectItem>
          <SelectItem value="home">Home & Kitchen</SelectItem>
          <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
        </SelectContent>
      </Select>

      <Select 
        value={satisfaction} 
        onValueChange={(value) => handleFilterChange("satisfaction", value)}
      >
        <SelectTrigger className="w-[150px] bg-white">
          <SelectValue placeholder="Satisfaction" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Ratings</SelectItem>
          <SelectItem value="high">High Satisfaction</SelectItem>
          <SelectItem value="medium">Medium Satisfaction</SelectItem>
          <SelectItem value="low">Low Satisfaction</SelectItem>
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="h-10 w-10 bg-white">
            <Filter className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4">
          <div className="space-y-4">
            <h4 className="font-medium">Additional Filters</h4>
            <div className="space-y-2">
              <h5 className="text-sm font-medium">Price Range</h5>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-muted-foreground">Min</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={priceRange.min}
                    onChange={(e) => handlePriceInputChange('min', e.target.value)}
                    className="w-full rounded border border-input bg-background px-3 py-1"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Max</label>
                  <input
                    type="number"
                    placeholder="1000"
                    value={priceRange.max}
                    onChange={(e) => handlePriceInputChange('max', e.target.value)}
                    className="w-full rounded border border-input bg-background px-3 py-1"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm font-medium">Delivery Time (Days)</h5>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-muted-foreground">Min</label>
                  <input
                    type="number"
                    placeholder="1"
                    value={deliveryTime.min}
                    onChange={(e) => handleDeliveryTimeInputChange('min', e.target.value)}
                    className="w-full rounded border border-input bg-background px-3 py-1"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Max</label>
                  <input
                    type="number"
                    placeholder="14"
                    value={deliveryTime.max}
                    onChange={(e) => handleDeliveryTimeInputChange('max', e.target.value)}
                    className="w-full rounded border border-input bg-background px-3 py-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={resetAdvancedFilters}>Reset</Button>
              <Button size="sm" onClick={applyAdvancedFilters}>Apply</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterBar;
