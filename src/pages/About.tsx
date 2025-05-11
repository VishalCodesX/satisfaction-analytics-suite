
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-marine-blue mb-2">About This Project</h1>
        <p className="text-muted-foreground mb-8">
          Learn about the technology and methodology behind our customer behavior analytics platform.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-4">Our Approach</h2>
            <p className="mb-4">
              This project explores how product quality, price, return policy, and delivery time 
              influence customer satisfaction in e-commerce. By leveraging machine learning algorithms, 
              specifically Decision Trees and Random Forests, we can identify patterns and correlations 
              that help businesses make data-driven decisions.
            </p>
            <p className="mb-4">
              Our analytics dashboard provides a comprehensive view of customer behavior, allowing 
              businesses to understand which factors most significantly impact customer satisfaction 
              and retention. Through interactive visualizations and detailed reports, users can gain 
              actionable insights to optimize their e-commerce operations.
            </p>
            <p>
              The platform is designed for business stakeholders and analysts, providing a clean, 
              intuitive interface that makes complex data accessible and meaningful.
            </p>
          </div>
          
          <div className="bg-marine-blue text-white rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium mb-3">Key Benefits</h3>
              <ul className="space-y-2 text-sm text-sky-blue/90">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Identify factors driving customer satisfaction</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimize product pricing and delivery strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduce customer returns with targeted improvements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Predict customer satisfaction based on product attributes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Generate actionable business intelligence</span>
                </li>
              </ul>
            </div>
            
            <Button asChild className="mt-6 bg-sky-blue text-marine-blue hover:bg-cream hover:text-marine-blue">
              <Link to="/dashboard">
                Explore the Dashboard
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Technology Stack */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-lg font-medium mb-4">Frontend</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="inline-block bg-marine-blue/10 text-marine-blue rounded-full p-1 mr-3">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">React</strong>
                    <p className="text-muted-foreground text-xs mt-1">
                      Component-based UI library for building the interactive dashboard
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-marine-blue/10 text-marine-blue rounded-full p-1 mr-3">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Recharts</strong>
                    <p className="text-muted-foreground text-xs mt-1">
                      Responsive charting library for data visualization
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-marine-blue/10 text-marine-blue rounded-full p-1 mr-3">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Tailwind CSS</strong>
                    <p className="text-muted-foreground text-xs mt-1">
                      Utility-first CSS framework for responsive design
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-marine-blue/10 text-marine-blue rounded-full p-1 mr-3">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">TypeScript</strong>
                    <p className="text-muted-foreground text-xs mt-1">
                      Statically typed JavaScript for more robust code
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-lg font-medium mb-4">Backend</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="inline-block bg-marine-blue/10 text-marine-blue rounded-full p-1 mr-3">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">Python</strong>
                    <p className="text-muted-foreground text-xs mt-1">
                      Core language for data processing and machine learning algorithms
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-marine-blue/10 text-marine-blue rounded-full p-1 mr-3">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">scikit-learn</strong>
                    <p className="text-muted-foreground text-xs mt-1">
                      Machine learning library for Decision Trees and Random Forests
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-marine-blue/10 text-marine-blue rounded-full p-1 mr-3">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">pandas</strong>
                    <p className="text-muted-foreground text-xs mt-1">
                      Data manipulation and analysis library
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-marine-blue/10 text-marine-blue rounded-full p-1 mr-3">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">FastAPI</strong>
                    <p className="text-muted-foreground text-xs mt-1">
                      Modern, high-performance web framework for API development
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-marine-blue/10 text-marine-blue rounded-full p-1 mr-3">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </span>
                  <div>
                    <strong className="font-medium">SQLite/MongoDB</strong>
                    <p className="text-muted-foreground text-xs mt-1">
                      Database systems for storing customer data and analysis results
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Machine Learning Methodology */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Machine Learning Methodology</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-border p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Decision Tree Algorithm</h3>
                <p className="text-sm mb-4">
                  Our Decision Tree model creates a tree-like structure where each internal node represents a test 
                  on an attribute, each branch represents the outcome of the test, and each leaf node represents a 
                  prediction result. This allows us to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Identify the most influential factors affecting satisfaction</li>
                  <li>Create rule-based systems that are easy to interpret</li>
                  <li>Handle both numerical and categorical data</li>
                  <li>Make decisions without requiring extensive data preprocessing</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Random Forest Algorithm</h3>
                <p className="text-sm mb-4">
                  Random Forest builds multiple decision trees and merges their predictions, which helps to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Improve accuracy compared to individual decision trees</li>
                  <li>Reduce overfitting by averaging multiple decision trees</li>
                  <li>Handle large datasets with high dimensionality</li>
                  <li>Maintain good performance even with missing data</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-lg font-medium mb-3">Evaluation Metrics</h3>
              <p className="text-sm mb-3">
                We evaluate our models using several key metrics to ensure reliable predictions:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-muted/30 rounded-lg p-3">
                  <h4 className="text-sm font-medium mb-1">Accuracy</h4>
                  <p className="text-xs text-muted-foreground">
                    Overall correctness of the model's predictions
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <h4 className="text-sm font-medium mb-1">Precision</h4>
                  <p className="text-xs text-muted-foreground">
                    Ratio of true positives to all positive predictions
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <h4 className="text-sm font-medium mb-1">Recall</h4>
                  <p className="text-xs text-muted-foreground">
                    Ratio of true positives to all actual positives
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <h4 className="text-sm font-medium mb-1">F1 Score</h4>
                  <p className="text-xs text-muted-foreground">
                    Harmonic mean of precision and recall
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Ready to analyze your customer data?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start using our platform today to understand how different factors influence your 
            customer satisfaction and make data-driven decisions to improve your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild 
              size="lg"  
              className="bg-marine-blue hover:bg-steel-blue"
            >
              <Link to="/upload">
                Upload Your Data
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-marine-blue text-marine-blue hover:bg-marine-blue hover:text-white"
            >
              <Link to="/dashboard">
                View Demo Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
