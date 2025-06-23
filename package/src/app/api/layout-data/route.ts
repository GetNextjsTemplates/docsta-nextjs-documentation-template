import { NextResponse } from "next/server";

const footerLink = [
    {
        title: "Docs",
        link: "/docs/intro"
    },
    {
        title: "Github",
        link: "/"
    },
    {
        title: "License",
        link: "/license"
    }
]


export const GET = async () => {
  return NextResponse.json({
    footerLink
  });
};