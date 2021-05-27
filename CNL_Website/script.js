const toggleButton =document.getElementsByClassName('toggle-button')[0]
const navbarLinks= document.getElementsByClassName('nav-barlinks')[0]


toggleButton.addEventListenter('click',() => {
	navbarLinks.classList.toggle('active') /* if the active class exists it will add it*/
})

toggleButton()