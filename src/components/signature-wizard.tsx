import { SignatureData } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fontFamilies } from '@/lib/constants';
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
  Layout 
} from 'lucide-react';
import { SignaturePreview } from './signature-preview';

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
                onChange={(e) => handleChange('name', e.target.value)}
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
                onChange={(e) => handleChange('pronouns', e.target.value)}
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
                onChange={(e) => handleChange('profileImage', e.target.value)}
                placeholder="https://example.com/profile.jpg"
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
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Company Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> Position
              </Label>
              <Input
                id="position"
                value={signatureData.position}
                onChange={(e) => handleChange('position', e.target.value)}
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
                onChange={(e) => handleChange('department', e.target.value)}
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
                onChange={(e) => handleChange('email', e.target.value)}
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
                onChange={(e) => handleChange('cellphone', e.target.value)}
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
                onChange={(e) => handleChange('address', e.target.value)}
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
              <Label htmlFor="signOff" className="flex items-center gap-2">
                <PenLine className="h-4 w-4" /> Sign-off Message
              </Label>
              <Input
                id="signOff"
                value={signatureData.addons.signOff}
                onChange={(e) =>
                  setSignatureData({
                    ...signatureData,
                    addons: { ...signatureData.addons, signOff: e.target.value },
                  })
                }
                placeholder="Best regards,"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disclaimer" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" /> Disclaimer
              </Label>
              <Textarea
                id="disclaimer"
                value={signatureData.addons.disclaimer}
                onChange={(e) =>
                  setSignatureData({
                    ...signatureData,
                    addons: { ...signatureData.addons, disclaimer: e.target.value },
                  })
                }
                placeholder="Confidentiality notice..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cta" className="flex items-center gap-2">
                <MousePointer className="h-4 w-4" /> Call-to-Action
              </Label>
              <Input
                id="cta"
                value={signatureData.addons.customHtml}
                onChange={(e) =>
                  setSignatureData({
                    ...signatureData,
                    addons: { ...signatureData.addons, customHtml: e.target.value },
                  })
                }
                placeholder="<a href='#'>Book a meeting</a>"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Design & Template</h2>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Layout className="h-4 w-4" /> Template Style
              </Label>
              <RadioGroup
                value={signatureData.template.toString()}
                onValueChange={(value) => handleChange('template', value)}
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
                onValueChange={(value) => handleThemeChange('font', value)}
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
            <div className="space-y-2">
              <Label htmlFor="textColor" className="flex items-center gap-2">
                <Palette className="h-4 w-4" /> Text Color
              </Label>
              <Input
                id="textColor"
                type="color"
                value={signatureData.theme.textColor}
                onChange={(e) => handleThemeChange('textColor', e.target.value)}
                className="h-10 w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="backgroundColor" className="flex items-center gap-2">
                <Palette className="h-4 w-4" /> Background Color
              </Label>
              <Input
                id="backgroundColor"
                type="color"
                value={signatureData.theme.backgroundColor}
                onChange={(e) => handleThemeChange('backgroundColor', e.target.value)}
                className="h-10 w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iconColor" className="flex items-center gap-2">
                <Palette className="h-4 w-4" /> Icon Color
              </Label>
              <Input
                id="iconColor"
                type="color"
                value={signatureData.theme.iconColor}
                onChange={(e) => handleThemeChange('iconColor', e.target.value)}
                className="h-10 w-full"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="w-full">{renderStep()}</div>;
}