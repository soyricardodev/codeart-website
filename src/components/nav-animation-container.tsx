import React, { useEffect, useId, useRef, useState } from "react"
import { MotionConfig, motion, useReducedMotion } from "framer-motion"
import { Container } from "./container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// import { Button } from "./button"

function XIcon(props: any) {
	return (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			className="h-6 w-6 fill-white group-hover:fill-neutral-200"
			{...props}
		>
			<path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
			<path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
		</svg>
	)
}

function MenuIcon(props: any) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path d="M2 6h20v2H2zM2 16h20v2H2z" />
		</svg>
	)
}

function Header({
	panelId,
	invert = false,
	icon: Icon,
	expanded,
	onToggle,
	toggleRef,
}: {
	panelId: string
	invert?: boolean
	icon: any
	expanded: boolean
	onToggle: () => void
	toggleRef: React.ForwardedRef<HTMLButtonElement>
}) {
	return (
		<Container>
			<div className="flex items-center justify-between">
				<a
					href="/"
					className={cn(
						"font-display text-xl font-bold",
						invert ? "text-white" : "text-neutral-950"
					)}
				>
					Codeart
				</a>
				<div className="flex items-center gap-x-2 md:gap-x-8">
					<Button asChild>
						<a href="/">Contactanos</a>
					</Button>
					{/* @ts-expect-error miss types */}
					<button
						ref={toggleRef}
						type="button"
						onClick={onToggle}
						aria-expanded={expanded.toString()}
						aria-controls={panelId}
						className={cn(
							"group -m-2.5 rounded-full p-2.5 transition max-md:ml-4 max-sm:ml-3",
							invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"
						)}
						aria-label="Abrir o cerrar la navegación"
					>
						<Icon
							className={cn(
								"h-6 w-6",
								invert
									? "fill-white group-hover:fill-neutral-200"
									: "fill-neutral-950 group-hover:fill-neutral-700"
							)}
						/>
					</button>
				</div>
			</div>
		</Container>
	)
}

export function NavAnimationContainer(props) {
	const panelId = useId()
	const [expanded, setExpanded] = useState(false)
	const openRef = useRef() as React.ForwardedRef<HTMLButtonElement>

	const closeRef = useRef() as React.ForwardedRef<HTMLButtonElement>
	const navRef = useRef() as React.ForwardedRef<HTMLDivElement>
	const shouldReduceMotion = useReducedMotion()

	useEffect(() => {
		function onClick(event: MouseEvent) {
			const target = event.target as HTMLElement
			if (target.closest("a")?.href === window.location.href) {
				setExpanded(false)
			}
		}

		window.addEventListener("click", onClick)

		return () => {
			window.removeEventListener("click", onClick)
		}
	}, [])

	return (
		<MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
			<header>
				<div
					className="absolute left-0 right-0 top-2 z-40 pt-14"
					aria-hidden={expanded ? "true" : undefined}
					data-inert={expanded ? "" : undefined}
				>
					<Header
						panelId={panelId}
						icon={MenuIcon}
						toggleRef={openRef}
						expanded={expanded}
						onToggle={() => {
							setExpanded((expanded) => !expanded)
							window.setTimeout(() =>
								// @ts-expect-error miss types
								// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
								closeRef.current?.focus({ preventScroll: true })
							)
						}}
					/>
				</div>

				<motion.div
					layout
					id={panelId}
					style={{ height: expanded ? "auto" : "0.5rem" }}
					className={cn(
						"bg-neutral-950",
						expanded
							? "relative z-50 overflow-hidden bg-neutral-950 pt-2"
							: "relative z-50 overflow-hidden pt-2"
					)}
					aria-hidden={expanded ? undefined : "true"}
					data-inert={expanded ? undefined : ""}
				>
					<motion.div layout className="bg-neutral-800">
						<div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
							<Header
								invert
								panelId={panelId}
								icon={XIcon}
								toggleRef={closeRef}
								expanded={expanded}
								onToggle={() => {
									setExpanded((expanded) => !expanded)
									window.setTimeout(() =>
										// @ts-expect-error miss types
										// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
										openRef.current?.focus({ preventScroll: true })
									)
								}}
							/>
						</div>
						{props.navigation}
					</motion.div>
				</motion.div>
			</header>

			<motion.div
				layout
				style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
				className="relative flex flex-auto bg-white pt-14"
			>
				<motion.div layout className="relative isolate flex w-full flex-col pt-9">
					{/* <GridPattern
						className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
						yOffset={-96}
						interactive
					/> */}

					<div className="w-full flex-auto">{props.children}</div>
				</motion.div>
			</motion.div>
		</MotionConfig>
	)
}
