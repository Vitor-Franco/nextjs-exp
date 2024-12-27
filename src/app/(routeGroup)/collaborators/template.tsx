"use client";
import type React from "react";
import { useState } from "react";

function CollaboratorsTemplate({ children }: { children: React.ReactNode }) {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<h3 className="text-xs text-zinc-500">
				Testing template.tsx file!{" "}
				<button
					className="ml-4 w-[80px] underline text-zinc-400"
					type="button"
					onClick={() => setCounter(counter + 1)}
				>
					clicks: {counter}
				</button>
			</h3>
			<div className="border border-zinc-900 p-4">{children}</div>
		</>
	);
}

export default CollaboratorsTemplate;
