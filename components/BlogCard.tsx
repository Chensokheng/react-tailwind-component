import Image from "next/image";
import React from "react";
export default function BlogCard() {
	return (
		<div className="w-90 sm:w-96 h-100 bg-black relative hover:ring-4 ring-yellow-400 rounded-2xl">
			<div className=" aspect-w-1 aspect-h-1 h-full relative">
				<Image
					alt=""
					fill
					src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
					className="object-cover object-center rounded-2xl"
				/>
			</div>
			<div className=" absolute w-full h-full top-0 flex flex-col">
				<div className="flex-1 "></div>
				<div className="flex-1 flex flex-col p-5  sm:p-10 bg-gradient-to-t from-black rounded-2xl">
					<div className="flex-1"></div>
					<div>
						<div className="flex items-center justify-between text-gray-300">
							<h1>{new Date().toDateString()}</h1>
							<div className="flex items-center gap-2">
								<div className="w-9 h-9">
									<div className=" aspect-w-1 aspect-h-1 relative">
										<Image
											fill
											alt=""
											src={
												"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
											}
											className=" rounded-full object-cover object-center"
										/>
									</div>
								</div>
								<h1>{"Jonas Kakaroto"}</h1>
							</div>
						</div>
						<h1 className="text-xl font-semibold text-white mt-5">
							{
								"33 Powerful Self-Reflection Questions for Personal Growth"
							}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
