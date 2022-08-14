let bar = document.querySelector(".bar");
let navresponsive = document.querySelector(".navresponsive");
let quote = document.querySelector(".content p");
let txt = "talent wins games, but teamwork and intelligence win championships.."
let  counter = 0 ;
let About = document.querySelector(".About");
let featuers = document.querySelector(".Features");
let members = document.querySelector(".members");


bar.addEventListener("click" , function(){
    navresponsive.classList.toggle("active");
    check();
})

function check() 
{
    if (navresponsive.classList.contains("active")) 
    {
        bar.style.transform="rotate(180deg)";
        bar.style.transition="0.5s all";
    }

    else 
    {
        bar.style.transform="rotate(90deg)";

    }
}


function Autowrite() 
 {

    if (counter < txt.length) 
    {
        quote.innerHTML+=txt.charAt(counter);
        counter++;
    }
    else  
    {
        quote.innerHTML="";
        counter=0;

    }
  }

setInterval(Autowrite,550);

window.onscroll = function() 
{
    if (this.scrollY >= featuers.offsetTop+350)
    {
        featuers.style.opacity="1";
        featuers.style.transition="1s ease-in-out";
        featuers.style.transform="translateY(-10px)"
    }

    if (this.scrollY >= members.offsetTop+1050)
    {
        members.style.opacity="1";
        members.style.transition="2s ease-in-out";
       
    }

}



