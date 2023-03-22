async function getHello() {
	const response = await fetch("http://localhost:3000/api/hello");
	const json = (await response.json()) as { message: string };
	return json;
}

export default async function Home() {
	const hello = await getHello();

	return (
		<main>
			<section>
				<h1>Nextjs + React + Typescript + Tailwind</h1>
			</section>
			<section>
				<h2>API</h2>
				<p>{hello.message}</p>
				<details>
					<summary>Source</summary>
					<pre>
						<code>{JSON.stringify(hello, null, 2)}</code>
					</pre>
				</details>
			</section>
		</main>
	);
}
