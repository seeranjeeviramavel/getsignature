import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { SignatureWizard } from "./signature-wizard";
import { SignaturePreview } from "./signature-preview";
import { SignatureData } from "@/lib/types";
import { defaultSignatureData } from "@/lib/constants";
import { ModeToggle } from "@/components/mode-toggle";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  MoonStar,
} from "lucide-react";

export default function SignatureGenerator() {
  const [step, setStep] = useState(1);
  const [signatureData, setSignatureData] = useState<SignatureData>(
    localStorage.getItem("signatureData")
      ? JSON.parse(localStorage.getItem("signatureData") as string)
      : defaultSignatureData
  );

  const { toast } = useToast();

  const progress = (step / 5) * 100;

  useEffect(() => {
    localStorage.setItem("signatureData", JSON.stringify(signatureData));
  }, [signatureData]);
  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCopy = async () => {
    try {
      const signatureElement = document.getElementById("signature-preview");
      if (signatureElement) {
        await navigator.clipboard.writeText(signatureElement.innerHTML);
        toast({
          title: "Signature copied!",
          description: "The signature HTML has been copied to your clipboard.",
        });
      }
    } catch (error) {
      toast({
        title: "Error copying signature",
        description: "Please try again or use the download option.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    const signatureElement = document.getElementById("signature-preview");
    if (signatureElement) {
      const blob = new Blob([signatureElement.innerHTML], {
        type: "text/html",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "email-signature.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleToggleSignTheme = () => {
    setSignatureData({
      ...signatureData,
      theme: {
        ...signatureData.theme,
        textColor:
          signatureData.theme.textColor === "#000000" ? "#ffffff" : "#000000",
        backgroundColor:
          signatureData.theme.backgroundColor === "#ffffff"
            ? "#000000"
            : "#ffffff",
      },
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Get Signature?</h1>
        <ModeToggle />
      </div>

      <Progress value={progress} className="mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <SignatureWizard
            step={step}
            signatureData={signatureData}
            setSignatureData={setSignatureData}
          />
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>
            {step === 5 ? (
              <Button onClick={handleCopy}>
                <Copy className="mr-2 h-4 w-4" />
                Copy HTML
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Next
                <ChevronRight className="ms-1 h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={handleToggleSignTheme}>
              <MoonStar className="mr-2 h-4 w-4" /> Toggle Theme
            </Button>
            <Button variant="outline" onClick={handleCopy}>
              <Copy className="mr-2 h-4 w-4" />
              Copy HTML
            </Button>
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          <SignaturePreview signatureData={signatureData} />
        </Card>
      </div>
    </div>
  );
}
