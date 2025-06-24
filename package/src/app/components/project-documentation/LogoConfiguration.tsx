export const LogoConfiguration = () => {
  return (
    <>
      <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white" >Logo</h3>
      <div className="p-6 rounded-md border mt-4 border-smokyBlack/10 dark:border-white/20">
        <p className="text-base font-medium text-secondary dark:text-white flex lg:flex-row flex-col" >1. Change Logo over here : <span className="font-semibold text-base overflow-x-auto">src/app/components/layout/header/logo/index.tsx</span></p>
        <div className="py-4 px-3 rounded-md bg-black mt-8">

          <div className="text-sm">
            <p className="text-white/70">&#x3C;Link href=&#x22;/&#x22;&#x3E;</p>
            <p className="ms-2 text-white/70">&#x3C;Image</p>
            <p className="ms-3 text-white/70">src=&#x22;/images/logo/logo.svg&#x22;</p>
            <p className="ms-3 text-white/70">alt=&#x22;logo&#x22;</p>
            <p className="ms-3 text-white/70">width={130}</p>
            <p className="ms-3 text-white/70">height={40}</p>
            <p className="ms-3 text-white/70">className=&#x27;dark:hidden&#x27;</p>
            <p className="text-white/70">/&#x3E;</p>
            <p className="ms-2 text-white/70">&#x3C;Image</p>
            <p className="ms-5 text-white/70">src=&#x22;/images/logo/logo-white.svg&#x22;</p>
            <p className="ms-5 text-white/70">alt=&#x22;logo&#x22;</p>
            <p className="ms-5 text-white/70">width={130}</p>
            <p className="ms-5 text-white/70">height={40}</p>
            <p className="ms-5 text-white/70">className=&#x27;dark:block hidden&#x27;</p>
            <p className="ms-2 text-white/70">/&#x3E;</p>
            <p className="ms-2 text-white/70">&#x3C;/Link&#x3E;</p>
          </div>
        </div>
      </div>
    </>
  )
}