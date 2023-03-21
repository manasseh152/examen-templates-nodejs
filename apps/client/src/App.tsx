import { useEffect, useState } from "react";

function App() {
	const [serverMessage, setServerMessage] = useState<string | null>(null);

	useEffect(() => {
		fetch("/api")
			.then(res => res.json())
			.then(data => setServerMessage(data.message))
			.catch(err => console.error(err));
	}, []);

	return (
		<main className="p-2">
			<h1 className="text-2xl font-bold text-center">
				Welcom to React! from vite and NestJS
			</h1>
			{serverMessage && (
				<p className="text-center">
					Respones from the server:{" "}
					<code className="p-1 bg-gray-200 rounded">{serverMessage}</code>
				</p>
			)}
		</main>
	);
}

export default App;
