"use client";

function Card({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="w-full">
			<h3 className="text-blue-400">Client Component</h3>
			<div className="border border-blue-400 p-5">
				<h3 className="text-green-400">Server component as a prop</h3>
				<div className="border-green-400 border">{children}</div>

				<button
					onClick={() => alert("Clicou no botão!")}
					className="bg-blue-400 px-4 py-1 rounded-sm mt-2 text-black"
					type="button"
				>
					Client component button with event handler!
				</button>
			</div>
		</div>
	);
}

export { Card };
