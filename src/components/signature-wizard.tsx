import { SignatureData } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fontFamilies, socialMediaPlatforms, templates } from "@/lib/constants";
import {
  User,
  Building2,
  Briefcase,
  Users,
  Phone,
  Mail,
  MapPin,
  PenLine,
  AlertTriangle,
  Video,
  Leaf,
  MousePointer,
  Store,
  Code2,
  CreditCard,
  Image,
  Palette,
  Type,
  Layout,
  IdCard,
} from "lucide-react";
import "filepond/dist/filepond.min.css";
import { FilePond, registerPlugin } from "react-filepond";
import { FilePondFile } from "filepond";
import { set } from "date-fns";

interface SignatureWizardProps {
  step: number;
  signatureData: SignatureData;
  setSignatureData: (data: SignatureData) => void;
}

export function SignatureWizard({
  step,
  signatureData,
  setSignatureData,
}: SignatureWizardProps) {
  const handleChange = (field: string, value: string | boolean) => {
    setSignatureData({ ...signatureData, [field]: value });
  };
  function fileToBase64(file: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!(file instanceof Blob)) {
        reject(new TypeError("Provided file is not a Blob."));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  const handleFileChange = async (field: string, fileItem: FilePondFile[]) => {
    if (!fileItem || fileItem.length === 0) {
      console.error("No file found in fileItem:", fileItem);
      return;
    }

    const file = fileItem[0]?.file;

    if (!(file instanceof Blob)) {
      console.error("Invalid file type:", file);
      return;
    }
    try {
      const base64 = await fileToBase64(file);
      handleChange(field, base64);
    } catch (error) {
      console.error("Error converting file to Base64:", error);
    }
  };

  const handleThemeChange = (field: string, value: string) => {
    setSignatureData({
      ...signatureData,
      theme: { ...signatureData.theme, [field]: value },
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Personal Information</h2>
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" /> Full Name
              </Label>
              <Input
                id="name"
                value={signatureData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pronouns" className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Pronouns (optional)
              </Label>
              <Input
                id="pronouns"
                value={signatureData.pronouns}
                onChange={(e) => handleChange("pronouns", e.target.value)}
                placeholder="they/them"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profileImage" className="flex items-center gap-2">
                <Image className="h-4 w-4" /> Profile Image URL
              </Label>
              <Input
                id="profileImage"
                value={signatureData.profileImage}
                onChange={(e) => handleChange("profileImage", e.target.value)}
                placeholder="https://example.com/profile.jpg"
              />

              <FilePond
                allowMultiple={false}
                maxFiles={1}
                onupdatefiles={(fileItems) => {
                  handleFileChange("profileImage", fileItems);
                }}
                onremovefile={() => {
                  handleChange("profileImage", "");
                }}
                acceptedFileTypes={["image/*"]}
                labelIdle="Drag & Drop your image or <span class='filepond--label-action'>Browse</span>"
                credits={false}
                allowDrop
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Professional Information</h2>
            <div className="space-y-2">
              <Label htmlFor="company" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" /> Company
              </Label>
              <Input
                id="company"
                value={signatureData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Company Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" /> Company Logo
              </Label>
              <Input
                id="company"
                value={signatureData.companylogo}
                onChange={(e) => handleChange("companylogo", e.target.value)}
                placeholder="https://example.com/logo.png"
              />
              <FilePond
                allowMultiple={false}
                maxFiles={1}
                onupdatefiles={(fileItems) => {
                  handleFileChange("companylogo", fileItems);
                }}
                onremovefile={() => {
                  handleChange("companylogo", "");
                }}
                acceptedFileTypes={["image/*"]}
                labelIdle="Drag & Drop your image or <span class='filepond--label-action'>Browse</span>"
                credits={false}
                allowDrop
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> Position
              </Label>
              <Input
                id="position"
                value={signatureData.position}
                onChange={(e) => handleChange("position", e.target.value)}
                placeholder="Job Title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department" className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Department
              </Label>
              <Input
                id="department"
                value={signatureData.department}
                onChange={(e) => handleChange("department", e.target.value)}
                placeholder="Department"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email
              </Label>
              <Input
                id="email"
                type="email"
                value={signatureData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cellphone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Phone
              </Label>
              <Input
                id="cellphone"
                value={signatureData.cellphone}
                onChange={(e) => handleChange("cellphone", e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Address
              </Label>
              <Textarea
                id="address"
                value={signatureData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="123 Business St, City, State 12345"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Additional Options</h2>
            <div className="space-y-2">
              <Label htmlFor={"banner"} className="flex items-center gap-2">
                <IdCard />
                Banner{" "}
              </Label>
              <Input
                value={signatureData.addons.banner}
                onChange={(e) =>
                  setSignatureData({
                    ...signatureData,
                    addons: { ...signatureData.addons, banner: e.target.value },
                  })
                }
                placeholder={"http://example.com/banner.png"}
              />

              <FilePond
                allowMultiple={false}
                maxFiles={1}
                onupdatefiles={async(fileItems) => {
                  setSignatureData({
                    ...signatureData,
                    addons: {
                      ...signatureData.addons,
                      banner:await fileToBase64(fileItems[0].file),
                    },
                  });
                }}
                onremovefile={() => {
                  setSignatureData({
                    ...signatureData,
                    addons: {...signatureData.addons, banner: "" },
                  })}}
                acceptedFileTypes={["image/*"]}
                labelIdle="Drag & Drop your image or <span class='filepond--label-action'>Browse</span>"
                credits={false}
                allowDrop
              />
            </div>
            {[
              {
                id: "signOff",
                label: "Sign-off Message",
                icon: <PenLine className="h-4 w-4" />,
              },
              {
                id: "disclaimer",
                label: "Disclaimer",
                icon: <AlertTriangle className="h-4 w-4" />,
              },
              {
                id: "videoConference",
                label: "Video Conference Link",
                icon: <Video className="h-4 w-4" />,
              },
              {
                id: "greenMessage",
                label: "Green Message",
                icon: <Leaf className="h-4 w-4" />,
              },
            ].map(({ id, label, icon }) => (
              <div key={id} className="space-y-2">
                <Label htmlFor={id} className="flex items-center gap-2">
                  {icon} {label}
                </Label>
                <Input
                  id={id}
                  value={signatureData.addons[id]}
                  onChange={(e) =>
                    setSignatureData({
                      ...signatureData,
                      addons: { ...signatureData.addons, [id]: e.target.value },
                    })
                  }
                  placeholder={`Enter ${label.toLowerCase()}...`}
                />
              </div>
            ))}
         
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Social Media Links</h2>
            {socialMediaPlatforms.map((platform, index) => (
              <div key={platform.name} className="space-y-2">
                <Label
                  htmlFor={platform.name}
                  className="flex items-center gap-2"
                >
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="h-4 w-4"
                  />{" "}
                  {platform.name}
                </Label>
                <Input
                  id={platform.name}
                  value={signatureData.social[index]?.link || ""}
                  onChange={(e) => {
                    const updatedSocial = [...signatureData.social];
                    updatedSocial[index] = {
                      name: platform.name,
                      link: e.target.value,
                      icon: platform.icon,
                    };
                    setSignatureData({
                      ...signatureData,
                      social: updatedSocial,
                    });
                  }}
                  placeholder={`Enter ${platform.name} profile URL...`}
                />
              </div>
            ))}
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Design & Template</h2>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Layout className="h-4 w-4" /> Template Style
              </Label>
              <RadioGroup
                value={signatureData.template.toString()}
                onValueChange={(value) => handleChange("template", value)}
                className="grid grid-cols-2 gap-4"
              >
                {Object.keys(templates).map((num) => (
                  <div key={num} className="flex items-center space-x-2">
                    <RadioGroupItem value={num} id={`template-${num}`} />
                    <Label htmlFor={`template-${num}`}>Template {num}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="font" className="flex items-center gap-2">
                <Type className="h-4 w-4" /> Font Family
              </Label>
              <Select
                value={signatureData.theme.font}
                onValueChange={(value) => handleThemeChange("font", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  {fontFamilies.map((font) => (
                    <SelectItem key={font} value={font}>
                      {font}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {["textColor", "backgroundColor", "iconColor"].map((color) => (
              <div key={color} className="space-y-2">
                <Label htmlFor={color} className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />{" "}
                  {color.replace("Color", " Color")}
                </Label>
                <Input
                  id={color}
                  type="color"
                  value={signatureData.theme[color]}
                  onChange={(e) => handleThemeChange(color, e.target.value)}
                  className="h-10 w-full"
                />
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full">{renderStep()}</div>;
}
