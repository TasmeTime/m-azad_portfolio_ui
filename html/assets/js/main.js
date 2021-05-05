let p=document.getElementById('h-img-c');
let ps=document.getElementById('h-sh-img-c');
let xpContainer=document.getElementById('xp-container');
let fmContainer=document.getElementById('fm-container');
let prTitle=document.getElementsByClassName('dekstop-blur-bg')[0];
let prSection=document.getElementsByClassName('projects')[0];

obs=new IntersectionObserver(function(entries){
    // console.log(entries);
    entries.forEach(function(entry){
        //if current device's width is more thatn 768px
        if(window.innerWidth>=768)
            prSection.style.opacity=entry.intersectionRatio;
    });
},
{
    threshold: [0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]
});

obs.observe(prTitle);

window.addEventListener('scroll',function(){
    //amount that scrolled
    let y=window.scrollY;

    //makes the portrait go top and fade when scrolling
    p.style.top=(-y*0.5)+'px';
    p.style.opacity=1-(y/700);

    //makes the portrait's shadow go right and fade
    ps.style.right=(-y*2)+'px';
    ps.style.opacity=0.1-(y/1500);    

    //makes the xp section fades in from right
    xpContainer.style.right=((-1500)+(y*1.4))+'px';
    xpContainer.style.opacity=0.1+(y/700);   

    //makes the fm section fades in from left
    fmContainer.style.left=((-1500)+(y*2.4))+'px';
    fmContainer.style.opacity=0.1+(y/700);  
});