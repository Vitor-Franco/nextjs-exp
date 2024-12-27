import type { Metadata } from "next";

interface Props {
	params: Promise<{
		id: string;
	}>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const routeParams = await params;
	const user = await fetch(
		`https://jsonplaceholder.typicode.com/users/${routeParams.id}`,
	).then((res) => res.json());
	
	return {
		title: `${user.name} | ${user.company.name}`,
		description: `Conheça o usuário ${user.name} - ${user.company.name}`,
	};
}

export default async function Collaborator({ params }: Readonly<Props>) {
	const routeParams = await params;
	const user = await fetch(
		`https://jsonplaceholder.typicode.com/users/${routeParams.id}`,
	).then((res) => res.json());

	const posts = await fetch(
		`https://jsonplaceholder.typicode.com/users/${routeParams.id}/posts`,
	).then((res) => res.json());

	return (
		<div className="mb-5">
			<h1 className="text-lg">
				Conheça o usuário, <span className="font-bold">{user.name}</span>:
			</h1>

			<div className="h-48 w-3/4 border bg-zinc-900 border-zinc-700 rounded-lg mt-4 p-4 grid grid-cols-3 gap-4">
				<div className="flex flex-col">
					<p className="text-md font-semibold underline mb-2">
						Informações pessoais:
					</p>
					<span className="font-semibold text-sm">
						Telefone: <span className="font-normal">{user.phone}</span>
					</span>
					<span className="font-semibold text-sm">
						Email: <span className="font-normal">{user.email}</span>
					</span>
					<span className="font-semibold text-sm">
						Website: <span className="font-normal">{user.website}</span>
					</span>
				</div>

				<div className="flex flex-col">
					<p className="text-md font-semibold underline mb-2">Endereço:</p>
					<span className="font-semibold text-sm">
						Rua: <span className="font-normal">{user.address.street}</span>
					</span>
					<span className="font-semibold text-sm">
						Cidade: <span className="font-normal">{user.address.city}</span>
					</span>
					<span className="font-semibold text-sm">
						CEP: <span className="font-normal">{user.address.zipcode}</span>
					</span>
					<span className="font-semibold text-sm">
						Complemento:{" "}
						<span className="font-normal">{user.address?.suite}</span>
					</span>
				</div>

				<div className="flex flex-col">
					<p className="text-md font-semibold underline mb-2">Empresa:</p>

					<span className="font-semibold text-sm">
						Nome: <span className="font-normal">{user.company.name}</span>
					</span>
					<span className="font-semibold text-sm">
						Slogan:{" "}
						<span className="font-normal">{user.company.catchPhrase}</span>
					</span>
				</div>
			</div>

			<div>
				<p className="text-lg font-bold mt-10 mb-4">Posts:</p>
				<ul className="space-y-2">
					{posts.map((post: { id: number; title: string; body: string }) => (
						<li
							className="hover:bg-zinc-800 rounded border border-zinc-800 p-5"
							key={post.id}
						>
							{post.body}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
