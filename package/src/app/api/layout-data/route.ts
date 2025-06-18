import { NextResponse } from "next/server";

const footerLink = [
    {
        title: "Docs",
        link: "/documentation"
    },
    {
        title: "Github",
        link: "/"
    },
    {
        title: "Twitter",
        link: "/"
    },
    {
        title: "License",
        link: "/"
    }
]


export const GET = async () => {
  return NextResponse.json({
    footerLink
  });
};