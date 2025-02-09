import { BoldTemplate, ClassicTemplate, CreativeTemplate, MinimalTemplate, ModernTemplate } from './templates';
import { SignatureData } from './types';

export  const templates = {
  "Modern": ModernTemplate,
  "Classic": ClassicTemplate,
  "Minimal": MinimalTemplate,
  "Bold": BoldTemplate,
  "Creative": CreativeTemplate,
};

export const fontFamilies = [
  'Arial',
  'Helvetica',
  'Inter',
  'Times New Roman',
  'Georgia',
  'Verdana',
  'Tahoma',
  'Trebuchet MS',
  'Courier New',
  'Segoe UI',
] as const;

export const defaultSignatureData: SignatureData = {
  name: 'Seeran',
  profileImage: '',
  pronouns: '',
  company: '',
  position: '',
  department: '',
  cellphone: '',
  email: '',
  address: '',
  social: [],
  addons: {
    signOff: '',
    disclaimer: '',
    videoConference: '',
    greenMessage: '',
    cta: false,
    marketplace: false,
    customHtml: '',
    businessCard: '',
    banner: '',
  },
  theme: {
    font: 'Inter',
    mode: 'light',
    textColor: '#000000',
    backgroundColor: '#ffffff',
    iconColor: '#4635B1',
  },
  template: "Modern",
};