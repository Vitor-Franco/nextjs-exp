import Link from "next/link";

function Header() {
	return (
		<header>
			<nav className="h-24 border-b border-b-zinc-800 items-center flex px-10">
				<ul className="flex space-x-4 underline container mx-auto">
					<li>
						<Link href="/" className="text-white">
							Home
						</Link>
					</li>
					<li>
						<Link href="/collaborators" className="text-white">
							Collaborators
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
