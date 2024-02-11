const element = document.getElementById("yes")
const imageElement = document.getElementById("image")
const noelement = document.getElementById('no')
let size = 0

console.log('fart')
noelement.addEventListener('click', () => {
    size += 80;
    let v = size.toString();
    element.style.width = v + 'px';
    element.style.height = v+ "px";
    console.log(v);
    console.log(typeof(v));
    
  });

