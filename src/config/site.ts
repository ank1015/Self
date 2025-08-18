import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://ank1015.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Hire Me",
    href: "/hire",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const SOURCE_CODE_GITHUB_REPO = "ncdai/chanhdai.com";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/ncdai/chanhdai.com";

export const UTM_PARAMS = {
  utm_source: "chanhdai.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
