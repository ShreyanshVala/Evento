let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
	menu.classList.toggle('fa-times');
}

var swiper = new Swiper(".mySwiper",{
	effect:"coverflow",
	grabCursor: true,
	centeredslides: true,
	slidesPerview: "auto",
	coverflowEffect: {
		rotate: 50,
		stretch:0,
		modifier:1,
		slideShadows:true,
	},
pagnination:{
	el: ".swiper-pagination",

}
});