// 所有class为cursor-pointer的元素都会被添加点击事件
let cursorPointer = document.getElementsByClassName('cursor-pointer');
let readMoreHandler = function() {
    let read_more = getContent('read_more');
    let read_less = getContent('read_less');
    // 如果当前组件内span中的内容是Read More，那么就改成Read Less
    if (this.getElementsByTagName('span')[0].innerHTML === read_more) {
        this.getElementsByTagName('span')[0].innerHTML = read_less;
        // 将前一个p标签中的第二个span标签显示，并且第一个span标签内容改成空
        this.previousElementSibling.getElementsByTagName('span')[1].style.display = 'inline';
        this.previousElementSibling.getElementsByTagName('span')[0].innerHTML = '';
    } else {
        this.getElementsByTagName('span')[0].innerHTML = read_more;
        // 将前一个p标签中的第二个span标签隐藏，并且第一个span标签内容改成...
        this.previousElementSibling.getElementsByTagName('span')[1].style.display = 'none';
        this.previousElementSibling.getElementsByTagName('span')[0].innerHTML = '...';
    }
};
for (let i = 0; i < cursorPointer.length; i++) {
    cursorPointer[i].onclick = readMoreHandler;
}

let backToTop = document.getElementsByClassName('scroll-to-top')[0];
let backToTopHandler = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
backToTop.onclick = backToTopHandler;
// 监听滚动，如果滚动距离大于100，那么就显示回到顶部按钮，否则隐藏
document.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        backToTop.style.visibility = 'visible';
        backToTop.style.opacity = 1;
        // apk-download 下载按钮显示出来
        document.getElementsByClassName('apk-download')[0].style.transform = 'none';
        document.getElementsByClassName('apk-download')[1].style.transform = 'none';
    } else {
        backToTop.style.visibility = 'hidden';
        backToTop.style.opacity = 0;
        document.getElementsByClassName('apk-download')[0].style.transform = 'translateY(140%)';
        document.getElementsByClassName('apk-download')[1].style.transform = 'translateY(140%)';
    }
});

// 如果当前页面宽度大于960，则将swiper-slide-active的宽度改成483px
if (window.innerWidth > 960) {
    document.getElementsByClassName('swiper-slide-active')[0].style.width = '100%';
}