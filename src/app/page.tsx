import { Card } from "@/components/Card";
import { Collaborators } from "@/components/Collaborators";

export default async function Home() {
	return (
			<div className="mx-auto flex items-center flex-col justify-center">
				<Card>
					<Collaborators />
				</Card>
			</div>
	);
}
