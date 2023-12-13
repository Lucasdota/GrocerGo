const useScrollBlock = () => {
  const blockScroll = () => {
    if (typeof document === "undefined") return;
		const header = document.querySelector(".navbar-header");
    const html = document.documentElement;
    const { body } = document;

    if (!body || !body.style) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue("padding-right")
      ) || 0;

    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */
    html.style.position = "relative"; /* [1] */
    body.style.position = "relative"; /* [1] */
    html.style.overflow = "hidden"; /* [2] */
    body.style.overflow = "hidden"; /* [2] */
    //prevents the html and navbar to flicker to the right when opening the drawer menu by adding a padding-right
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
    header.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

  };

  const allowScroll = () => {
		const header = document.querySelector(".navbar-header");
    if (typeof document === "undefined") return;

    const html = document.documentElement;
    const { body } = document;
		

    if (!body || !body.style ) return;

    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";
		header.style.paddingRight = "";		

  };

  return [blockScroll, allowScroll];
};

export { useScrollBlock };
