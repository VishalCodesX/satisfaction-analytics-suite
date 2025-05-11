
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload, AlertCircle, CheckCircle, LineChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadStatus("idle");
      setUploadProgress(0);
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
      setUploadStatus("idle");
      setUploadProgress(0);
    }
  };
  
  const handleUpload = () => {
    if (!file) return;
    
    setUploading(true);
    setUploadStatus("uploading");
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploadStatus("success");
          // Using setTimeout to show the success message before navigating
          // This calls toast outside of render
          setTimeout(() => {
            toast({
              title: "Upload successful",
              description: "Your data file has been uploaded and is being processed.",
            });
          }, 0);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 300);
  };

  const handleGenerateInsights = () => {
    // Save the file data to sessionStorage to indicate we have data
    sessionStorage.setItem('hasUploadedData', 'true');
    
    // Navigate to dashboard page
    navigate('/dashboard');
  };
  
  const renderUploadStatus = () => {
    if (uploadStatus === "uploading") {
      return (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Uploading...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      );
    } else if (uploadStatus === "success") {
      return (
        <div className="mt-4">
          <div className="flex items-center text-green-600 dark:text-green-400 mb-4">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>Upload complete! Ready to generate insights.</span>
          </div>
          <Button 
            onClick={handleGenerateInsights} 
            className="w-full bg-marine-blue hover:bg-steel-blue flex items-center justify-center"
          >
            <LineChart className="mr-2 h-5 w-5" />
            Generate Insights
          </Button>
        </div>
      );
    } else if (uploadStatus === "error") {
      return (
        <div className="mt-4 flex items-center text-red-600 dark:text-red-400">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>Upload failed. Please try again.</span>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-border p-6">
      <div
        className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-10 text-center cursor-pointer hover:bg-muted/10 transition-colors"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
      >
        <input
          id="file-upload"
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center">
          <div className="p-3 bg-primary/10 rounded-full mb-4">
            <Upload className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Upload your CSV dataset</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop your file here, or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            Supports: CSV files up to 50MB
          </p>
        </div>
      </div>
      
      {file && (
        <div className="mt-6">
          <div className="flex items-center justify-between bg-muted/30 p-3 rounded-lg">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-md mr-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium truncate max-w-[200px]">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="default"
              size="sm"
              className="bg-sky-blue hover:bg-cream hover:text-marine-blue text-marine-blue"
              onClick={handleUpload}
              disabled={uploading || uploadStatus === "success"}
            >
              {uploading ? "Uploading..." : "Upload"}
            </Button>
          </div>
          
          {renderUploadStatus()}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
