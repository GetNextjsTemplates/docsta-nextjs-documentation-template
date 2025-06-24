export const ColorConfiguration = () => {
    return (
        <>
            <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white" >Colors</h3>
            <div className="p-6 rounded-md border mt-4 border-smokyBlack/10 dark:border-white/20">
                <p className="text-base font-medium text-secondary dark:text-white" ><span className="font-semibold text-lg"><span className="text-black dark:text-white" >1. Override Colors</span></span> <br />
                    For any change in colors : src/app/globals.css</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-white/70 flex flex-col gap-2">
                        <span>--color-primary: #0F7ED9;</span>
                        <span>--color-secondary: #5E696E;</span>
                        <span>--color-smokyBlack: #131516;</span>
                        <span>--color-paleSlate : #F6F8F9;</span>
                        <span>--color-charcoalDark: #2F3037;</span>
                    </p>
                </div>
            </div>
            <div className="p-6 rounded-md border mt-4 border-smokyBlack/10 dark:border-white/20">
                <p className="text-base font-medium text-secondary dark:text-white" ><span className="font-semibold text-lg text-black dark:text-white">2. Override Theme Colors</span> <br />
                    For change , go to : src/app/globals.css</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-white/70 flex flex-col gap-2">
                        <span>--color-primary: #0F7ED9;</span>
                        <span>--color-secondary: #5E696E;</span>
                    </p>
                </div>
            </div>
        </>
    )
}