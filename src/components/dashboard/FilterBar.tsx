
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
  }) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [category, setCategory] = useState<string>("");
  const [timeRange, setTimeRange] = useState<string>("30d");
  const [satisfaction, setSatisfaction] = useState<string>("");

  const handleFilterChange = (
    key: "category" | "timeRange" | "satisfaction",
    value: string
  ) => {
    let updatedFilters = {};
    
    if (key === "category") {
      setCategory(value);
      updatedFilters = { category: value, timeRange, satisfaction };
    } else if (key === "timeRange") {
      setTimeRange(value);
      updatedFilters = { category, timeRange: value, satisfaction };
    } else if (key === "satisfaction") {
      setSatisfaction(value);
      updatedFilters = { category, timeRange, satisfaction: value };
    }
    
    onFilterChange(updatedFilters);
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
          <SelectItem value="">All Categories</SelectItem>
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
          <SelectItem value="">All Ratings</SelectItem>
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
                    className="w-full rounded border border-input bg-background px-3 py-1"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Max</label>
                  <input
                    type="number"
                    placeholder="1000"
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
                    className="w-full rounded border border-input bg-background px-3 py-1"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Max</label>
                  <input
                    type="number"
                    placeholder="14"
                    className="w-full rounded border border-input bg-background px-3 py-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Reset</Button>
              <Button size="sm">Apply</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterBar;
