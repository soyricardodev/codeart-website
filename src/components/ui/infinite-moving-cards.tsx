import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		quote: string;
		name: string;
		title: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const [start, setStart] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollerRef = useRef<HTMLUListElement>(null);

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty("--animation-direction", "forwards");
			} else {
				containerRef.current.style.setProperty("--animation-direction", "reverse");
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			for (let i = 0; i < scrollerContent.length; i++) {
				const item = scrollerContent[i];
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			}

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	useEffect(() => {
		addAnimation();
	}, []);

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20  mx-auto max-w-7xl  overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}
			>
				{items.map((item) => (
					<li
						className="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-primary bg-gradient-to-br from-blue-600 via-primary to-sky-300 px-8 py-6 md:w-[450px] text-white"
						key={item.name}
					>
						<blockquote>
							<div
								aria-hidden="true"
								className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
							/>
							<span className=" relative z-20 text-sm font-normal leading-[1.6]">{item.quote}</span>
							<div className="relative z-20 mt-6 flex flex-row items-center">
								<span className="flex flex-col gap-1">
									<span className=" text-sm font-normal leading-[1.6]">{item.name}</span>
									<span className=" text-sm font-normal leading-[1.6]">{item.title}</span>
								</span>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
