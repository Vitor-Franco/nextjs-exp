import Link from "next/link";

export default async function Collaborators() {
	await new Promise((resolve) => setTimeout(resolve, 500));
	const result = await fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => res.json());

	return (
		<div>
			<h1 className="text-2xl font-bold">Collaborators</h1>

			<div className="grid grid-cols-4 gap-4 mt-10">
				{result.map(
					(user: {
						id: number;
						name: string;
					}) => (
						<Link
							href={`/collaborators/${user.id}`}
							className="p-5 hover:bg-zinc-800 border border-zinc-700 rounded-md"
							key={user.id}
						>
							{user.name}
						</Link>
					),
				)}
			</div>
		</div>
	);
}
