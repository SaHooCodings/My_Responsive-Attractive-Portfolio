const word = document.querySelector(".type");
const wordSet = () => {
    setTimeout(()=>{
        word.textContent = "Web Developer"
    },0)
    setTimeout(()=>{
        word.textContent = "Java Programer"
    },4000)
    setTimeout(()=>{
        word.textContent = "Software Engineer"
    },8000)
    setTimeout(()=>{
        word.textContent = "Python Programer"
    },12000)
}
wordSet();
setInterval(wordSet, 16000)

// -----------About----------

var tablinks = document.getElementsByClassName("tab");
var tabcontents = document.getElementsByClassName("tabC");
function opentab(tabname){
    for(link of tablinks)
    {
        link.classList.remove("t1");
    }
    for(c of tabcontents)
    {
        c.classList.remove("c1");
    }
    event.currentTarget.classList.add("t1");
    document.getElementById(tabname).classList.add("c1");
}
//............Services................