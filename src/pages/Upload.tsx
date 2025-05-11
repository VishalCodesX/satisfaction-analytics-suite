
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Upload = () => {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-marine-blue mb-2">Upload Data</h1>
        <p className="text-muted-foreground mb-8">
          Upload your customer behavior data for analysis using our machine learning models.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          <div className="md:col-span-4">
            <FileUpload />
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">Data Format Requirements</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">Required Columns</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Your CSV file must include these columns:
                  </p>
                  <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                    <li>customer_id (string or integer)</li>
                    <li>product_id (string or integer)</li>
                    <li>product_category (string)</li>
                    <li>product_quality (numeric, 1-5)</li>
                    <li>price (numeric)</li>
                    <li>delivery_time_days (numeric)</li>
                    <li>return_policy (string: flexible, standard, strict)</li>
                    <li>satisfaction_score (numeric, 1-5)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-1">File Format</h3>
                  <p className="text-xs text-muted-foreground">
                    CSV file with headers, comma-separated values. Maximum size: 50MB.
                  </p>
                </div>
                
                <div>
                  <Button variant="outline" size="sm" className="text-xs w-full">
                    Download Sample Template
                  </Button>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="mt-6">
                <AccordionItem value="data-preprocessing">
                  <AccordionTrigger className="text-sm font-medium">
                    Data Preprocessing
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground">
                    <p className="mb-2">
                      Our system will automatically perform the following:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Handle missing values</li>
                      <li>Normalize numeric features</li>
                      <li>Encode categorical variables</li>
                      <li>Remove outliers</li>
                      <li>Feature scaling</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="analysis-process">
                  <AccordionTrigger className="text-sm font-medium">
                    Analysis Process
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground">
                    <p className="mb-2">After upload, your data will go through:</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Data validation and cleaning</li>
                      <li>Feature extraction and transformation</li>
                      <li>Customer segmentation analysis</li>
                      <li>Decision Tree model training</li>
                      <li>Random Forest model training</li>
                      <li>Results visualization in dashboard</li>
                    </ol>
                    <p className="mt-2">
                      This process typically takes 2-5 minutes depending on data size.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="data-privacy">
                  <AccordionTrigger className="text-sm font-medium">
                    Data Privacy
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground">
                    <p>
                      Your uploaded data is processed securely and used only for analysis purposes. 
                      We do not share your data with third parties. Data is stored encrypted 
                      and automatically deleted after 30 days unless you choose to save it to your account.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        
        {/* Data Examples and Tips */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Examples & Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-lg font-medium mb-3">Sample Data</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                  <thead className="bg-muted">
                    <tr>
                      <th className="py-2 px-3 text-left">customer_id</th>
                      <th className="py-2 px-3 text-left">product_category</th>
                      <th className="py-2 px-3 text-left">quality</th>
                      <th className="py-2 px-3 text-left">price</th>
                      <th className="py-2 px-3 text-left">delivery_days</th>
                      <th className="py-2 px-3 text-left">satisfaction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted">
                    <tr>
                      <td className="py-2 px-3">1001</td>
                      <td className="py-2 px-3">electronics</td>
                      <td className="py-2 px-3">4.5</td>
                      <td className="py-2 px-3">599.99</td>
                      <td className="py-2 px-3">2</td>
                      <td className="py-2 px-3">4</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">1002</td>
                      <td className="py-2 px-3">clothing</td>
                      <td className="py-2 px-3">3.5</td>
                      <td className="py-2 px-3">49.99</td>
                      <td className="py-2 px-3">5</td>
                      <td className="py-2 px-3">3</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">1003</td>
                      <td className="py-2 px-3">home</td>
                      <td className="py-2 px-3">5</td>
                      <td className="py-2 px-3">199.99</td>
                      <td className="py-2 px-3">1</td>
                      <td className="py-2 px-3">5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-lg font-medium mb-3">Tips for Better Results</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Include at least 100 rows of data for meaningful analysis</li>
                <li>Ensure your satisfaction scores reflect actual customer feedback</li>
                <li>Include data across different time periods if available</li>
                <li>Make sure numeric values are consistent (e.g., always use days for delivery time)</li>
                <li>If you have historical data, include it to enable trend analysis</li>
                <li>Clearly categorize your products for better segment analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Upload;
