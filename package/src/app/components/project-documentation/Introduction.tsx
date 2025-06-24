"use client";
import Image from "next/image";
import { useState } from "react";
import { DocNavigation } from "./DocNavigation";

export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false);
  const PackageVersions = [
    {
      id: "1",
      packageName: "NextJs",
      img: "/images/documentation/Categories=Nextjs.svg",
      version: "15.3.3",
    },
    {
      id: "2",
      packageName: "React",
      img: "/images/documentation/Categories=React.svg",
      version: "^19.0.0",
    },
    {
      id: "3",
      packageName: "Tailwindcss",
      img: "/images/documentation/Categories=Tailwind.svg",
      version: "4+",
    },
    {
      id: "4",
      packageName: "Aceternity",
      img: "/images/documentation/acernity-logo.png",
      version: "4+",
    },
    {
      id: "5",
      packageName: "Sanity",
      img: "/images/documentation/Categories=Sanity.svg",
      version: "^3.92.0",
    },
  ];
  return (
    <>
      <div id="version" className="md:scroll-m-[130px] scroll-m-28">
        {docNavbarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setDocNavbarOpen(false)}
          />
        )}

        <div className="flex item-center justify-between">
          <h3 className=" text-black text-2xl mt-3 font-semibold mb-6 dark:text-white">
            Package Versions
          </h3>
          <button onClick={() => setDocNavbarOpen(true)} className="p-0">
            {" "}
            {/* <Icon icon="gg:menu-right" className="text-3xl lg:hidden block" /> */}
          </button>
        </div>

        <div className="w-full flex justify-between lg:gap-0 gap-6 lg:flex-nowrap flex-wrap p-6 rounded-md border border-smokyBlack/10 dark:border-white/20">
          {PackageVersions &&
            PackageVersions.map((item) => {
              return (
                <div
                  key={item.id}
                  className="lg:w-1/5 md:w-full text-center lg:border-b-0 border-b lg:border-e lg:last:border-e-0 last:border-b-0 border-smokyBlack/10 dark:border-white/20"
                >
                  <Image
                    src={item.img}
                    alt="npm-package"
                    className=" mx-auto w-10 h-10 "
                    width={40}
                    height={40}
                  />
                  <h5 className="text-2xl font-bold mt-3.5 dark:text-white">{`v${item.version}`}</h5>
                  <p className="text-base font-medium text-secondary dark:text-white">
                    {item.packageName}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="mt-5">
          <p className="text-base font-medium text-secondary dark:text-white">
            Docstra Tailwind NextJs Template is built with Tailwindcss and
            Nextjs.
          </p>
          <p className="text-base font-medium text-secondary dark:text-white">
            These theme is ready to use and you can totally customize as per
            your requirement.
          </p>
          <p className="text-base font-medium text-secondary dark:text-white">
            For Customize, You should have knowledge of NextJs, sanity.io, ReactJs,
            Tailwind and JSX to be able to modify these template.
          </p>
        </div>
      </div>

      <div
        className={`lg:hidden block fixed top-0 right-0 h-full w-full bg-white dark:bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${docNavbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-midnight_text dark:text-white">
            Docs Menu
          </h2>
          <button
            onClick={() => setDocNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-white"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="px-4">
          <DocNavigation />
        </nav>
      </div>
    </>
  );
};
