// app/constants.ts
import { SocialIconName } from "../components/SocialIcons";

export const COMPANY_NAME = "The AIO TECH US";
export const COMPANY_LEGAL_NAME = "The AIO Tech US";
export const COMPANY_URL = "https://www.aiotech.us";
export const COMPANY_CITY_STATE = "Hershey, PA";
export const COMPANY_FULL_ADDRESS = "123 Tech Street, Hershey, PA 17033";
export const COMPANY_PHONE = "(726) 222-4622";
export const COMPANY_EMAIL = "ask@theaiotech.us";
export const COMPANY_DESCRIPTION =
  "AI-driven digital marketing and development services";
export const COMPANY_LOGO_URL = `${COMPANY_URL}/logo.png`;
export const COMPANY_OG_IMAGE_URL = `${COMPANY_URL}/logo.png`;

export const COMPANY_SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://instagram.com/theaiotech",
    iconName: "instagram" as SocialIconName,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/theaiotech",
    iconName: "facebook" as SocialIconName,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/theaiotech",
    iconName: "linkedin" as SocialIconName,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/AIO_TECH_US",
    iconName: "twitter" as SocialIconName,
  },
];

export const SITE_PAGES = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/portfolio", name: "Portfolio" },
];
