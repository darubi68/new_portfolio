



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
    document.body.classList.remove('before-load');
});

window.addEventListener('scroll', () => {

});

window.addEventListener('orientationchange', ()=> {

});

window.addEventListener('resize', () => {

});
