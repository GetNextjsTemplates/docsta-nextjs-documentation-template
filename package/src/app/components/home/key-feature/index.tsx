"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const KeyFeature = () => {
    const [keyfeatureData, setKeyfeatureData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setKeyfeatureData(data?.keyFeatureData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <section>
            <div className="pt-11 sm:pt-20 pb-5 dark:bg-smokyBlack/10">
                <div className="container">
                    <div className="flex flex-col gap-6 sm:gap-10">
                        <div className="flex flex-col items-center text-center gap-2.5">
                            <p className="uppercase text-primary">Docsta Key features</p>
                            <h2>Everything You Need — Nothing You Don’t</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                            {keyfeatureData?.map((value: any, index: any) => {
                                return (
                                    <div key={index} className="flex items-start gap-5">
                                        {value?.icon &&
                                            <div className="bg-primary/10 p-2 w-fit rounded-xl flex-shrink-0">
                                                <Image src={value?.icon} alt="icon" width={24} height={24} />
                                            </div>
                                        }
                                        <div className="flex-1">
                                            <p className="font-bold">{value?.title}</p>
                                            <p>{value?.descp}</p>
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

export default KeyFeature