const body = document.querySelector('body');
const register = document.querySelector('.emailreg');
const bookSession = document.querySelector('.head2button');
const bookSession2 = document.querySelector(".preparebutton");
const signUp = document.querySelector(".ratingbutton");
const exit = document.querySelector(".exit");
const pricing = document.querySelector('#Pricing');
const subscribe = document.querySelector('.subscribe');
const emailInput = document.querySelector('.email');
const subscribeLink = document.querySelector('.sublink');
const features = document.querySelector('#feature');
const featuresLink = document.querySelector('.featurelink');
const emailFormat = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)$/;

function green(){
    emailInput.style.color = "green";
    emailInput.style.backgroundColor = "rgb(235, 235, 235, 0.6)";
    emailInput.style.border = "1px solid green";
    emailInput.style.outline = "none";
 }
 function red(){
    emailInput.style.color = "red";
    emailInput.style.backgroundColor = "rgb(255, 192, 203, 1)";
    emailInput.style.border = "1px solid tomato";
    emailInput.style.outline = "none";
 }
emailInput.addEventListener('keyup', () => {
    if(emailInput.value.match(emailFormat)) {
        green();
    }
    else {
        red();
    }
})
bookSession.addEventListener('click', (e)=>{
    e.preventDefault();
    pricing.scrollIntoView({behavior: 'smooth'});
});
bookSession2.addEventListener('click', (e)=>{
    e.preventDefault();
    pricing.scrollIntoView({behavior: 'smooth'});
});
signUp.addEventListener('click', e=>{
    e.preventDefault();
    register.classList.remove('hideemailreg');
    body.blur()
});
exit.addEventListener('click', (e)=>{
    register.classList.add('hideemailreg');
});
subscribe.addEventListener('click', (e) =>{
    if (emailInput.value.match(emailFormat)) {
        subscribeLink.setAttribute('href', "https://kidsthatcode.us4.list-manage.com/subscribe/post?u=e9d4ebcf9f57887653ab5e1c9&amp;id=c9511ea74b&MERGE0=" + `${emailInput.value}`)
    }
    else{
        e.preventDefault();
    }
})
featuresLink.addEventListener('click', (e)=>{
    e.preventDefault();
    features.scrollIntoView({behavior: 'smooth'});
});