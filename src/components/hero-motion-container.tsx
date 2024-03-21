import { motion } from "framer-motion"

export function HeroMotionContainer({ children }: { children: React.ReactNode }) {
	return (
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

				{children}
				{/* <main className="w-full flex-auto">{children}</main> */}
			</motion.div>
		</motion.div>
	)
}
