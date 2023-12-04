export default function handleImageLoad(e) {
  //when image finishes loading, creates a smooth opacity initial animation
  e.currentTarget.classList.remove("opacity-0");
}
