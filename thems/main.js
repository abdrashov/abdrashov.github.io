
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
	let top = document.querySelector('.top_block');

	if(window.pageYOffset > 500 && window.innerWidth < 768){
		top.style.display = "block";

	} else{
		top.style.display = "";
	}
}

function checkImage(n){
	let img = document.querySelectorAll(".image_background");
	let times = document.querySelector(".top_times");
	let top = document.querySelector('.top_block');
	let imgBefore = document.querySelectorAll(".image_before");
	let imgHover = document.querySelectorAll(".featured_works_block");

	let body = document.body;

		img[n].addEventListener( "click" , function(){
			img[n].className = "image_js_mobile";

			imgHover[n].classList.remove("hover");

			body.style.overflow = "hidden";
			times.style.display = "flex";
			top.style.display = "";
			imgBefore[n].style.display = "block";
		})
	
		times.addEventListener( "click" , function(){
			img[n].className = "image_background";

			imgHover[n].classList.add("hover");

			body.style.overflow = "";
			times.style.display = "";
			imgBefore[n].style.display = "";
		})
}
function checkImageMobile(i){
	let img = document.querySelectorAll(".image_mobile");
	let times = document.querySelector(".top_times");
	let top = document.querySelector('.top_block');
	let imgHover = document.querySelectorAll(".featured_works_block");

	let body = document.body;

		img[i].addEventListener( "click" , function(){
			imgHover[i].classList.remove('hover');

			img[i].className = "image_js_mobile";

			body.style.overflow = "hidden";
			times.style.display = "flex";
			top.style.display = "";
		})
	
		times.addEventListener( "click" , function(){
			imgHover[i].classList.add('hover');

			img[i].className = "image_mobile";

			body.style.overflow = "";
			times.style.display = "";
		})
}
