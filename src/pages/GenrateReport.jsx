import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  Card  from "../../src/components/ui/Card";
import CardContent from "../../src/components/ui/CardContent"
import  Input from "../../src/components/ui/Input";
import { Search, FileText, Check, X } from "lucide-react";

const bloodTests = {
  CBC: "Complete Blood Count (CBC)",
  BMP: "Basic Metabolic Panel (BMP)",
  CMP: "Comprehensive Metabolic Panel (CMP)",
  Lipid: "Lipid Panel",
  Thyroid: "Thyroid Function Test",
  Cardiac: "Cardiac Biomarkers",
  Clotting: "Blood Clotting Tests",
  Culture: "Blood Culture",
  Allergy: "Allergy Tests",
  Autoimmune: "Autoimmune Disease Tests",
};

const testDescriptions = {
  CBC: "Evaluates overall health and detects disorders like anemia or infections",
  BMP: "Checks kidney function, electrolyte and fluid balance",
  CMP: "Assesses liver and kidney function, protein levels, and electrolyte balance",
  Lipid: "Measures cholesterol levels to assess cardiovascular health",
  Thyroid: "Evaluates thyroid gland function and hormone production",
  Cardiac: "Detects heart damage and assesses risk of heart events",
  Clotting: "Measures how well your blood forms clots",
  Culture: "Identifies bacterial or fungal infections in the blood",
  Allergy: "Identifies specific substances causing allergic reactions",
  Autoimmune: "Detects antibodies related to autoimmune disorders",
};

const GenerateReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredTests = Object.entries(bloodTests).filter(([key, name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Generate Report</h1>

      <Card>
        <CardContent className="pt-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for blood tests..."
              className="pl-10 bg-background"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-3"
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTests.length > 0 ? (
              filteredTests.map(([key, name]) => (
                <div
                  key={key}
                  onClick={() => navigate(`/test/${key}`)}
                  className="group flex flex-col p-4 bg-card border border-border hover:border-primary/50 hover:bg-accent rounded-lg shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 rounded-full p-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium">{name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground pl-11">
                    {testDescriptions[key]}
                  </p>
                  <div className="ml-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs text-primary font-medium">
                    <span>Generate</span>
                    <Check className="h-3 w-3" />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 flex flex-col items-center justify-center py-10 text-center">
                <X className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">
                  No tests found matching "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerateReport;
