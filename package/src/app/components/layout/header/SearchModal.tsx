'use client';

import { useEffect, useRef, useState } from 'react';
import { sanity } from '@/lib/sanity';
import { getAllDocsQuery } from '@/lib/sanityQueries';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [search, setSearch] = useState('');
    const [docs, setDocs] = useState([]);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let handleClickOutside: (event: MouseEvent) => void;

        const fetchDocs = async () => {
            const res = await sanity.fetch(getAllDocsQuery);
            setDocs(res);
        };

        if (isOpen) {
            fetchDocs();

            handleClickOutside = (event: MouseEvent) => {
                if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                    onClose();
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
        } else {
            setSearch('');
        }

        return () => {
            if (handleClickOutside) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, [isOpen, onClose]);


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-30 z-50">
            <div
                ref={modalRef}
                className="relative bg-white dark:bg-smokyBlack w-full max-w-xl rounded-lg shadow-lg m-5"
            >
                <div className="relative flex items-center w-full rounded-t-lg gap-4 px-3 py-4 sm:p-5 bg-white dark:bg-smokyBlack focus-within:border-primary/60 dark:focus-within:border-primary/60 shadow-xs">
                    <div className="mr-2">
                        <Image
                            src="/images/icon/search-icon.svg"
                            alt="search-icon"
                            width={18}
                            height={18}
                        />
                    </div>
                    <input
                        type="text"
                        autoFocus
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search..."
                        className="flex-1 bg-transparent outline-none text-sm"
                    />
                </div>
                <div className="max-h-[350px] overflow-auto">
                    {(() => {
                        const filteredDocs = search
                            ? docs.filter((doc: any) =>
                                doc.title.toLowerCase().includes(search.toLowerCase())
                            )
                            : docs;

                        if (filteredDocs.length === 0) {
                            return (
                                <div className="flex flex-col items-center justify-center py-10 text-center text-secondary">
                                    <Image
                                        src="/images/icon/file-not-found.svg"
                                        alt="Not found"
                                        width={60}
                                        height={60}
                                        className="mb-4"
                                    />
                                    <p className='text-secondary'>No results found</p>
                                </div>
                            );
                        }

                        return filteredDocs.slice(0, 10).map((value: any, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-3 px-3 py-4 sm:p-5 border-t border-smokyBlack/10 dark:border-white/10 hover:bg-primary/10"
                                onClick={onClose}
                            >
                                <div className="flex items-center justify-between gap-3 ">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary/10 w-fit p-2 rounded-full">
                                            <Image
                                                src="/images/icon/file-primary-icon.svg"
                                                alt="file-icon"
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                        <Link href={`/docs/${value?.slug?.current}`}>
                                            <p className="font-medium">{value?.title}</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill="#5E696E"
                                                d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
                                                strokeWidth="0"
                                                stroke="#5E696E"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-12 pl-4 border-l-2 border-secondary/20">
                                    <Link href={`/docs/${value?.slug?.current}`}>
                                        <p className="text-secondary hover:text-smokyBlack">
                                            {value?.content
                                                ?.filter((block: any) => block.style === 'h5')
                                                ?.slice(0, 2)
                                                ?.map((block: any) => block.children?.[0]?.text ?? '')
                                                ?.join(' ')
                                                ?.slice(0, 60) + '...'}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        ));
                    })()}
                </div>

            </div>
        </div>
    );
}
