import { useState, useEffect } from "react"

type Props = {
	clicked: string
}

const ErrorMessage = ({ clicked } : Props) => {
	const [warning, setWarning] = useState("");

	useEffect(() => {
		const timer = setTimeout(() => {
			setWarning("The host is taking some time to fetch our request or there is no recipe with the id specified in the url.")
		}, 10000);

		return () => clearTimeout(timer);
	}, [])

	//clicked condition prevents the visual skeleton to appear when the trending section is clicked, because the proceess to retrieve the correct recipe coming from the trending variable is fast, so we don't need a skeleton for that
	return (
		<>
			{clicked === "searched" || clicked === "main" ? (
				<div className="w-full min-h-screen mx-auto gap-8 text-center flex flex-col items-center">
					<p className="text-gray-800 text-xl text-center">{warning}</p>
					<div className="h-20 w-1/2 rounded-xl bg-neutral-300 animate-pulse" />
					<div className="h-[20vw] w-3/5 rounded-xl bg-neutral-300 animate-pulse" />
					<div className="h-[20vw] w-4/5 rounded-xl bg-neutral-300 animate-pulse" />
					<div className="h-[20vw] w-4/5 rounded-xl bg-neutral-300 animate-pulse" />
				</div>
			) : (
				<p className="text-gray-800 text-xl text-center">{warning}</p>
			)}
		</>   
  );
}

export default ErrorMessage