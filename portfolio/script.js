window.onload = () => {
    mainTitleStyle()
}

function mainTitleStyle() {
    const title = document.querySelector("body > .title");
    const text = title.children.item(0).innerText;
    
    title.innerHTML = "";

    text.split("").forEach((char) => {
        const element = document.createElement("p");
        element.innerText = char;

        element.onmouseover = () => {
            let arr = [...element.parentElement.children]
            let i = arr.findIndex((el) => el == element);
            
            if (arr[i !== 0 ? i - 1 : -1] !== undefined) arr[i !== 0 ? i - 1 : -1].classList.add("nextOver");
            element.classList.add("over");
            if (arr[i !== arr.length - 1 ? i + 1 : -1] !== undefined) arr[i !== arr.length - 1 ? i + 1 : -1].classList.add("nextOver");
        }

        element.onmouseleave = () => {
            let arr = [...element.parentElement.children]

            arr.forEach((el) => el.classList.remove("over", "nextOver"));
        }

        title.append(element);
    })
}