
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ChartLine, PieChart } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleDashboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if data has been uploaded
    const hasUploadedData = sessionStorage.getItem('hasUploadedData') === 'true';
    
    if (hasUploadedData) {
      navigate('/dashboard');
    } else {
      navigate('/upload');
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-marine-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Advanced Customer Behavior Analysis
            </h1>
            <p className="text-lg mb-8 text-sky-blue/90 animate-slide-up">
              Unlock insights into how product quality, price, return policy, and delivery time 
              influence customer satisfaction in e-commerce through machine learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="animate-slide-up bg-sky-blue text-marine-blue hover:bg-cream hover:text-marine-blue"
                style={{ animationDelay: "200ms" }}
                onClick={handleDashboardClick}
              >
                View Dashboard
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="animate-slide-up border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-marine-blue"
                style={{ animationDelay: "400ms" }}
              >
                <Link to="/upload">
                  Upload Your Data
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative bg-steel-blue/30 rounded-lg p-4 shadow-xl backdrop-blur-md">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Analytics Dashboard" 
                className="rounded-lg shadow-lg"
                width="600"
                height="400"
              />
              <div className="absolute top-10 right-10 bg-marine-blue rounded-full p-4 shadow-lg">
                <PieChart className="h-8 w-8 text-sky-blue" />
              </div>
              <div className="absolute bottom-10 left-10 bg-marine-blue rounded-full p-4 shadow-lg">
                <ChartLine className="h-8 w-8 text-sky-blue" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-sky-blue/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-marine-blue">Key Features</h2>
            <p className="text-steel-blue max-w-xl mx-auto">
              Our platform provides powerful tools to analyze customer behavior and improve your business strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-blue/20 hover:shadow-md transition-shadow">
              <div className="p-3 bg-marine-blue rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-sky-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-marine-blue">Customer Segmentation</h3>
              <p className="text-steel-blue">
                Group customers based on behavior patterns to target your marketing efforts more effectively.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-blue/20 hover:shadow-md transition-shadow">
              <div className="p-3 bg-marine-blue rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-marine-blue">Product Demand Analysis</h3>
              <p className="text-steel-blue">
                Visualize product demand trends to optimize inventory management and pricing strategies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-blue/20 hover:shadow-md transition-shadow">
              <div className="p-3 bg-marine-blue rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-marine-blue">Return Policy Analysis</h3>
              <p className="text-steel-blue">
                Evaluate the impact of return policies on customer satisfaction and purchasing behavior.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-blue/20 hover:shadow-md transition-shadow">
              <div className="p-3 bg-marine-blue rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-marine-blue">Delivery Time Impact</h3>
              <p className="text-steel-blue">
                Understand how delivery times affect customer satisfaction and repeat purchases.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-blue/20 hover:shadow-md transition-shadow">
              <div className="p-3 bg-marine-blue rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-marine-blue">Machine Learning Models</h3>
              <p className="text-steel-blue">
                Leverage Decision Tree and Random Forest algorithms to predict customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sky-blue/20 hover:shadow-md transition-shadow">
              <div className="p-3 bg-marine-blue rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-marine-blue">Export Reports</h3>
              <p className="text-steel-blue">
                Download detailed analysis reports in PDF or Excel format for presentations and further analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-marine-blue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-sky-blue/90 max-w-xl mx-auto">
              Our platform makes it easy to analyze customer behavior using machine learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-steel-blue/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-sky-blue">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Data</h3>
              <p className="text-sky-blue/80">
                Upload your customer behavior data in CSV format through our easy-to-use interface.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-steel-blue/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-sky-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyze with ML</h3>
              <p className="text-sky-blue/80">
                Our system processes your data using advanced machine learning algorithms.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-steel-blue/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-sky-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
              <p className="text-sky-blue/80">
                View interactive dashboards and export reports to make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-marine-blue to-steel-blue rounded-lg p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Analyze Your Customer Data?</h2>
          <p className="text-lg text-sky-blue/90 mb-8 max-w-2xl mx-auto">
            Start using our platform today to gain insights into customer behavior and improve your business strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-sky-blue text-marine-blue hover:bg-cream hover:text-marine-blue"
              onClick={handleDashboardClick}
            >
              Explore Dashboard
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-marine-blue"
            >
              <Link to="/upload">
                Upload Data
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
