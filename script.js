const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const visual = document.querySelector(".visual");
const colors = [
     '#5d24c7',
    '#43e779',
 '#ffcc25',
 '#21ffbd'
, '#e426eb'
]

// lets get going with sound
pads.forEach( (pad, index ) => {
pad.addEventListener('click',function(){
    sounds[index].currentTime = 0;
    sounds[index].play(); 
    creatBubble(index)
})    

});
const creatBubble = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1.5s ease"
    bubble.addEventListener('animationend',()=> { visual.removeChild()
    })
}
