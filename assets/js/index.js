
document.getElementById('modal-close').addEventListener('click', ()=>{
    document.body.classList.remove('not-scroll');
    document.getElementById('modal').style.display = 'none';
})

document.querySelectorAll('.work-card').forEach((e)=>{
    e.addEventListener('click', ()=>{
        document.body.classList.add('not-scroll');
        console.log(e.id);
        document.getElementById('modal').style.display = 'flex';
    })
})

let prevScrollpos = window.pageYOffset;

function navOpen () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        // 스크롤 올릴때
        document.getElementById("top-nav").style.top = "0px";
        document.getElementsByTagName("header")[0].style.top = "-50px";
      } else {
        // 스크롤 내릴때
        document.getElementById("top-nav").style.top = "-50px";
        document.getElementsByTagName("header")[0].style.top = "0px";
      }
      prevScrollpos = currentScrollPos;
}

function workScroll () {
    const sceneBackground = document.querySelector('.work-background');
    const scrollSceneHeight = document.getElementById('work').scrollHeight;
    const normalScene = document.querySelectorAll('.normal-scene');
    let normalSceneHeight = 0;

    for(let i=0; i < normalScene.length; i++) {
        normalSceneHeight += normalScene[i].scrollHeight;
    }

    const scrollRatio = ((window.pageYOffset - normalSceneHeight)-(scrollSceneHeight - window.innerHeight)) / (scrollSceneHeight - window.innerHeight);

    if(window.pageYOffset < normalSceneHeight) {
        sceneBackground.style.transform = 'translate3d(0, -100%, 0)';
        sceneBackground.style.opacity = 0;
        sceneBackground.classList.remove('scroll-on');
    } else if(window.pageYOffset > normalSceneHeight && window.pageYOffset < (normalSceneHeight + (scrollSceneHeight - window.innerHeight))) {
        sceneBackground.style.transform = `translate3d(0, ${Math.round(scrollRatio*100)}%, 0)`;
        sceneBackground.style.opacity = 1;
        sceneBackground.classList.add('scroll-on');
    } else if(window.pageYOffset > (normalSceneHeight + (scrollSceneHeight - window.innerHeight))){
        sceneBackground.style.transform = 'translate3d(0, 0, 0)';
        sceneBackground.style.opacity = 1;
        sceneBackground.classList.remove('scroll-on');
    }
}

document.querySelector('.loading').addEventListener('transitionend', (e) => {
    document.body.removeChild(e.target);
});

window.addEventListener('load', () => {
    document.body.classList.remove('before-load');
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('scroll', () => {
    navOpen();
    workScroll();
});

window.addEventListener('orientationchange', ()=> {
});

window.addEventListener('resize', () => {
});


