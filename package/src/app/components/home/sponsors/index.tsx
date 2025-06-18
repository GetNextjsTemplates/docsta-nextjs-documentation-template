"use client";
import { useEffect, useState } from "react";
import Slider from "react-infinite-logo-slider";
import SingleSponsor from "./SingleSponsor";
import Link from "next/link";

const Sponsors = () => {
    const [sponsorData, setSponsorData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setSponsorData(data?.sponsorData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])
    return (
        <section>
            <div className="py-11 sm:py-20 dark:bg-smokyBlack/10">
                <div className="container">
                    <div className="flex flex-col text-center gap-6 md:gap-10">
                        <div className="text-center">
                            <h2>Sponsors</h2>
                        </div>
                        {sponsorData && sponsorData.length > 0 && (
                            <div>
                                <Slider
                                    width='200px'
                                    duration={20}
                                    pauseOnHover={true}
                                    blurBorders={false}>
                                    {sponsorData?.map((value: any, index: any) => {
                                        return (
                                            <SingleSponsor key={index} sponsor={value} />
                                        )
                                    })}
                                </Slider>
                            </div>
                        )}
                        <div className="w-full flex justify-center">
                        <div className="flex flex-col items-center gap-2.5 max-w-xl">
                            <p>Support Docsta on <Link href={"/"} className="text-primary hover:border-b hover:border-primary">Open Collective</Link> or <Link href={"/"} className="text-primary hover:border-b hover:border-primary">Patreon</Link> and help us to make it even better! Your support means a lot for us!</p>
                            <Link href={"/"}>
                                <div className="btn-gradient py-3 px-6 w-fit">
                                    <p className="text-white font-bold">Become a sponsor on OpenCollective</p>
                                </div>
                            </Link>
                            <Link href={"/"}>
                                <div className="btn-gradient py-3 px-6 w-fit">
                                    <p className="text-white font-bold">Support Docsta on Patreon</p>
                                </div>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors