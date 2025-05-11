
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
                    <li>Administrative (numeric)</li>
                    <li>Administrative_Duration (numeric)</li>
                    <li>Informational (numeric)</li>
                    <li>Informational_Duration (numeric)</li>
                    <li>ProductRelated (numeric)</li>
                    <li>ProductRelated_Duration (numeric)</li>
                    <li>BounceRates (numeric)</li>
                    <li>ExitRates (numeric)</li>
                    <li>PageValues (numeric)</li>
                    <li>SpecialDay (numeric)</li>
                    <li>Month (string)</li>
                    <li>OperatingSystems (numeric)</li>
                    <li>Browser (numeric)</li>
                    <li>Region (numeric)</li>
                    <li>TrafficType (numeric)</li>
                    <li>VisitorType (string)</li>
                    <li>Weekend (boolean)</li>
                    <li>Revenue (boolean)</li>
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
                      and automatically deleted after 30 days.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        
        {/* Data Examples */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Sample Data Format</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-border p-6 overflow-x-auto">
            <h3 className="text-lg font-medium mb-3">Example Data</h3>
            <table className="min-w-full text-xs">
              <thead className="bg-muted">
                <tr>
                  <th className="py-2 px-3 text-left">Administrative</th>
                  <th className="py-2 px-3 text-left">Informational</th>
                  <th className="py-2 px-3 text-left">ProductRelated</th>
                  <th className="py-2 px-3 text-left">BounceRates</th>
                  <th className="py-2 px-3 text-left">Month</th>
                  <th className="py-2 px-3 text-left">VisitorType</th>
                  <th className="py-2 px-3 text-left">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted">
                <tr>
                  <td className="py-2 px-3">0</td>
                  <td className="py-2 px-3">0</td>
                  <td className="py-2 px-3">1</td>
                  <td className="py-2 px-3">0.2</td>
                  <td className="py-2 px-3">Feb</td>
                  <td className="py-2 px-3">Returning_Visitor</td>
                  <td className="py-2 px-3">FALSE</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">0</td>
                  <td className="py-2 px-3">0</td>
                  <td className="py-2 px-3">2</td>
                  <td className="py-2 px-3">0.0</td>
                  <td className="py-2 px-3">Feb</td>
                  <td className="py-2 px-3">Returning_Visitor</td>
                  <td className="py-2 px-3">FALSE</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">0</td>
                  <td className="py-2 px-3">0</td>
                  <td className="py-2 px-3">1</td>
                  <td className="py-2 px-3">0.2</td>
                  <td className="py-2 px-3">Feb</td>
                  <td className="py-2 px-3">Returning_Visitor</td>
                  <td className="py-2 px-3">FALSE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Upload;
