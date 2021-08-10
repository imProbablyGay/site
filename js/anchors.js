// click anchors
const anchors = document.querySelectorAll('.scrollspy-item a[href*="#"]')
let navbarTop = document.querySelector('.navbar').offsetHeight - document.querySelector('.navbar-collapse').offsetHeight;

anchors[0].style.color = 'black';

for (let key in anchors) {
  let elem = anchors[key];

  elem.onclick = () => {
    e.preventDefault();
    
    const blockID = anchors[key].getAttribute('href').substr(1);

    window.scrollTo({
      top: document.getElementById(blockID).offsetTop - navbarTop,
      behavior: "smooth"
    })

    anchors.forEach(el => {
      el.style.color = '';
    })

    anchors[key].style.color = 'black';
    console.log();
  }
}

// auto anchors
let sections = document.querySelectorAll('.anchors-section');

window.addEventListener('scroll' , (e) => {
  sections.forEach((el,i) => {
    if (pageYOffset > el.offsetTop - navbarTop && pageYOffset < el.offsetTop + el.offsetHeight - navbarTop) {
      anchors.forEach(el2 => {
        el2.style.color = '';
      })

      anchors[i].style.color = 'black';
    }
  })
})