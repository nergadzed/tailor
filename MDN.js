window.addEventListener("load", (event) => {
    document.querySelectorAll("details").forEach(element => {
        if (element.getAttribute("aria-current"))
            void element
        else
            element.removeAttribute("open")
    })
})