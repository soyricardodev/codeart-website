import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
	{
		quote:
			"Trabajar con Codeart fue una experiencia increíble. Desde el principio, su equipo entendió mis necesidades y creó una aplicación multiplataforma que ha transformado mi negocio. ¡Son altamente recomendables!",
		name: "Isabel Rodriguez",
		title: "CEO, Empeños La Esperanza",
	},
	{
		quote:
			"Codeart desarrolló un sistema administrativo para mi empresa que nos ha permitido agilizar procesos y ahorrar tiempo. Su equipo es profesional, eficiente y siempre está dispuesto a ayudar. ¡Estoy muy contento con su trabajo!",
		name: "David Hernández",
		title: "Gerente de Operaciones, Industrias Montoya",
	},
	{
		quote:
			"Necesitaba una página web moderna y funcional para mi startup. Codeart hizo un trabajo excepcional y superó mis expectativas. Su diseño es creativo y la plataforma es fácil de navegar. ¡Gracias, Codeart!",
		name: "Gabriela Ramirez",
		title: "Fundadora, Ecoideas",
	},
	{
		quote:
			"Codeart implementó una herramienta con inteligencia artificial que nos ha ayudado a mejorar la atención al cliente y aumentar las ventas. Son una empresa innovadora y a la vanguardia de la tecnología. ¡Los recomiendo encarecidamente!",
		name: "Pedro Garcia",
		title: "Director de Marketing, Alimentos del Valle",
	},
	{
		quote:
			"Estaba buscando un equipo de desarrollo confiable para crear una aplicación móvil para mi negocio. Codeart fue la elección perfecta. Son profesionales, responsables y cumplieron con los plazos establecidos. ¡Estoy muy satisfecho con su trabajo!",
		name: "Sofia Martinez",
		title: "Propietaria, Boutique Luna",
	},
	{
		quote:
			"Codeart se encargó del desarrollo de la página web de mi empresa y los resultados han sido fantásticos. Hemos visto un aumento significativo en el tráfico y las conversiones. Son un equipo talentoso y saben lo que hacen. ¡Gracias!",
		name: "Luis Gonzalez",
		title: "Director Comercial, Inversiones Suarez",
	},
	{
		quote:
			"Necesitaba un sistema para gestionar la logística de mi empresa de manera eficiente. Codeart desarrolló una solución personalizada que se adapta perfectamente a nuestras necesidades. Su equipo es receptivo y siempre está disponible para brindarnos soporte. ¡Son un placer trabajar con ellos!",
		name: "Valentina Torres",
		title: "Jefa de Logística, Suministros Ramirez",
	},
	{
		quote:
			"Codeart creó una herramienta con inteligencia artificial que nos ha permitido automatizar tareas repetitivas y ahorrar mucho tiempo. Su equipo es altamente calificado y siempre está dispuesto a ir más allá. ¡Son un socio tecnológico invaluable!",
		name: "Miguel Soto",
		title: "Director de Operaciones, Fabricas Moreno",
	},
	{
		quote:
			"Contraté a Codeart para desarrollar una aplicación móvil para mi negocio y estoy muy contento con el resultado. La aplicación es fácil de usar y ha sido un éxito entre nuestros clientes. Son un equipo creativo y con visión de futuro. ¡Los recomiendo!",
		name: "Andrea Lopez",
		title: "Gerente de Producto, Delicias del Caribe",
	},
	{
		quote:
			"Codeart se encargó del rediseño de la página web de mi empresa y le dieron un aspecto moderno y profesional. Ahora es mucho más fácil de navegar y ha mejorado la experiencia de usuario. Son un equipo confiable y centrado en los resultados. ¡Gracias!",
		name: "Carlos Mendez",
		title: "Director Ejecutivo, Publicidad Mendoza",
	},
];

export function Testimonials() {
	return (
		<>
			<InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
			<InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
		</>
	);
}
