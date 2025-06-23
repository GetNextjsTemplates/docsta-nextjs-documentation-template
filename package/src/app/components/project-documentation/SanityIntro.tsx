import Image from "next/image"
import Link from "next/link"

const SanityIntro = () => {
    const Counts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div>
            <h3 className="text-black text-xl font-semibold mt-8 dark:text-white">Steps for creating account in Sanity.io</h3>
            <div className="p-6 rounded-md border mt-6 border-smokyBlack/10 dark:border-white/20 ">
                <h6 className="dark:text-white text-lg font-medium">1. Visit Sanity.io</h6>
                <p className="text-base font-medium text-secondary dark:text-white"> Go to
                    <Link href={"/https://www.sanity.io"} className="font-semibold text-base hover:text-primary"> https://www.sanity.io </Link>in your web browser.</p>
            </div>
            <div className="p-6 rounded-md border mt-6 border-smokyBlack/10 dark:border-white/20 ">
                <h6 className="dark:text-white text-lg font-medium">2. Click on “Start building” or “Sign in”</h6>
                <p className="text-base font-medium text-secondary dark:text-white"> On the homepage, click on the "Start building" or "Sign in" button in the top-right corner.</p>
            </div>
            <div className="p-6 rounded-md border mt-6 border-smokyBlack/10 dark:border-white/20 ">
                <h6 className="dark:text-white text-lg font-medium">3. Choose Sign Up Method</h6>
                <p className="mt-4 mb-2 dark:text-white text-dark font-medium text-base"> You’ll be redirected to the login/signup page. Choose one of the following sign-up methods:</p>
                <ul className="list-disc ps-6">
                    <li>GitHub</li>
                    <li>Google</li>
                    <li>Email</li>
                </ul>
                <p className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">Recommended: Use your GitHub account for smoother CLI and deployment integration.</p>
            </div>

            <div className="p-6 rounded-md border mt-6 border-smokyBlack/10 dark:border-white/20 ">
                <h6 className="dark:text-white text-lg font-medium">4. Dashboard Access</h6>
                <p className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">After signing up, you’ll be taken to the Sanity Manage Dashboard:</p>
                <ul className="list-disc ps-6">
                    <li>You can create your first project.</li>
                    <li>Access ProjectId, Dataset, Token etc.</li>
                </ul>
                <div className="w-full h-full mt-8">
                    <Image src={"/images/documentation/sanity_database.png"} alt="dashboard-studio" width={300} height={300} className="w-full h-full object-cover" />
                </div>
            </div>

            <h3 className="text-black text-xl font-semibold mt-8 dark:text-white">Sanity CLI installed globally</h3>
            <div className="p-6 rounded-md border mt-6 border-smokyBlack/10 dark:border-white/20 ">
                <h6 className="dark:text-white text-lg font-medium">5. Install Sanity CLI</h6>
                <p className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">Run the following command in your terminal to install the CLI globally:</p>
                <div className="py-4 px-3 rounded-md bg-black mt-8">
                    <p className="text-sm text-white/70">npm install -g @sanity/cli</p>
                </div>
            </div>


            <div className="rounded-md p-6 pt-3 border border-smokyBlack/10 dark:border-white/20 mt-6">
                <div className="flex flex-col gap-4">
                    <h5 className="text-base font-medium mt-3 mb-1">6. Rename .env.local File as .env</h5>
                    <p className="dark:text-white text-dark font-medium text-base">In your Sanity Studio project folder (e.g., studio/), rename .env file at the root level and named it as .env and set environmental variables.</p>

                    <ul className="ps-3 md:ps-5 list-unstyled">
                        <li className="py-2">
                            <div className="flex items-center gap-3">
                                <p className="text-xl text-secondary dark:text-white" >|—</p>
                                <span className="font-medium text-secondary dark:text-white">
                                    <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                    studio/
                                </span>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col justify-between gap-2 mt-2">
                                    {
                                        Counts.slice(0, 4).map((item, index) => {
                                            return (
                                                <p key={index} className="text-xl text-secondary dark:text-white" >|</p>
                                            )
                                        })
                                    }
                                </div>
                                <ul className="ps-3 md:ps-5 list-unstyled">
                                    <li className="py-0">
                                        <ul className="ps-2 ps-md-3 list-unstyled">
                                            <li className="py-2">
                                                <ul className="ps-3 md:ps-5 list-unstyled">

                                                    <li className="py-2">
                                                        <div className="flex items-center gap-3">
                                                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                                                            <span className="font-medium text-secondary dark:text-white">
                                                                .env
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="py-2">
                                                        <div className="flex items-center gap-3">
                                                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                                                            <span className="font-medium text-secondary dark:text-white">
                                                                sanity.config.ts
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="py-2">
                                                        <div className="flex items-center gap-3">
                                                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                                                            <span className="font-medium text-secondary dark:text-white">
                                                                sanity.cli.ts
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="py-4 px-3 rounded-md bg-black">
                    <p className="text-sm text-white/70 mb-3">SANITY_STUDIO_PROJECT_ID=your_project_id</p>
                    <p className="text-sm text-white/70">SANITY_STUDIO_DATASET=your_dataset_name</p>
                </div>

                <p className="dark:text-white text-dark font-medium text-base mt-3">In your frontend project folder (e.g., frontend/), rename .env.local file at the root level named as .env and set environment variable.</p>
                <div className="py-4 px-3 rounded-md bg-black mt-3">
                    <p className="text-sm text-white/70 mb-3">NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id</p>
                    <p className="text-sm text-white/70">NEXT_PUBLIC_SANITY_DATASET=your_dataset_name</p>
                </div>
            </div>
            <div className="rounded-md p-6 pt-3 border border-smokyBlack/10 dark:border-white/20 mt-6">
                <div className="flex flex-col gap-4">
                    <h5 className="text-base font-medium mt-3 mb-1">7. You will find .env variable from here </h5>
                    <p className="dark:text-white text-dark font-medium text-base">Add your Sanity project ID to the
                        <span className="font-semibold text-base overflow-x-auto">.env </span>file:
                    </p>
                    <div className="w-full h-full">
                        <Image src={"/images/documentation/sanity_id-img.png"} alt="sanity_id" width={300} height={300} className="w-full h-full object-cover" />
                    </div>

                    <p className="dark:text-white text-dark font-medium text-base">Add your Sanity Dataset to the
                        <span className="font-semibold text-base overflow-x-auto">.env </span>file:
                    </p>
                    <div className="w-full h-full">
                        <Image src={"/images/documentation/sanity_dataset.png"} alt="sanity_id" width={300} height={300} className="w-full h-full object-cover" />
                    </div>

                </div>
            </div>

            <div className="p-6 rounded-md border mt-6 border-smokyBlack/10 dark:border-white/20 ">
                <h6 className="dark:text-white text-lg font-medium">If You want to Import the dummy Dataset</h6>
                <p className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">Demo data is available in .studio/backup/production.tar.gz.</p>
                <p className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">For import dummy dataset go to /studio and in terminal run the following command</p>
                <div className="py-4 px-3 rounded-md bg-black mt-8">
                    <p className="text-sm text-white/70 mb-4">{`sanity dataset import <file> <targetDataset>`}</p>
                    <p className="text-sm text-white/70">eg: npx sanity dataset import ./backup/production.tar.gz production</p>
                </div>
            </div>
            <div className="rounded-md p-6 pt-3 border border-smokyBlack/10 dark:border-white/20 mt-6">
                <div className="flex flex-col gap-4">
                    <h5 className="text-base font-medium mt-3 mb-1">Navigate to Studio Folder</h5>
                    <div className="py-4 px-3 rounded-md bg-black">
                        <p className="text-sm text-white/70">cd studio</p>
                    </div>
                </div>
            </div>
            <div className="rounded-md p-6 pt-3 border border-smokyBlack/10 dark:border-white/20 mt-6">
                <div className="flex flex-col gap-4">
                    <h5 className="text-base font-medium mt-3 mb-1">Install Dependencies</h5>
                    <div className="py-4 px-3 rounded-md bg-black">
                        <p className="text-sm text-white/70">npm install</p>
                    </div>
                </div>
            </div>
            <div className="rounded-md p-6 pt-3 border border-smokyBlack/10 dark:border-white/20 mt-6">
                <div className="flex flex-col gap-4">
                    <h5 className="text-base font-medium mt-3 mb-1">Start Local Development Server</h5>
                    <div className="py-4 px-3 rounded-md bg-black">
                        <p className="text-sm text-white/70">npm run dev</p>
                    </div>
                    <p className="dark:text-white text-dark font-medium text-base">This will start your Sanity Studio at http://localhost:3333</p>
                </div>
            </div>
            <div className="rounded-md p-6 pt-3 border border-smokyBlack/10 dark:border-white/20 mt-6">
                <div className="flex flex-col gap-4">
                    <h5 className="text-base font-medium mt-3 mb-1">After starting local server you be redirected to Sanity Studio Dashboard. From the dashboard, you can post Articles and add Authors.</h5>
                    <div className="w-full h-full">
                        <Image src={"/images/documentation/sanity_dashboard.png"} alt="sanity_dashboard" width={300} height={300} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="rounded-md p-6 pt-3 border border-smokyBlack/10 dark:border-white/20 mt-6">
                <div className="flex flex-col gap-4">
                    <h5 className="text-base font-medium mt-3 mb-1">After dataset configuration and sanity set up you can deploy</h5>
                    <ul className="list-disc ps-6">
                        <li>1. Deploy on vercel</li>
                        <li>2. Any Deployment server (e.g. hostinger, netlify)</li>
                    </ul>
                    <p className="dark:text-white text-dark font-medium text-base">After Deployment you can set live url into Sanity studios section</p>
                    <div className="w-full h-full">
                        <Image src={"/images/documentation/sanity_studios.png"} alt="sanity_dashboard" width={300} height={300} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SanityIntro