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

export const GET = async () => {
  return NextResponse.json({
    developerFlowData,
  });
};