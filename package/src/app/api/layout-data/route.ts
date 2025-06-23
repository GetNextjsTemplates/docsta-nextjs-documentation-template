import { NextResponse } from "next/server";

const footerLink = [
    {
        title: "Project Docs",
        link: "/project-documentation"
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