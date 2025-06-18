import { NextResponse } from "next/server";

const developerFlowData = {
  fastSetup: {
    tags: [
      "Routing Setup",
      "Layout System",
      "Markdown Support",
      "Dark Mode",
      "Utility Styling",
      "SEO Defaults",
      "GitHub Links",
      "Custom 404 Page",
      "Deployment"
    ],
    feature: {
      icon: "/images/dev-sec/play-icon.svg",
      title: "Fast Setup",
      description:
        "Get up and running in minutes with built-in routing, layouts, SEO, and styling—all preconfigured and ready.",
    }
  },
  features: [
    {
      icon: "/images/dev-sec/build-icon.svg",
      title: "Built with Tailwind",
      description: "Fully customizable styling with utility-first CSS.",
    },
    {
      icon: "/images/dev-sec/mdx-icon.svg",
      title: "Write in MDX",
      description: "Mix Markdown and JSX for expressive documentation.",
    }
  ]
};

const keyFeatureData = [
  {
    icon:"/images/key-feature/key-icon-1.svg",
    title:"Dark Mode Included",
    descp:"Automatically detects system preference and provides a toggle for seamless light and dark theme switching."
  },
  {
    icon:"/images/key-feature/key-icon-2.svg",
    title:"SEO Ready",
    descp:"Includes meta tags, sitemap, and Open Graph settings to help your docs rank and preview well."
  },
  {
    icon:"/images/key-feature/key-icon-3.svg",
    title:"Instant Deploy",
    descp:"Deploy instantly with Vercel or Netlify, or export static files for traditional hosting without hassle."
  },
  {
    icon:"/images/key-feature/key-icon-4.svg",
    title:"Custom 404 Page",
    descp:"Prebuilt 404 page matches your site’s style, ensuring consistent experience even on broken links."
  },
  {
    icon:"/images/key-feature/key-icon-5.svg",
    title:"Versioned Docs",
    descp:"Supports multiple versions so users can easily switch between releases and find relevant information fast."
  },
  {
    icon:"/images/key-feature/key-icon-6.svg",
    title:"MIT Licensed",
    descp:"Fully open-source and MIT licensed—use, modify, and distribute freely for personal or commercial projects."
  },
]

const sponsorData = [
  "/images/sponsor/sponsor-icon-1.svg",
  "/images/sponsor/sponsor-icon-2.svg",
  "/images/sponsor/sponsor-icon-3.svg",
  "/images/sponsor/sponsor-icon-4.svg",
  "/images/sponsor/sponsor-icon-5.svg",
  "/images/sponsor/sponsor-icon-6.svg",
  "/images/sponsor/sponsor-icon-7.svg",
]


export const GET = async () => {
  return NextResponse.json({
    developerFlowData,
    keyFeatureData,
    sponsorData
  });
};