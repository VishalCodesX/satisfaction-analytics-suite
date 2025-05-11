
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChartCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

const ChartCard = ({
  title,
  description,
  children,
  className,
  action,
}: ChartCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          {description && (
            <CardDescription className="text-xs text-muted-foreground mt-1">
              {description}
            </CardDescription>
          )}
        </div>
        {action && <div>{action}</div>}
      </CardHeader>
      <CardContent className="pt-0">{children}</CardContent>
    </Card>
  );
};

export default ChartCard;
