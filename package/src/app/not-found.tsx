
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Page | Docsta",
};

const NotFound = () => {
  return (
    <section>
      <div className="py-20">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-8 mt-20">
            <div className="w-full h-[400px] sm:h-[500px]">
              <Image src={"/images/not-found/notFound.svg"} alt="notfound" width={400} height={500} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-4 items-center text-center max-w-xl">
              <h3 className="font-medium">Sorry! The page not found</h3>
              <Link href={"/"}>
                <div className="btn-gradient py-3 px-6 w-fit">
                  <span className="text-white font-bold">Back to Home</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
