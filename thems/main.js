// якорня ссылка плавный переход
const anchors = document.querySelectorAll('a[href*="#"');
for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


function checkFluency(){
	let varcheckbox = document.getElementById('burger');

	let menu = document.querySelector('.header_menu_list');	
	let tool = document.querySelectorAll('.tool');	
	let main = document.querySelector('main');
	let body = document.body;


	if(varcheckbox.checked){
		menu.style.display = "block";

		main.classList.add('tool');
		main.style.transition = "3s all ease";
		body.style.overflow = "hidden";
	}
	if(!varcheckbox.checked){
		menu.style.display = "";
		main.classList.remove('tool');
		body.style.overflow = "";
	}
}
