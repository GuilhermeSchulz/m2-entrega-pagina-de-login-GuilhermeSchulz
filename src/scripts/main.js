function toggleDarkMode(){
    const toggleBtn = document.querySelector(".header__container__button")
    const html = document.querySelector("html")
    const logo = document.querySelector(".header__container__img")
    
    toggleBtn.addEventListener("click", () => {
        html.classList.toggle("dark__mode")
        if(html.classList.contains("dark__mode")){
            logo.src = "./src/img/logo-white.svg"
        }
        else{
            logo.src = "./src/img/logo.svg"
        }
    })
}
function modalCadastro(){
    const btnCadastro = document.querySelector(".container__signup__button")
    const modal = document.querySelector(".modal__signup")
    const headerContainer = document.querySelector(".header__container")
    const mainContainer = document.querySelector(".main__container")
    const btnVoltar = document.querySelector(".modal__form__button")
    btnCadastro.addEventListener("click", event => {
        event.preventDefault()
        modal.classList.toggle("hidden__class")
        headerContainer.classList.toggle("background__opacity")
        mainContainer.classList.toggle("background__opacity")
    })
    if(!modal.classList.contains("hidden_class")){
        btnVoltar.addEventListener("click", event => {
            event.preventDefault()
            modal.classList.toggle("hidden__class")
            headerContainer.classList.toggle("background__opacity")
            mainContainer.classList.toggle("background__opacity")
        })
    }
}


toggleDarkMode()
modalCadastro()
