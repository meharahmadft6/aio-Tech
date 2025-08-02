// app/constants.ts
import { SocialIconName } from "../components/SocialIcons";
export const COMPANY_NAME = "The AIO TECH US";
export const COMPANY_LEGAL_NAME = "The AIO Tech US";
export const COMPANY_URL = "https://www.theaiotech.us";
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
    url: "https://www.instagram.com/theaiotech.us?igsh=NmpjaThkZDZiNjA=",
    iconName: "instagram" as SocialIconName,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61578824438973&mibextid=ZbWKwL",
    iconName: "facebook" as SocialIconName,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/theaiotech-us-aa25b7378",
    iconName: "linkedin" as SocialIconName,
  },
];

export const SITE_PAGES = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/portfolio", name: "Portfolio" },
];
