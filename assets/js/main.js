// function setMainSVG () {
//     if(window.innerWidth > window.innerHeight - 100) {
//         document.querySelector('.main-svg').style.width = 'auto';
//         document.querySelector('.main-svg').style.height = '100%';
//     } else {
//         document.querySelector('.main-svg').style.width = '100%';
//         document.querySelector('.main-svg').style.height = 'auto'; 
//     }
// }

function portfolioScroll () {
    const sceneBackground = document.querySelector('.portfolio-background');
    const scrollSceneHeight = document.getElementById('portfolio').scrollHeight;
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

document.querySelectorAll('.nav-btn').forEach((e)=>{
    e.addEventListener('click', ()=>{
        if(e.id === 'openNav') {
            document.body.classList.add('open-nav');
        } else {
            document.body.classList.remove('open-nav');
        }
    })
})

document.querySelector('.loading').addEventListener('transitionend', (e) => {
    document.body.removeChild(e.target);
});

window.addEventListener('load', () => {
    // setMainSVG();
    document.body.classList.remove('before-load');
});

window.addEventListener('scroll', () => {
    portfolioScroll();
});

window.addEventListener('orientationchange', ()=> {

});

window.addEventListener('resize', () => {
    // setMainSVG();
});


