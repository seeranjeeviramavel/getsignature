import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { SignatureWizard } from "./signature-wizard";
import { SignaturePreview } from "./signature-preview";
import { SignatureData } from "@/lib/types";
import { clients, defaultSignatureData } from "@/lib/constants";
import { ModeToggle } from "@/components/mode-toggle";
import Confetti from "react-confetti";
import logo from '@/assets/GetSignature.png'; 

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  MoonStar,
} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function SignatureGenerator() {
  const [step, setStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedClient, setSelectedClient] = useState<{
    name: string;
    icon: any;
    instructions: string;
  } | null>(null);

  const [signatureData, setSignatureData] = useState<SignatureData>(
    localStorage.getItem("signatureData")
      ? JSON.parse(localStorage.getItem("signatureData") as string)
      : defaultSignatureData
  );

  const { toast } = useToast();

  const progress = (step / 6) * 100;

  useEffect(() => {
    localStorage.setItem("signatureData", JSON.stringify(signatureData));
  }, [signatureData]);
  const handleNext = () => {
    if (step < 6) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCopy = async () => {
    try {
      setShowConfetti(true);
      const signatureElement = document.getElementById("signature-preview");
      console.log(signatureElement);
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
    setShowConfetti(true);
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
    <Drawer>
      {showConfetti && <Confetti />}

      <div className="container mx-auto py-8 px-4">
        <DrawerContent>
          <div className="mx-auto w-full">
            <DrawerHeader>
              <DrawerTitle>Select Mail Client</DrawerTitle>
              <DrawerDescription>
                CHoose your client for the instructions{" "}
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid grid-cols-2 gap-4 p-4 border-t">
              <div className="grid grid-cols-2 gap-4 p-4">
                {clients.map((client) => (
                  <Card
                    key={client.name}
                    className="cursor-pointer flex flex-col items-center p-4 hover:bg-gray-100"
                    onClick={() => setSelectedClient(client)}
                  >
                    <client.icon className="h-8 w-8" />
                    <span className="mt-2 text-sm font-medium">
                      {client.name}
                    </span>
                  </Card>
                ))}
              </div>
              {selectedClient && (
                <div className="p-4 ">
                  <h2 className="text-lg font-semibold">
                    {selectedClient.name}
                  </h2>
                  <p className="mt-2 text-sm">{selectedClient.instructions}</p>
                </div>
              )}
            </div>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
        <div className="flex justify-between items-center">
          <img src={logo} alt="Get Signature Logo" className="h-20" />
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon">
              <a
                href="https://github.com/seeranjeeviramavel/getsignature"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="hover:opacity-80 transition-opacity"
              >
                <GitHubLogoIcon className="w-4 h-4" />
              </a>
            </Button>

            <ModeToggle />
          </div>
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
              {step === 6 ? (
                <DrawerTrigger asChild>
                  <Button onClick={handleCopy}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy HTML
                  </Button>
                </DrawerTrigger>
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

              <DrawerTrigger asChild>
                <Button variant="outline" onClick={handleCopy}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy HTML
                </Button>
              </DrawerTrigger>

              <DrawerTrigger asChild>
                <Button onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </DrawerTrigger>
            </div>
            <SignaturePreview signatureData={signatureData} />
          </Card>
        </div>
      </div>
    </Drawer>
  );
}
