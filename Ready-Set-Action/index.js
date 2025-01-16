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

    const grow = document.getElementById("grow-me");
    grow.classList.add("big");

    const shrink = document.getElementById("shrink-me");
    shrink.classList.remove("big");

    const listItems = document.querySelectorAll("li");
    listItems.forEach(item => {
        console.log(item);
    })

    const link = document.querySelector("a");
    link.href = "https://www.example.com";
    link.textContent = "somewhere";
    
    const hide = document.getElementById("hide-me");
    hide.style.display = 'none';

    const show = document.getElementById("show-me");
    show.style.display = 'block';

    const name = document.getElementById("name");
    const inputValue = name.value;
    const h1 = document.querySelector("h1");
    h1.textContent = "Hello, " + inputValue;
    console.log(inputValue);
    
}


