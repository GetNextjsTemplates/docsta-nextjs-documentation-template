"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

const DeveloperFlow = () => {
    const [devFlowData, setDevFlowData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setDevFlowData(data?.developerFlowData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <section className="dark:bg-smokyBlack">
            <div className="container">
                <div className="flex flex-col gap-6 sm:gap-10 items-center justify-center py-12 sm:py-20">
                    <h2 className="text-center">Designed For Developer Flow</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                        <div className="border border-smokyBlack/10 dark:border-white/10 rounded-xl">
                            <div className="flex flex-wrap gap-3 p-6 lg:p-9">
                                {devFlowData?.fastSetup?.tags.map((item: any, index: any) => (
                                    <button
                                        key={index}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-base ${item === "Utility Styling"
                                            ? "border border-primary text-primary"
                                            : "bg-paleSlate dark:bg-white/10 text-secondary dark:text-white"
                                            }`}
                                    >
                                        {item === "Utility Styling" ?
                                            <Image src={"/images/icon/check-round-pri-icon.svg"} alt="check-icon" width={16} height={16} />
                                            :
                                            <>
                                                <Image src={"/images/icon/check-round-icon.svg"} alt="check-icon" width={16} height={16} className="block dark:hidden" />
                                                <Image src={"/images/icon/dark-check-icon.svg"} alt="check-icon" width={16} height={16} className="hidden dark:block" />
                                            </>
                                        }
                                        {item}
                                    </button>
                                ))}

                            </div>
                            <div className="p-6 lg:p-9 border-t border-smokyBlack/10 dark:border-white/10 flex flex-col gap-5">
                                {devFlowData?.fastSetup?.feature?.icon &&
                                    <Image src={devFlowData?.fastSetup?.feature?.icon} alt="icon" width={32} height={32} />
                                }
                                <div className="flex flex-col gap-3">
                                    <h6 className="font-bold">{devFlowData?.fastSetup?.feature?.title}</h6>
                                    <p className="text-secondary">{devFlowData?.fastSetup?.feature?.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row lg:flex-col h-full gap-7">
                            {devFlowData?.features?.map((value: any, index: any) => {
                                return (
                                    <div key={index} className="h-full w-full border border-smokyBlack/10 dark:border-white/10 rounded-xl p-6 lg:p-9 flex flex-col justify-center gap-5">
                                        <Image src={value?.icon} alt="icon" width={32} height={32} />
                                        <div className="flex flex-col gap-3">
                                            <h6 className="font-bold">{value?.title}</h6>
                                            <p className="text-secondary">{value?.description}</p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeveloperFlow