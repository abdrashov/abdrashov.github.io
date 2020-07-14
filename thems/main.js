function checkFluency(){
	let varcheckbox = document.getElementById('burger');
	let menu = document.querySelector('.header_menu_list');	
	let main = document.querySelector('main');
	let body = document.body;
	varcheckbox.addEventListener( "click" , function(){
		if( body.style.overflow == "hidden" ){
			menu.style.display = "";
			main.classList.remove('tool');
			body.style.overflow = "";
 		}else if( body.style.overflow == "" ){
			menu.style.display = "block";
			main.classList.add('tool');
			main.style.transition = "3s all ease";
			body.style.overflow = "hidden";
 		}
	});

	let links = document.querySelectorAll('a[href^="#"]');
	let checkbox = document.getElementById('checked');

	for (let i=0; i<links.length; i++) {
		links[i].addEventListener( "click" , function(){
			menu.style.display = "";
			main.classList.remove('tool');
			body.style.overflow = "";
			checkbox.checked = false;
		})
	}
}


// якорня ссылка плавный переход
const anchors = document.querySelectorAll('a[href^="#"]');
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


window.onscroll = function showHeader() {
	const top = document.querySelector('.top_block');

	if(window.pageYOffset > 500){
		top.style.display = "block";

	} else{
		top.style.display = "";
	}
}
