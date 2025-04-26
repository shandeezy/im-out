window.onload = ()=>{
    document.querySelector("#shandell").addEventListener("click", setImgtoshandell);
    document.querySelector("#shandell2").addEventListener("click", setImgtoshandell2);
    
   
}

const setImgtoshandell = () =>{
    const img = document.querySelector('#attributes-img');
    img.src = "pictures/shandell.jpg"
}

const setImgtoshandell2 = () =>{
    const img = document.querySelector('#attributes-img');
    img.src = "pictures/shandell2.jpg";
}