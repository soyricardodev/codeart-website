import { motion } from "framer-motion";

const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black" />
);

const SkeletonOne = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
			>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 flex-shrink-0" />
				<div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
			>
				<div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 flex-shrink-0" />
			</motion.div>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
			>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 flex-shrink-0" />
				<div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
			</motion.div>
		</motion.div>
	);
};
const SkeletonTwo = () => {
	const variants = {
		initial: {
			width: 0,
		},
		animate: {
			width: "100%",
			transition: {
				duration: 0.2,
			},
		},
		hover: {
			width: ["0%", "100%"],
			transition: {
				duration: 2,
			},
		},
	};
	const arr = new Array(6).fill(0);
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.5] bg-dot-black/[0.5] flex-col space-y-2"
		>
			{arr.map((_, i) => (
				<motion.div
					key={`skelenton-two-${
						// biome-ignore lint/suspicious/noArrayIndexKey: im not using it
						i
					}`}
					variants={variants}
					style={{
						maxWidth: `${Math.random() * (100 - 40) + 40}%`,
					}}
					className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-200 dark:bg-black w-full h-4"
				/>
			))}
		</motion.div>
	);
};
const SkeletonThree = () => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%",
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={variants}
			transition={{
				duration: 5,
				repeat: Number.POSITIVE_INFINITY,
				repeatType: "reverse",
			}}
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.3] flex-col space-y-2"
			style={{
				background: "linear-gradient(-45deg, #ee7752, #40e, #23a6d5, #23d5ab)",
				backgroundSize: "400% 400%",
			}}
		>
			<motion.div className="h-full w-full rounded-lg" />
		</motion.div>
	);
};
const SkeletonFour = () => {
	const first = {
		initial: {
			x: 20,
			rotate: -5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	const second = {
		initial: {
			x: -20,
			rotate: 5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
		>
			<motion.div
				variants={first}
				className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
			>
				<svg width={180} height={180} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
					<title>logo</title>
					<mask
						id="mask0_408_139"
						style={{ maskType: "alpha" }}
						maskUnits="userSpaceOnUse"
						x={0}
						y={0}
						width={180}
						height={180}
					>
						<circle cx={90} cy={90} r={90} fill="black" />
					</mask>
					<g mask="url(#mask0_408_139)">
						<circle cx={90} cy={90} r={87} fill="black" stroke="white" strokeWidth={6} />
						<path
							d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
							fill="url(#paint0_linear_408_139)"
						/>
						<rect x={115} y={54} width={12} height={72} fill="url(#paint1_linear_408_139)" />
					</g>
					<defs>
						<linearGradient
							id="paint0_linear_408_139"
							x1={109}
							y1="116.5"
							x2="144.5"
							y2="160.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="white" />
							<stop offset={1} stopColor="white" stopOpacity={0} />
						</linearGradient>
						<linearGradient
							id="paint1_linear_408_139"
							x1={121}
							y1={54}
							x2="120.799"
							y2="106.875"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="white" />
							<stop offset={1} stopColor="white" stopOpacity={0} />
						</linearGradient>
					</defs>
				</svg>

				<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
					Just code in Vanilla Javascript
				</p>
				<p className="border border-black bg-black/10 text-xs rounded-full px-2 py-0.5 mt-4">Delusional</p>
			</motion.div>
			<motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
				<svg
					viewBox="0 0 256 168"
					xmlns="http://www.w3.org/2000/svg"
					width={256}
					height={168}
					preserveAspectRatio="xMidYMid"
				>
					<title>Logo</title>
					<path
						fill="#00DC82"
						d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115 16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113 17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975A16.302 16.302 0 0 0 0 150.325c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115 17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983 15.618-26.215 46.874 78.742h-62.492l-15.628 26.214Zm-67.64-26.24-41.688-.01L96.782 35.796l31.181 52.492-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416Z"
					/>
				</svg>

				<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
					Tailwind CSS is cool, you know
				</p>
				<p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
					Sensible
				</p>
			</motion.div>
			<motion.div
				variants={second}
				className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 242 256">
					<title>Logo</title>
					<g clipPath="url(#a)">
						<mask
							id="b"
							width={242}
							height={256}
							x={0}
							y={0}
							maskUnits="userSpaceOnUse"
							style={{ maskType: "luminance" }}
						>
							<path fill="#fff" d="M0 0h242v256H0V0Z" />
						</mask>
						<g mask="url(#b)">
							<path
								fill="url(#c)"
								d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
							/>
							<path
								fill="url(#d)"
								d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
							/>
						</g>
					</g>
					<defs>
						<linearGradient id="c" x1="53.2" x2={245} y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse">
							<stop stopColor="#E40035" />
							<stop offset=".2" stopColor="#F60A48" />
							<stop offset=".4" stopColor="#F20755" />
							<stop offset=".5" stopColor="#DC087D" />
							<stop offset=".7" stopColor="#9717E7" />
							<stop offset={1} stopColor="#6C00F5" />
						</linearGradient>{" "}
						<linearGradient id="d" x1="44.5" x2={170} y1="30.7" y2={174} gradientUnits="userSpaceOnUse">
							{" "}
							<stop stopColor="#FF31D9" />
							<stop offset={1} stopColor="#FF5BE1" stopOpacity={0} />
						</linearGradient>
						<clipPath id="a">
							<path fill="#fff" d="M0 0h242v256H0z" />
						</clipPath>
					</defs>
				</svg>

				<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
					I love angular, RSC, and Redux.
				</p>
				<p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
					Helpless
				</p>
			</motion.div>
		</motion.div>
	);
};
const SkeletonFive = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
			>
				<div className="rounded-full bg-sky-200 size-8" />
				<p className="text-xs text-neutral-500">
					Hey how can we expand this module to include more features? We need to add more features to the module.
				</p>
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
			>
				<p className="text-xs text-neutral-500">Lets talk about this.</p>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 via-primary to-sky-400 flex-shrink-0" />
			</motion.div>
		</motion.div>
	);
};

export { Skeleton, SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour, SkeletonFive };
