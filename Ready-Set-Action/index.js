const main = () => {
    const pGrow = document.getElementById("grow-me")
    pGrow.classList.add("big")

    const pShrink = document.getElementById("shrink-me")
    pShrink.classList.remove("big")

    const list = document.querySelectorAll("li")
    console.log(list)

    const link = document.querySelector('a')
    link.textContent = "somewhere"

    const pHide = document.getElementById("hide-me")
    pHide.style.display = 'none'

    const pShow = document.getElementById("show-me")
    pShow.style.display = "block"

    const name = document.getElementById("name")
    
}