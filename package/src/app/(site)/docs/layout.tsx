import Sidebar from "@/app/components/sidebar";


export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen py-20">
      <div className="w-64 border-r px-4 py-6">
        <Sidebar />
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
