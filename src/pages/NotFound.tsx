
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-marine-blue mb-4">404</h1>
          <p className="text-xl text-steel-blue mb-6">Oops! We couldn't find the page you're looking for.</p>
          <p className="text-muted-foreground mb-8">
            The page you requested might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild size="lg" className="bg-marine-blue hover:bg-steel-blue">
            <Link to="/">
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
