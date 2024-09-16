let btn = document.querySelector(".btn")
var page2 = document.querySelector('.page2')
var page1 = document.querySelector('.active')
let back = document.querySelector('.back')
let notes = document.querySelector('.notes')
let assignment = document.querySelector('.assignment')
let notesContainer = document.querySelector('.notes-container')
let assignmentContainer = document.querySelector('.assignments-container')
let allBuckets = document.querySelector('#all-buckets')
let home = document.querySelector('#Home')
let icon = document.querySelector('.hamburger')
let icon2 = document.querySelector('.hamburger2')
let nav = document.querySelector('.responsive-nav')
let bxBtn = document.querySelector('.bx-btn')
let bxe = document.querySelector('.bxe')
let contact = document.querySelector('.cnt')
let contactContainer = document.querySelector('.contactContainer')
icon.addEventListener('click',()=>{
    nav.classList.add('h')
    nav.classList.remove('h0')
    
})
icon2.addEventListener('click',()=>{
    nav.classList.remove('h0')
    nav.classList.add('z')
    
})
bxBtn.addEventListener('click',()=>{
    page1.classList.remove("active")
    page2.classList.add("active")
     nav.classList.add('h0')
})
bxe.addEventListener('click',()=>{
 
    assignmentContainer.classList.add("active-container")
    page1.classList.remove("active")
    page2.classList.add("active")
     nav.classList.add('h0')
     notesContainer.classList.remove("active-container")
     assignment.style.color="#fff"
     notes.style.color="#d9d7d7"
})
home.addEventListener('click',()=>{
    page1.classList.add("active")
    page2.classList.remove("active")
     nav.classList.add('h0')
 })
allBuckets.addEventListener('click',()=>{
    page1.classList.remove("active")
    page2.classList.add("active")
     nav.classList.add('h0')
   
 })

btn.addEventListener('click', ()=>{
    page1.classList.remove("active")
    page2.classList.add("active")
})
back.addEventListener('click', ()=>{
    page2.classList.remove("active")
    page1.classList.add("active")
     nav.classList.add('h0') 
   
})
notes.addEventListener('click', ()=>{
    notesContainer.classList.add("active-container")
    notes.style.color="#fff"
    assignment.style.color="#d9d7d7"
    assignmentContainer.classList.remove("active-container")
})
assignment.addEventListener('click', ()=>{
    notesContainer.classList.remove("active-container")
    assignment.style.color="#fff"
    notes.style.color="#d9d7d7"
    assignmentContainer.classList.add("active-container")

})
contact.addEventListener('click', ()=>{
    notesContainer.classList.remove("active-container")
    notes.style.color="#d9d7d7"
    contact.style.color="#fff"
    assignment.style.color="#d9d7d7"
    assignmentContainer.classList.remove("active-container")
  contactContainer.classList.add("active-container")
})

let followCount = localStorage.getItem('followCount') || 100;
let isFollowing = localStorage.getItem('isFollowing')==="true";


let follow_btn = document.querySelector('#followBtn');
let follow_val = document.querySelector('#followCount');
let follow_val2 = document.querySelector('#followCount1');

follow_val.textContent= `${followCount}`;
follow_btn.textContent=isFollowing ? "UnFollow" : "Follow";

follow_btn.addEventListener('click',()=>{
    followCount= isFollowing ? --followCount : ++followCount;
    isFollowing=!isFollowing;

    localStorage.setItem('followCount',followCount);
    localStorage.setItem('isFollowing',isFollowing);

    follow_val.textContent=`${followCount}`;
    follow_val2.textContent=`${followCount}`;
    follow_btn.textContent=isFollowing ? 'UnFollow':"Follow";
})
// let c = 0
// follow_btn.addEventListener('click',()=>{
// if(c==0){
//    follow_val.innerText="chutya"
//    follow_btn.innerHTML="UnFollow"
//    c++
// }
// else{
//     follow_val.innerText="chutya2"
//     follow_btn.innerHTML="Follow"
//     c--
//}

//})


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch((error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
    });
  }
  