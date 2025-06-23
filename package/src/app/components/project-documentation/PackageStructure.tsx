import Image from "next/image";

export const PackageStructure = () => {
  const Counts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  return (
    <div id="structure" className="md:scroll-m-[130px] scroll-m-28">
      <h3 className=" text-black text-2xl font-semibold mt-8 dark:text-white">
        Package Structure
      </h3>
      <div className="rounded-md p-6 pt-3 border border-smokyBlack/10 dark:border-white/20 mt-6">
        <div className="flex items-center gap-4">
          <h5 className="text-base font-medium mt-3 mb-1">
            Blogforge Tailwind Nextjs Templates
          </h5>
        </div>
        <ul className="ps-3 md:ps-5 list-unstyled">
          <li className="py-2">
            <div className="flex items-center gap-3">
              <p className="text-xl text-secondary dark:text-white" >|—</p>
              <span className="font-medium text-secondary dark:text-white">
                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                frontend
              </span>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-between gap-2 mt-2">
                {
                  Counts.slice(0, 30).map((item, index) => {
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
                              <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                              public
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                            <span className="font-medium text-secondary dark:text-white">
                              <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                              src
                            </span>
                          </div>
                          <div className="flex">
                            <div className="flex flex-col justify-between gap-2 mt-2">
                              {
                                Counts.slice(0, 26).map((item, index) => {
                                  return (
                                    <p key={index} className="text-xl text-secondary dark:text-white" >|</p>
                                  )
                                })
                              }
                            </div>
                            <ul className="ps-3 md:ps-12 list-unstyled">
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-secondary dark:text-white" >|—</p>
                                  <span className="font-medium text-secondary dark:text-white">
                                    <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                    app
                                  </span>
                                </div>
                                <div className="flex">
                                  <div className="flex flex-col justify-between gap-2 mt-2">
                                    {
                                      Counts.slice(0, 20).map((item, index) => {
                                        return (
                                          <p key={index} className="text-xl text-secondary dark:text-white" >|</p>
                                        )
                                      })
                                    }
                                  </div>
                                  <ul className="ps-3 md:ps-12 list-unstyled red">
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-secondary dark:text-white" >|—</p>
                                        <span className="font-medium text-secondary dark:text-white">
                                          <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                          (site)
                                        </span>{" "}
                                        <span className="fs-9 text-secondary dark:text-white ms-4">
                                          (Contains all the pages)
                                        </span>
                                      </div>
                                      <div className="flex">
                                        <div className="flex flex-col justify-between gap-2 mt-2">
                                          {
                                            Counts.slice(0, 10).map((item, index) => {
                                              return (
                                                <p key={index} className="text-xl text-secondary dark:text-white" >|</p>
                                              )
                                            })
                                          }
                                        </div>

                                        <ul className="ps-5 md:ps-12 list-unstyled">
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-secondary dark:text-white" >|—</p>
                                              <span className="font-medium text-secondary dark:text-white">
                                                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                (auth)
                                              </span>
                                            </div>
                                            <div className="flex">
                                              <div className="flex flex-col justify-between gap-1 mt-2">
                                                {
                                                  Counts.slice(0, 2).map((item, index) => {
                                                    return (
                                                      <p key={index} className="text-xl text-secondary dark:text-white" >|</p>
                                                    )
                                                  })
                                                }
                                              </div>
                                              <ul className="ps-3 md:ps-12 list-unstyled">
                                                <li className="py-2">

                                                  <div className="flex items-center gap-8">
                                                    <p className="text-xl text-secondary dark:text-white" >|</p>
                                                    <div className="flex items-center gap-3">
                                                      <p className="text-xl text-secondary dark:text-white" >|—</p>
                                                      <span className="font-medium text-secondary dark:text-white">
                                                        <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                        signin
                                                      </span>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="py-2">
                                                  <div className="flex items-center gap-8">
                                                    <p className="text-xl text-secondary dark:text-white" >|</p>
                                                    <div className="flex items-center gap-3">
                                                      <p className="text-xl text-secondary dark:text-white" >|—</p>
                                                      <span className="font-medium text-secondary dark:text-white">
                                                        <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                        signup
                                                      </span>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="py-2">
                                                  <div className="flex items-center gap-8">
                                                    <p className="text-xl text-secondary dark:text-white" >|</p>
                                                    <div className="flex items-center gap-3">
                                                      <p className="text-xl text-secondary dark:text-white" >|—</p>
                                                      <span className="font-medium text-secondary dark:text-white">
                                                        <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                        forgot-password
                                                      </span>
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="py-2">

                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-secondary dark:text-white" >|—</p>
                                              <span className="font-medium text-secondary dark:text-white">
                                                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                author
                                              </span>
                                            </div>

                                          </li>
                                          <li className="py-2">

                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-secondary dark:text-white" >|—</p>
                                              <span className="font-medium text-secondary dark:text-white">
                                                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                blog
                                              </span>
                                            </div>

                                          </li>
                                          <li className="py-2">

                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-secondary dark:text-white" >|—</p>
                                              <span className="font-medium text-secondary dark:text-white">
                                                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                contact-us
                                              </span>
                                            </div>

                                          </li>
                                          <li className="py-2">

                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-secondary dark:text-white" >|—</p>
                                              <span className="font-medium text-secondary dark:text-white">
                                                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                documentation
                                              </span>
                                            </div>

                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-secondary dark:text-white" >|—</p>
                                              <span className="font-medium text-secondary dark:text-white">
                                                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                pricing
                                              </span>
                                            </div>
                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-secondary dark:text-white" >|—</p>
                                              <span className="font-medium text-secondary dark:text-white">
                                                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                privacy-policy
                                              </span>
                                            </div>
                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-secondary dark:text-white" >|—</p>
                                              <span className="font-medium text-secondary dark:text-white">
                                                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                                terms-and-conditions
                                              </span>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-secondary dark:text-white" >|—</p>
                                        <span className="font-medium text-secondary dark:text-white">
                                          <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                          api
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center flex-wrap gap-3">
                                        <p className="text-xl text-secondary dark:text-white" >|—</p>
                                        <span className="font-medium text-secondary dark:text-white">
                                          <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                          components
                                        </span>{" "}
                                        <span className="fs-9 text-secondary dark:text-white ms-4">
                                          (All the Components of this template.)
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-secondary dark:text-white" >|—</p>
                                        <span className="font-medium text-secondary dark:text-white">
                                          global.css
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-secondary dark:text-white" >|—</p>
                                        <span className="font-medium text-secondary dark:text-white">
                                          layout.tsx
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-secondary dark:text-white" >|—</p>
                                        <span className="font-medium text-secondary dark:text-white">
                                          not-found.tsx
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-secondary dark:text-white" >|—</p>
                                        <span className="font-medium text-secondary dark:text-white">
                                          page.tsx
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-secondary dark:text-white" >|—</p>
                                  <span className="font-medium text-secondary dark:text-white">
                                    <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                    lib
                                  </span>
                                </div>
                              </li>
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-secondary dark:text-white" >|—</p>
                                  <span className="font-medium text-secondary dark:text-white">
                                    <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                    providers
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                            <span className="font-medium text-secondary dark:text-white">
                              <i className="ti ti-file me-2 text-primary font-bold" />
                              next.config.mjs
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                            <span className="font-medium text-secondary dark:text-white">
                              <i className="ti ti-file me-2 text-primary font-bold" />
                              postcss.config.mjs
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                            <span className="font-medium text-secondary dark:text-white">
                              <i className="ti ti-file me-2 text-primary font-bold" />
                              package.json
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                            <span className="font-medium text-secondary dark:text-white">
                              <i className="ti ti-file me-2 text-primary font-bold" />
                              tailwind.config.ts
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                            <span className="font-medium text-secondary dark:text-white">
                              <i className="ti ti-file me-2 text-primary font-bold" />
                              tsconfig.json
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

        <ul className="ps-3 md:ps-5 list-unstyled">
          <li className="py-2">
            <div className="flex items-center gap-3">
              <p className="text-xl text-secondary dark:text-white" >|—</p>
              <span className="font-medium text-secondary dark:text-white">
                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                studio
              </span>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-between gap-2 mt-2">
                {
                  Counts.slice(0, 14).map((item, index) => {
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
                              <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                              sanity
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                            <span className="font-medium text-secondary dark:text-white">
                              <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                              backup
                            </span>
                          </div>
                          <div className="flex">
                            <div className="flex flex-col justify-between gap-2 mt-2">
                              {
                                Counts.slice(0, 1).map((item, index) => {
                                  return (
                                    <p key={index} className="text-xl text-secondary dark:text-white" >|</p>
                                  )
                                })
                              }
                            </div>
                            <ul className="ps-3 md:ps-12 list-unstyled">
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-secondary dark:text-white" >|—</p>
                                  <span className="font-medium text-secondary dark:text-white">
                                    <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                    production.tsr.gz
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <li className="py-2">
                            <div className="flex items-center gap-3">
                              <p className="text-xl text-secondary dark:text-white" >|—</p>
                              <span className="font-medium text-secondary dark:text-white">
                                <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                dist
                              </span>
                            </div>
                          </li>
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                            <span className="font-medium text-secondary dark:text-white">
                              <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                              schemaTypes
                            </span>
                          </div>
                          <div className="flex">
                            <div className="flex flex-col justify-between gap-2 mt-2">
                              {
                                Counts.slice(0, 5).map((item, index) => {
                                  return (
                                    <p key={index} className="text-xl text-secondary dark:text-white" >|</p>
                                  )
                                })
                              }
                            </div>
                            <ul className="ps-3 md:ps-12 list-unstyled">
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-secondary dark:text-white" >|—</p>
                                  <span className="font-medium text-secondary dark:text-white">
                                    <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                    author.ts
                                  </span>
                                </div>
                              </li>
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-secondary dark:text-white" >|—</p>
                                  <span className="font-medium text-secondary dark:text-white">
                                    <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                    blockContent.ts
                                  </span>
                                </div>
                              </li>
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-secondary dark:text-white" >|—</p>
                                  <span className="font-medium text-secondary dark:text-white">
                                    <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                    category.ts
                                  </span>
                                </div>
                              </li>
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-secondary dark:text-white" >|—</p>
                                  <span className="font-medium text-secondary dark:text-white">
                                    <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                    index.ts
                                  </span>
                                </div>
                              </li>
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-secondary dark:text-white" >|—</p>
                                  <span className="font-medium text-secondary dark:text-white">
                                    <Image src={"/images/icon/folder-icon.svg"} alt="folder-icon" width={16} height={16} className="text-primary text-base inline-block me-2" />
                                    post.ts
                                  </span>
                                </div>
                              </li>
                            </ul>
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
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-secondary dark:text-white" >|—</p>
                            <span className="font-medium text-secondary dark:text-white">
                              sanity.config.ts
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
    </div>
  );
};
