window.onload = ()=>{
    document.querySelector("#shandell").addEventListener("click", setImgtoshandell);
    document.querySelector("#shandell2").addEventListener("click", setImgtoshandell2);
    document.querySelector("expected").addEventListener("hover", mouseover);
    document.querySelector("wounded").addEventListener("hover" , mouseover);
    document.querySelector("eagle").addEventListener("hover" , mouseover);
   
}

const setImgtoshandell = () =>{
    const img = document.querySelector('#attributes-img');
    img.src = "pictures/shandell.jpg"
}

const setImgtoshandell2 = () =>{
    const img = document.querySelector('#attributes-img');
    img.src = "pictures/shandell2.jpg";
}

const mouseover = () =>{
    const div = document.querySelector('hover');
    div.style.mouseover = (div.style.mouseover == 'rgb(153, 66, 127)') ? 'pink' : 'rgb(153 66, 127)';
}