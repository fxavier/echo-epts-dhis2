export default function ProjectsPage() {
  return (
    <main className="flex-1 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="text-muted-foreground">Manage your projects here.</p>
      </div>

      <div className="grid gap-6">
        {/* Add your projects content here */}
        <div className="rounded-xl border bg-card p-6">
          <p className="text-muted-foreground">Project management content will go here.</p>
        </div>
      </div>
    </main>
  );
}