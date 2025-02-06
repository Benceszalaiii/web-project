export function scrollHandler(a: Event){
  if (window.scrollY > 75){
    document.getElementById("navbar").classList.add("bg-black/90", "border-b", "border-white")
  }
  else{
    document.getElementById("navbar").classList.remove("bg-black/90", "border-b")
  }
  return 23
}


window.addEventListener("scroll", scrollHandler)