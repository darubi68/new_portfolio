

//부드러운 모달 on/off
document.getElementById('modal-close').addEventListener('click', ()=>{
    document.body.classList.remove('not-scroll');
    document.getElementById('modal').classList.remove('modal-show');
    document.getElementById('modal').classList.add('modal-hide');  
})
document.querySelectorAll('.work-card').forEach((e)=>{
    e.addEventListener('click', ()=>{
        document.body.classList.add('not-scroll');
        document.getElementById('modal').classList.add('modal-show');
        document.getElementById('modal').classList.remove('modal-hide');
    })
})

let prevScrollpos = window.pageYOffset;
function navOpen () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("top-nav").style.top = "0px";
document.getElementsByTagName("header")[0].style.top = "-50px";
      } else {
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

// a태그 대신 jqvascript로 페이지 내 이동
document.querySelectorAll('#top-nav ul li').forEach(e => {
    e.addEventListener('click', (el) => {
        const elName = el.target.innerHTML;
        document.getElementById(elName).scrollIntoView({behavior : 'smooth'});
    })
})

document.querySelector('.loading').addEventListener('transitionend', (e) => {
    // 로딩 트랜지션이 끝난 후 자연스럽게 사라지도록
    document.body.removeChild(e.target);
});

window.addEventListener('load', () => {
    // 로드 완료
    document.body.classList.remove('before-load');

    // 모달 띄워진 상태에서 새로고침 되었을 경우 대비
    document.getElementById('modal').classList.remove('modal-show');
});

window.addEventListener('scroll', () => {
    // 스크롤에 따른 네브 구현
    navOpen();

    // work section 배경컬러 효과 이벤트 
    workScroll();
});

window.addEventListener('orientationchange', ()=> {
});

window.addEventListener('resize', () => {
});


