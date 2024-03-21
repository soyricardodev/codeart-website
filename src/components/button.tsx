import { cn } from "../lib/utils"

export function Button({
	invert,
	href,
	className,
	children,
	...props
}: {
	invert?: boolean
	href?: string
	className?: string
	children?: React.ReactNode
}) {
	className = cn(
		className,
		"inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
		invert ? "bg-white text-gray-950 hover:bg-gray-200" : "bg-gray-950 text-white hover:bg-gray-800"
	)

	const inner = <span className="relative top-px">{children}</span>

	if (href) {
		return (
			<a href={href} className={className} {...props}>
				{inner}
			</a>
		)
	}

	return (
		<button className={className} type="button" {...props}>
			{inner}
		</button>
	)
}
