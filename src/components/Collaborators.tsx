export async function Collaborators() {
	const result = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json(),
  )

	return (
		<ul className="ml-5 py-2 px-5 list-decimal">
			{result.map((user: {
        id: number;
        name: string;
      }) => (
				<li className='text-lg text-green-200' key={user.id}>{user.name}</li>
			))}
		</ul>
	);
}
