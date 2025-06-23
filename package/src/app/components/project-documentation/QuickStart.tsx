export const QuickStart = () => {
  return (
    <div className="pb-10 md:scroll-m-[130px] scroll-m-28" id="start">
      <h3 className=" text-black text-2xl font-semibold mt-8 dark:text-white">
        Quick Start for Frontend package
      </h3>
      <div className="p-6 rounded-md border mt-6 border-smokyBlack/10 dark:border-white/20 ">
        <h6 className="dark:text-white text-lg font-medium">1. Requirements</h6>
        <p className="text-base font-medium text-secondary dark:text-white">
          Before proceeding, you need to have the latest stable{" "}
          <a href="https://nodejs.org/" className="text-light-olive">
            node.js
          </a>{" "}
        </p>
        <h6 className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">
          Recommended environment:
        </h6>
        <ul className="list-disc ps-6">
          <li>node js 20+</li>
          <li>npm js 10+</li>
        </ul>
      </div>
      <div className="p-6 rounded-md border mt-6 border-smokyBlack/10 dark:border-white/20">
        <h6 className="dark:text-white text-lg font-medium">2. Install</h6>
        <p className="text-base font-medium text-secondary dark:text-white">
          Open frontend folder and install its dependencies. We recommanded yarn
          or npm.{" "}
        </p>
        <h6 className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">
          1) Install with npm:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/70">
            <span className="text-yellow-500">cd</span> frontend
          </p>
          <p className="text-sm text-white/70 mt-2">npm install</p>
        </div>
        <h6 className="mt-4 mb-2 dark:text-white text-dark font-medium text-base">
          1) Install with yarn:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/70">
            <span className="text-yellow-500">cd</span> frontend
          </p>
          <p className="text-sm text-white/70 mt-2">yarn install</p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-6 border-smokyBlack/10 dark:border-white/20">
        <h6 className="dark:text-white text-lg font-medium">3. Start</h6>
        <p className="text-base font-medium text-secondary dark:text-white mb-4">
          Once npm install is done now you an run the app.
        </p>
        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/70">npm run dev or yarn run dev</p>
        </div>
        <p className="text-base font-medium text-secondary dark:text-white my-4">
          This command will start a local webserver{" "}
          <span className="dark:text-white">http://localhost:3000:</span>
        </p>
        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/70">
            {"> blogforge@1.0.0 dev"}
          </p>
          <p className="text-sm text-white/70 mt-1">{"> next dev"}</p>
          <p className="text-sm text-white/70 mt-6">{"-Next.js 15.2.4"}</p>
          <p className="text-sm text-white/70 mt-1">
            {"-Local: http://localhost:3000"}
          </p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-6 border-smokyBlack/10 dark:border-white/20">
        <h6 className="dark:text-white text-lg font-medium">
          4. Build / Deployment
        </h6>
        <p className="text-base font-medium text-secondary dark:text-white mb-4">
          After adding url run below command for build a app.
        </p>

        <div className="py-4 px-3 rounded-md bg-black">
          <p className="text-sm text-white/70">npm run build or yarn build</p>
        </div>
        <p className="text-base font-medium text-secondary dark:text-white mt-6">
          Finally, Your webiste is ready to be deployed.🥳
        </p>
      </div>
    </div>
  );
};
