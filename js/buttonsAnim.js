let button = document.querySelectorAll('.clicked-button');

      button.forEach(el => {
        el.onclick = function(e) {
          let elem = document.createElement('div');
          elem.classList.add('circle');

          el.appendChild(elem);
          

          elem.style.width = elem.style.height = elem.parentNode.offsetWidth/2 + 'px';

          let x = el.getBoundingClientRect().left;
          let y = el.getBoundingClientRect().top;

          elem.style.left = e.clientX - x - elem.offsetWidth/2 + 'px';
          elem.style.top = e.clientY - y - elem.offsetWidth/2 + 'px';


          setTimeout(() => {
              elem.remove();
          }, 1000);
      }
      })