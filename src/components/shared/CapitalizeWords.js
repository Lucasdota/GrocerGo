export default function CapitalizeWords(string) {
	const words = string.replace(/-/g, " ").split(" ");
	const capitalizedWords = words.map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});
	const capitalizedJoined = capitalizedWords.join(" ");
	return capitalizedJoined
}