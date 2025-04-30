
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Minus } from "lucide-react";
import { toast } from 'sonner';

const ConfigurationForm: React.FC = () => {
  const { config, setConfig } = useSigningJourney();
  const navigate = useNavigate();
  
  const [documentCount, setDocumentCount] = useState(config.documents.length);
  const [documentNames, setDocumentNames] = useState<string[]>(
    config.documents.map(doc => doc.name)
  );
  const [gpsCapture, setGpsCapture] = useState(config.gpsCapture);
  const [autoSaveForSigner, setAutoSaveForSigner] = useState(config.autoSaveForSigner);
  
  const handleDocumentNameChange = (index: number, value: string) => {
    const newNames = [...documentNames];
    newNames[index] = value;
    setDocumentNames(newNames);
  };
  
  const handleDocumentCountChange = (count: number) => {
    if (count < 1) count = 1;
    if (count > 5) count = 5;
    
    setDocumentCount(count);
    
    // Adjust document names array
    const newNames = [...documentNames];
    if (count > documentNames.length) {
      // Add new default names
      for (let i = documentNames.length; i < count; i++) {
        newNames.push(`Document ${i + 1}`);
      }
    } else if (count < documentNames.length) {
      // Remove excess names
      newNames.splice(count);
    }
    
    setDocumentNames(newNames);
  };
  
  const handleSimulate = () => {
    // Check for empty document names
    const emptyNameIndex = documentNames.findIndex(name => !name.trim());
    if (emptyNameIndex !== -1) {
      toast.error(`Please provide a name for Document ${emptyNameIndex + 1}`);
      return;
    }
    
    // Save config to context
    const newConfig = {
      documents: documentNames.map(name => ({ name, signed: false })),
      gpsCapture,
      autoSaveForSigner,
      eSignType: "Aadhaar" as const,
      currentDocumentIndex: 0
    };
    
    setConfig(newConfig);
    
    // Navigate to first document preview
    navigate('/document-preview/0');
    toast.success('Journey configured. Starting simulation...');
  };
  
  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto p-6 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold mb-6">Configure eSign Journey</h1>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="documentCount">Number of Documents (1-5)</Label>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => handleDocumentCountChange(documentCount - 1)}
                  disabled={documentCount <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  id="documentCount"
                  type="number"
                  min={1}
                  max={5}
                  value={documentCount}
                  onChange={(e) => handleDocumentCountChange(parseInt(e.target.value) || 1)}
                  className="w-16 text-center"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => handleDocumentCountChange(documentCount + 1)}
                  disabled={documentCount >= 5}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              {Array.from({ length: documentCount }).map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Label htmlFor={`document-${index}`} className="w-32">Document {index + 1} Name:</Label>
                  <Input
                    id={`document-${index}`}
                    value={documentNames[index] || ''}
                    onChange={(e) => handleDocumentNameChange(index, e.target.value)}
                    className="flex-1"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between border-t pt-4">
            <Label htmlFor="gpsCapture">Enable GPS Capture</Label>
            <Switch
              id="gpsCapture"
              checked={gpsCapture}
              onCheckedChange={setGpsCapture}
            />
          </div>
          
          <div className="flex items-center justify-between border-t pt-4">
            <Label htmlFor="autoSaveForSigner">Auto-save for Signer</Label>
            <Switch
              id="autoSaveForSigner"
              checked={autoSaveForSigner}
              onCheckedChange={setAutoSaveForSigner}
            />
          </div>
          
          <div className="flex items-center justify-between border-t pt-4">
            <Label htmlFor="eSignType">eSign Type</Label>
            <Select disabled defaultValue="Aadhaar">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select eSign Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Aadhaar">Aadhaar</SelectItem>
                <SelectItem value="DSC">DSC</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          onClick={handleSimulate}
          className="w-full mt-8 bg-violet-500 hover:bg-violet-600"
        >
          Start Simulation
        </Button>
      </div>
    </div>
  );
};

export default ConfigurationForm;
