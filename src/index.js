let clickChange = document.querySelector(".clickChange");
clickChange.addEventListener("click", function () {
    let widthChange = document.querySelector(".widthChange");
    widthChange.classList.toggle("newChange")
})

let asdcolor = document.querySelectorAll(".asdcolor");
asdcolor.forEach(singlecolor => {
    singlecolor.addEventListener("click", function () {
        let coll = singlecolor.getAttribute("data-color")
        document.body.style.setProperty("--theme-color", coll)
        localStorage.setItem("coloradd", coll)
    })
})

document.addEventListener("DOMContentLoaded", function () {
    let get = localStorage.getItem("coloradd")
    if (get) {
        document.body.style.setProperty("--theme-color", get)
    }
})