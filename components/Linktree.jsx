export default function Linktree() {
	// change the variable here
	const links = [
		{
			color: "bg-red-300",
			text: "Buy me coffee ☕️",
			link: "https://github.com",
		},
		{
			color: "bg-sky-300",
			text: "Join My Newslatter 🗞",
			link: "https://github.com",
		},
		{
			color: "bg-pink-400",
			text: "Learn Code 💻",
			link: "https://github.com",
		},
	];

	return (
		<div className="w-full h-screen bg-yellow-300 flex justify-center items-center text-black">
			<div className="max-w-2xl mx-auto flex flex-col gap-5">
				<div className="h-48 w-48 mx-auto">
					<div className=" aspect-w-1 aspect-h-1">
						<img
							src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
							className=" rounded-full object-cover  object-center"
						/>
					</div>
				</div>
				<div className="text-center p-3">
					<h1 className="text-4xl font-bold">Chen Sokheng</h1>
					<p className="text-lg mt-3">
						Lorem Ipsum has been the industry's since the 500s.
					</p>
				</div>
				<div className="flex flex-col gap-10">
					{links.map(({ text, color, link }, index) => {
						return (
							<a href={link} key={index} target="_blank">
								<div
									className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
								>
									{text}
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}
