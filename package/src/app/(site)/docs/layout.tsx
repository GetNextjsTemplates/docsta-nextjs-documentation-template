import Sidebar from "@/app/components/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex pt-[53px] overflow-hidden dark:bg-smokyBlack/10">
      
      <aside className="hidden md:flex max-w-72 w-full border-r border-smokyBlack/10 sticky top-[80px] h-[calc(100vh-80px)] overflow-y-auto p-6">
        <Sidebar />
      </aside>

      <main className="w-full overflow-y-auto">
        {children}
      </main>

    </div>
  );
}
