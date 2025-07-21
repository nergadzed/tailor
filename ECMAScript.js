function nav(event) {
    if (Object.is(event.target, document.body)) {
        switch (event.type) {
            case "mouseup":
                if (event.button === 0) history.forward()
                break
            case "contextmenu":
                history.back()
                event.preventDefault()
                event.stopImmediatePropagation()
                break
        }
    }
}
function add(tries) {
    if (tries > 2) return
    try {
        document.body.addEventListener("contextmenu", nav)
        document.body.addEventListener("mouseup", nav)
    } catch (error) {
        console.log(error)
        setTimeout(add, 500, tries++)
    }
}

add(0)