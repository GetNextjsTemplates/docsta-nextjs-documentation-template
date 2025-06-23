import SanityIntro from "./SanityIntro";

export const SanityConfiguration = () => {
  return (
    <>
      <div className="pb-10 md:scroll-m-[130px] scroll-m-28" id="sanity-configuration">
        <h3 className=" text-black text-2xl font-semibold mt-14 dark:text-white">
          Sanity Configuration
        </h3>
        <SanityIntro/>
      </div>
    </>
  );
};
