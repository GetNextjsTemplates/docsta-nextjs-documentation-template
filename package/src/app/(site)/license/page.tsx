import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Licence | Docstra",
};

export default function LicensePage() {
    return (
        <section className="py-20 dark:bg-smokyBlack/30">
            <div className="container">
                <div className="mt-20 flex flex-col gap-6">
                    <h1 className="text-3xl font-bold">MIT License</h1>
                    <div className="flex flex-col gap-9 p-6 border border-smokyBlack/10 dark:border-white/10 rounded-xl">
                        <div>
                            <h6 className="mb-2 font-semibold">Free Templates / MIT License</h6>
                            <p className="text-secondary">
                                Copyright (c) 2020 by Docsta

                                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

                                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

                                THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                            </p>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold">Single Use License</h6>
                            <p className="text-secondary">
                                With Single Use License you will be able to use our product for yourself or your client project for 1 time. If you want to use it for multiple times, you need to buy another regular license. Ownership and Copyright of our template will stay with Docsta after purchasing single use license. That means you are allowed to use our template in your project and use for one client or yourself, but you are not allowed to create SaaS application and sell that, also you are not allowed to sell, distribute or lease our template as it is to anyone.. Here is what you can and can’t with single use license.
                            </p>
                            <h6 className="mb-2 mt-3.5 font-semibold">Can:</h6>
                            <ul className="flex flex-col gap-1.5">
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You have rights to use our product to your personal or client project.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You can modify our product as per your needs and use it for your personal or client project.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You can list the project you build with our products on your site / portfolio.</span>
                                </li>
                            </ul>
                            <h6 className="mb-2 mt-3.5 font-semibold">Can't:</h6>
                            <ul className="flex flex-col gap-1.5">
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You cannot use it for Multiple projects.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You cannot resell, redistribute, lease, license or offer the product as it is to any third party.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You cannot use it for any application / services / product for which end user can be charged for.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold">Multiple Use License</h6>
                            <p className="text-secondary">
                                With Multiple Use License you will be able to use our product for yourself as well as your client projects. You can use product for unlimited projects. Ownership and Copyright of our template will stay with WrapPixel after purchasing multiple use license. That means you are allowed to use our template in your project and use for multiple clients and yourself, but you are not allowed to create SaaS application and sell that, also you are not allowed to sell, distribute or lease our template as it is to anyone. Here is what you can and can’t with multiple use license.
                            </p>
                            <ul className="flex flex-col gap-1.5">
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You have rights to use our product to your personal as well as client project.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You can use our product for unlimited projects.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You can modify our product as per your needs and use it for your personal or client project.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary"> You can list the project you build with our products on your site / portfolio.</span>
                                </li>
                            </ul>
                            <h6 className="mb-2 mt-3.5 font-semibold">Can't:</h6>
                            <ul className="flex flex-col gap-1.5">
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You cannot resell, redistribute, lease, license or offer the product as it is to any third party.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You cannot use it for any application / services / product for which end user can be charged for.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e696e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span className="text-base text-secondary">You cannot use it for any application / services / product for which end user can be charged for.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
