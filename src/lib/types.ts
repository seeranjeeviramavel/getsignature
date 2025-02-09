export interface SignatureData {
  name: string;
  profileImage: string;
  pronouns: string;
  company: string;
  position: string;
  department: string;
  cellphone: string;
  email: string;
  address: string;
  social: {
    name: string;
    link: string;
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
    businessCard: string;
    banner: string;
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