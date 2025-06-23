"use client";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { BackgroundBeams } from "../../ui/BackgroundBeams";
import { TextGenerateEffect } from "../../ui/text-generate-effect";

const HeroSection = () => {
    const [copied, setCopied] = useState(false);
    const command = "npm install docsta";

    const handleCopy = () => {
        navigator.clipboard.writeText(command).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const words = `Docsta is a modern, minimal, and highly customizable documentation starter template for open-source projects, tools, or libraries.`;
    return (

        <section>

            <div className="relative bg-[radial-gradient(46.36%_160.26%_at_51.22%_81.69%,rgba(15,126,217,0.06)_0%,rgba(15,126,217,0)_100%),radial-gradient(18.4%_45.73%_at_11.57%_64.01%,rgba(217,15,15,0.05)_0%,rgba(217,15,15,0)_100%),radial-gradient(19.91%_49.47%_at_100.75%_35.35%,rgba(123,236,170,0.1)_0%,rgba(123,236,170,0)_100%)] pt-20">
                <div>
                    <div className="container">
                        <div className="flex flex-col gap-2 sm:gap-4 text-center items-center justify-center py-12 sm:py-20">
                            <div className="pb-4">
                                <Image src={"/images/banner/banner-logo.svg"} alt="banner-logo" width={120} height={120} />
                            </div>
                            <h1>Launch Docs. Fast. Beautiful. Focused.</h1>
                            <TextGenerateEffect words={words} />
                            {/* <h5 className="text-secondary max-w-3xl">Docsta is a modern, minimal, and highly customizable documentation starter template for open-source projects, tools, or libraries.</h5> */}
                            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 py-3">
                                <div className="flex items-center gap-2.5 bg-primary/10 border border-primary rounded-xl px-4 py-2">
                                    <p className="text-secondary">$</p>
                                    <p className="font-mono">{command}</p>
                                    <button
                                        onClick={handleCopy}
                                        className="transition cursor-pointer"
                                        title="Copy to clipboard"
                                    >
                                        {copied ?
                                            <Image src={"/images/icon/check-primary-icon.svg"} alt="copy-icon" width={18} height={18} />
                                            :
                                            <Image src={"/images/icon/copy-icon.svg"} alt="copy-icon" width={18} height={18} />
                                        }
                                    </button>
                                </div>
                                <Link href={"/docs/intro"} className="btn-gradient py-3 px-6">
                                    <span className="text-white font-bold">Get Started</span>
                                </Link>
                            </div>
                            <p className="text-secondary">MIT Licensed, v4.0.1 released on May 19, 2025</p>
                            <Link href={"/"} className="group flex items-center gap-2.5">
                                <Image src={"/images/icon/github-icon.svg"} alt="github-icon" width={24} height={24} className="dark:hidden block" />
                                <Image src={"/images/icon/github-white.svg"} alt="github-icon" width={24} height={24} className="dark:block hidden" />
                                <p className="flex group-hover:text-primary ">4.253 stars</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <BackgroundBeams />
            </div>
        </section>
    )
}

export default HeroSection