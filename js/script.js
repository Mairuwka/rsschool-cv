const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
if(burger) {
	burger.addEventListener('click', (e) => {
		burger.classList.toggle('active');
		burgerMenu.classList.toggle('active');
		body.classList.toggle('lock');
	});
}


const link = document.querySelectorAll('.header__link');
const linkArr = [...link]
linkArr.forEach(el => 
	el.addEventListener('click', () => {
			if(burger.classList.contains('active') && burgerMenu.classList.contains('active') && body.classList.contains('lock')) {
				burger.classList.remove('active');
				burgerMenu.classList.remove('active');
				body.classList.remove('lock')
			}
		})
)
// link.addEventListener('click', () => {
// 	if(burger.classList.contains('active') && burgerMenu.classList.contains('active')) {
// 		burger.classList.remove('active');
// 		burgerMenu.classList.remove('active');
// 	}
// })
console.log(link)