import React from "react";

export default function Style2() {
	return (
		<div className=" w-full sm:w-96 bg-white shadow-sm border p-3 rounded-md flex items-end justify-between">
			<div>
				<span className="text-gray-500 text-sm">Total Subscribers</span>
				<div className="flex items-end gap-2 mt-3">
					<h1 className="text-3xl font-black text-blue-500">
						10,015
					</h1>
					<h1 className="text-gray-500 text-sm">from</h1>
					<h1 className="text-gray-500 text-sm">90024</h1>
				</div>
			</div>
			<div className="flex bg-green-200 px-2 py-1 rounded-full text-sm items-center text-gray-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-4 h-4"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
					/>
				</svg>
				13%
			</div>
		</div>
	);
}
