window.addEventListener("load", (event) => {
    document.querySelectorAll("details").forEach(element => {
        element.removeAttribute("open")
    })
})