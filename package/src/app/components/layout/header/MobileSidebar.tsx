import Link from "next/link";

type MobileSidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {

    return (
        <>
            {isOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-full bg-black/50 z-40'
                    onClick={onClose}
                />
            )}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-baseInk shadow-lg transform transition-transform duration-300 max-w-xs ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } z-50`}
            >
                <div className='flex items-center justify-between p-4'>
                    <h6 className='font-bold'>Menu</h6>
                    <button
                        className="cursor-pointer"
                        onClick={onClose}
                        aria-label='Close mobile menu'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <path
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </div>
                <div className='p-4'>
                    <ul className='flex flex-col gap-2'>
                        <li className="hover:text-primary">
                            <Link href={"/"}>Docs</Link>
                        </li>
                        <li className="hover:text-primary">
                            <Link href={"/"}>Resources</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileSidebar;
