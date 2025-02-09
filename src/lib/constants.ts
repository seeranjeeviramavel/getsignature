import { BoldTemplate, ClassicTemplate, CreativeTemplate, MinimalTemplate, ModernTemplate, ProfessionalTemplate } from './templates';
import { SignatureData } from './types';

export  const templates = {
  "Modern": ModernTemplate,
  "Classic": ClassicTemplate,
  "Professional": ProfessionalTemplate,
  "Minimal": MinimalTemplate,
  "Bold": BoldTemplate,
  "Creative": CreativeTemplate,
};
export const socialMediaPlatforms = [
  { name: "LinkedIn", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/linkedin.svg" },
  { name: "Facebook", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/facebook.svg" },
  { name: "Twitter X", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/twitter-x.svg" },
  { name: "Instagram", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/instagram.svg" },
  { name: "YouTube", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/youtube.svg" },
  { name: "GitHub", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/github.svg" },
  { name: "Discord", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/discord.svg" },
  { name: "Dribbble", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/dribbble.svg" },
  { name: "GitLab", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/gitlab.svg" },
  { name: "Medium", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/medium.svg" },
  { name: "Messenger", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/messenger.svg" },
  { name: "Pinterest", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/pinterest.svg" },
  { name: "Quora", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/quora.svg" },
  { name: "Reddit", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/reddit.svg" },
  { name: "Skype", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/skype.svg" },
  { name: "Spotify", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/spotify.svg" },
  { name: "Telegram", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/telegram.svg" },
  { name: "TikTok", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/tiktok.svg" },
  { name: "Twitch", icon: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/small/colored/twitch.svg" },
];

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
  website: '',
  position: '',
  companylogo: '',
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