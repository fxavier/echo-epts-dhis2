export default function AnalyticsPage() {
  return (
    <main className="flex-1 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-muted-foreground">View your analytics and insights.</p>
      </div>

      <div className="grid gap-6">
        {/* Add your analytics content here */}
        <div className="rounded-xl border bg-card p-6">
          <p className="text-muted-foreground">Analytics content will go here.</p>
        </div>
      </div>
    </main>
  );
}