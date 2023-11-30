//formats strings into hyphened words removing specials characters and numbers that are not in accepted places to use them in Link tags in the SectionsPage.tsx and ProductsPage.tsx to be able to navigate between products
export default function UrlizeWords(string) {
	const stringWithHyphens = string.toLocaleLowerCase().replace(/\s+/g, "-");
  const stringWithoutSpecialCharacters = stringWithHyphens
    .replace(/(?<![a-zA-Z])[0-9%]+/g, "")
    .replace(/\-+/g, "-").replace("&", "and");

  const url =
    stringWithoutSpecialCharacters.charAt(0) === "-"
      ? stringWithoutSpecialCharacters.replace(
          stringWithoutSpecialCharacters.charAt(0),
          ""
        )
      : stringWithoutSpecialCharacters;
	
	return url		
}