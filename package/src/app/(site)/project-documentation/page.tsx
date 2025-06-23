import { Configuration } from "@/app/components/project-documentation/Configuration";
import { DocNavigation } from "@/app/components/project-documentation/DocNavigation";
import { Introduction } from "@/app/components/project-documentation/Introduction";
import { PackageStructure } from "@/app/components/project-documentation/PackageStructure";
import { QuickStart } from "@/app/components/project-documentation/QuickStart";
import { SanityConfiguration } from "@/app/components/project-documentation/sanityConfiguration";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Documentation | Docsta",
};

export default function Page() {
    return (
        <div className="dark:bg-baseInk !pt-20">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) p-6 lg:mt-0 mt-0 pt-6!">
                <div className="grid grid-cols-12 gap-6 py-14">
                    <div className="lg:col-span-3 col-span-12 lg:block hidden">
                        <DocNavigation />
                    </div>
                    <div className="lg:col-span-9 col-span-12">
                        <Introduction />
                        <PackageStructure />
                        <SanityConfiguration />
                        <QuickStart />
                        <Configuration />
                    </div>
                </div>
            </div>
        </div>
    );
};
