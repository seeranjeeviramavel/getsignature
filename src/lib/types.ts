type Link = string;
type Base64 = string;

export interface SignatureData {
  name: string;
  profileImage: Base64 | Link;
  pronouns: string;
  company: string;
  position: string;
  companylogo:Base64 | Link;
  website:Link;
  department: string;
  cellphone: string;
  email: string;
  address: string;
  social: {
    name: string;
    link: Link;
    icon: string;
  }[];
  addons: {
    signOff: string;
    disclaimer: string;
    videoConference: string;
    greenMessage: string;
    cta: boolean;
    marketplace: boolean;
    customHtml: string;
    banner: Base64 | Link;
  };
  theme: {
    font: string;
    mode: 'light' | 'dark';
    textColor: string;
    backgroundColor: string;
    iconColor: string;
  };
  template: string;
}