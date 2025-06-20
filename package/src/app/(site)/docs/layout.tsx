import Sidebar from "@/app/components/sidebar";


export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex pt-20">
      <div className="w-72 border-r border-smokyBlack/10 p-6">
        <Sidebar />
      </div>
      <main className="flex-1 py-20 px-40">{children}</main>
    </div>
  )
}
