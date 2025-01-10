export default function MessagesPage() {
	return (
		<main className='flex-1 p-6'>
			<div className='mb-8'>
				<h1 className='text-3xl font-bold text-white'>Messages</h1>
				<p className='text-muted-foreground'>View your messages here.</p>
			</div>

			<div className='grid gap-6'>
				{/* Add your messages content here */}
				<div className='rounded-xl border bg-card p-6'>
					<p className='text-muted-foreground'>
						Messages content will go here.
					</p>
				</div>
			</div>
		</main>
	);
}
