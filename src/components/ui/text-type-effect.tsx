import { useState, useEffect } from "react";

const useTypingEffect = (text: string, duration: number, isTypeByLetter = false) => {
	const [currentPosition, setCurrentPosition] = useState(0);
	const items = isTypeByLetter ? text.split("") : text.split(" ");

	useEffect(() => {
		setCurrentPosition(0);
	}, [text]);

	useEffect(() => {
		if (currentPosition >= items.length) return;

		const intervalId = setInterval(() => {
			setCurrentPosition((prevPosition) => prevPosition + 1);
		}, duration);

		return () => {
			clearInterval(intervalId);
		};
	}, [currentPosition, items, duration]);

	return items.slice(0, currentPosition).join(isTypeByLetter ? "" : " ");
};

const texts = ["Impulsamos", "Lanzamos", "Mejoramos", "Aceleramos", "Creamos"];

const TIME_TO_FADE = 500;
const TIME_INTERVAL = 3000;
const TIME_PER_LETTER = 500;

export const TextTypingEffectWithTextsFadeOut = () => {
	const [textIndex, setTextIndex] = useState(0);
	const [fadeText, setFadeText] = useState(true);
	const [fadeCircle, setFadeCircle] = useState(true);
	const textToShow = useTypingEffect(texts[textIndex], TIME_PER_LETTER, false);

	const timeToTypeText = texts[textIndex].split(" ").length * TIME_PER_LETTER;

	useEffect(() => {
		const circleTimeout = setTimeout(() => {
			setFadeCircle(false);
		}, timeToTypeText + 1000);

		const textTimeout = setTimeout(() => {
			setFadeText(false);

			setTimeout(() => {
				setTextIndex((prevIndex) => (prevIndex >= texts.length - 1 ? 0 : prevIndex + 1));
				setFadeText(true);
			}, TIME_TO_FADE);
		}, TIME_INTERVAL);

		return () => {
			clearTimeout(circleTimeout);
			clearTimeout(textTimeout);
		};
	}, [textIndex]);

	return (
		<>
			<div
				className={`inline text-black transition-all duration-300  ${
					fadeText ? "opacity-1 translate-y-0" : "translate-y-2 opacity-0"
				}`}
				key={textIndex}
			>
				<span>{textToShow}</span>
			</div>
		</>
	);
};
