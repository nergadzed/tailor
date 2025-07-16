window.addEventListener("load", (event) => {
    document.querySelectorAll("details").forEach(element => {
        if (element.querySelectorAll("a[aria-current='page']").length)
            void element
        else
            element.removeAttribute("open")
    })
})