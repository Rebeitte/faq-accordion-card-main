let faqbox = document.getElementsByClassName("questions");
let p = document.getElementsByTagName('P');
let heading = document.getElementsByTagName("H2");


for (let i = 0; i < faqbox.length; i++) { 
    faqbox[i].addEventListener("click", function () {
        p[i].classList.toggle('display')
        
        heading[i].classList.toggle('fontweight');
    })
}

