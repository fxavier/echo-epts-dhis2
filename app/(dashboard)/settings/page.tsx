export default function SettingsPage() {
  return (
    <main className="flex-1 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings.</p>
      </div>

      <div className="grid gap-6">
        {/* Add your settings content here */}
        <div className="rounded-xl border bg-card p-6">
          <p className="text-muted-foreground">Settings content will go here.</p>
        </div>
      </div>
    </main>
  );
}