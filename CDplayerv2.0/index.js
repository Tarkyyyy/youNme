// console.log('111');
// // for (let i = 0; i < 10; i++){
// //     console.log(i);
// // }
// // var content1 = document.querySelectorAll('p');
// // for(let i = 0;i < content1.length; i++){
// //     console.log(content1[i].textContent);
// // }
// var button = document.querySelector('.but')
// button.addEventListener('click', function(){
//     alert('Welcome to Sliverstone Grand Prix!')
// })

// import list from './list.json' with {type:'json'};
// console.log(list);
// for(let i = 0; i < list.length; i++){
//     console.log(list[i].author);
// }

import list from './list.json' with {type:'json'};

var volume = 0.2;
var index = 0;
var state = false;
var state2 = false;
var state3 = false;
var audio = document.createElement("audio");
audio.volume = volume;
audio.loop = "loop";
var playbtn = document.querySelector('.bi-play-fill');
var rewind = document.querySelector('.bi-rewind-fill');
var forward = document.querySelector('.bi-fast-forward-fill');
var sub = document.querySelectorAll('.sub');
var volumebtn = document.querySelector('.bi-volume-down');
var infobtn = document.querySelector('.bi-info-circle');

// 更改播放图标
function changPlay(){
    var playsvg = document.getElementById('playbtn');
    if (state == false){
        // playsvg.setAttribute("d", "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z");
        playbtn.src = "./icon/Pause.svg";
        playbtn.width = "38";
        playbtn.height = "38";
    }else{
        playbtn.src = "./icon/Play.svg";
        playbtn.width = "36";
        playbtn.height = "36";
        // playsvg.setAttribute("d", "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z")
    }

}

// 播放按钮
playbtn.addEventListener('click',function(){
    if (state == false){
        audio.play();
        changPlay();
        state = true;
        
    }else {
        audio.pause();
        changPlay();
        state = false;
    }
})

function render(){
    covernow.src = list[index].cover;
    titlenow.textContent = list[index].title;
    authornow.textContent = list[index].author;
    album.textContent = list[index].album;
    audio.src = list[index].audio;
    year.textContent = list[index].year;
    cate.textContent = list[index].genres;
    composer.textContent = list[index].composer;

    document.body.style.backgroundImage = "url('"+ list[index].cover + "')";
    if (state == true){
        audio.play();
    }
    for(let i = 0; i < cover.length; i++){
        cover[i].src = list[i].cover;
        title[i].textContent = list[i].title;
        author[i].textContent = list[i].author;   
    }
    // if (index == (list.length - 1)){
    //     sub[0].style.backgroundColor = '#5f5f5f30';
    // }if (index == 0) {
    //     sub[list.length - 1].style.backgroundColor = '#5f5f5f30';
        
    // } else {
    //     sub[index - 1].style.backgroundColor = '#5f5f5f30';
    // }
    // sub[index].style.backgroundColor = '#8184BD40';

}


var covernow = document.querySelector(".cover-img1");
var authornow = document.querySelector(".author");
var titlenow = document.querySelector(".title");
var album = document.querySelector(".album");
var cover = document.querySelectorAll(".cover-img");
var author = document.querySelectorAll(".subauthor");
var title = document.querySelectorAll(".subtitle");
var year = document.querySelector('.year');
var composer = document.querySelector('.composer');
var cate = document.querySelector('.cate');

// 初始渲染
render();
sub[index].style.backgroundColor = '#8184BD40';

// 前后按钮
forward.addEventListener('click',function(){
    if (index == (list.length - 1)){
        sub[index].style.backgroundColor = '#5f5f5f30';
        index = 0;
        sub[index].style.backgroundColor = '#8184BD40';
        render();
    }else{
        sub[index].style.backgroundColor = '#5f5f5f30';
        index++;
        sub[index].style.backgroundColor = '#8184BD40';
        render();
    }
});
rewind.addEventListener('click',function(){
    if (index == 0){
        sub[index].style.backgroundColor = '#5f5f5f30';
        index = list.length - 1;
        sub[index].style.backgroundColor = '#8184BD40';
        render();
    }else{
        sub[index].style.backgroundColor = '#5f5f5f30';
        index--;
        sub[index].style.backgroundColor = '#8184BD40';
        render();
    }
});

// 将json中的每个title提取出来，便于切歌时匹配
var titllelist = [];
for(let i = 0; i < list.length; i++){
    titllelist.push(list[i].title);
}

// 切歌功能
// 歌单中每首歌设置监听
sub[0].addEventListener('click',function(){
        sub[index].style.backgroundColor = '#5f5f5f30';
        index = titllelist.indexOf(title[0].textContent);
        sub[index].style.backgroundColor = '#8184BD40';
        render();

})
sub[1].addEventListener('click',function(){
        sub[index].style.backgroundColor = '#5f5f5f30';
        index = titllelist.indexOf(title[1].textContent);
        sub[index].style.backgroundColor = '#8184BD40';
        render();

})
sub[2].addEventListener('click',function(){
        sub[index].style.backgroundColor = '#5f5f5f30';
        index = titllelist.indexOf(title[2].textContent);
        sub[index].style.backgroundColor = '#8184BD40';
        render();

})
sub[3].addEventListener('click',function(){
        sub[index].style.backgroundColor = '#5f5f5f30';
        index = titllelist.indexOf(title[3].textContent);
        sub[index].style.backgroundColor = '#8184BD40';
        render();

})
sub[4].addEventListener('click',function(){
        sub[index].style.backgroundColor = '#5f5f5f30';
        index = titllelist.indexOf(title[4].textContent);
        sub[index].style.backgroundColor = '#8184BD40';
        render();

})
sub[5].addEventListener('click',function(){
        sub[index].style.backgroundColor = '#5f5f5f30';
        index = titllelist.indexOf(title[5].textContent);
        sub[index].style.backgroundColor = '#8184BD40';
        render();

})

// 音量条
var slider = document.getElementById("slider");
slider.oninput = function(){
    volume = this.value / 100;
    audio.volume = volume;
    // console.log(volume);
}
slider.addEventListener("mousemove",function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, #B9BBDF40 ' + x + '%, #EFEFEF30 ' + x + '%)';
    slider.style.background = color;
})
var control = document.querySelector(".control");
var slidercon = document.querySelector('.slider');
volumebtn.addEventListener("click",function(){
    if(state2 == false){
        slidercon.style.display = "block";
        control.style.gap = "29px";
        state2 = true;
    }else{
        slidercon.style.display = "none";
        control.style.gap = "42px";
        state2 = false;
    }
    
})


// 信息切换
var player = document.querySelector('.player');
var sec1 = document.querySelector('.sec1');
var cover1 = document.querySelector('.cover');

var information = document.querySelector('.info');
var title1 = document.querySelector('.title');
var info2 = document.querySelector('.info2');
var info3 = document.querySelectorAll('.info2 span');
var icon = document.querySelectorAll('.bi');
var conBar = document.querySelector('.controlBar');

year.style.display = "none";
composer.style.display = "none";
cate.style.display = "none";
function info(){
    if(state3 == false){
        cover1.style.opacity = "0";
        information.style.opacity = "0";
        setTimeout(function(){
        
        year.style.display = "block";
        composer.style.display = "block";
        cate.style.display = "block";

        player.style.background = "#5f5f5f40";
        player.style.borderRadius = "43px"

        sec1.style.hight = "auto";
        sec1.style.padding = "28px";
        sec1.style.flexDirection = "row";
        sec1.style.alignItems = "start";

        cover1.style.width = "261px";
        cover1.style.height = "261px";
        

        information.style.height = "auto";
        information.style.margin = "22px 22px 0 22px";
        information.style.justifyContent = "none";

        title1.style.fontSize = "32px";

        info2.style.display = "flex";
        info2.style.alignItems = "center";
        info2.style.flexDirection = "column";

        console.log(icon)
        for(let i = 0; i < info3.length - 1; i++){
            icon[i].style.display = "none";
        }

        slidercon.style.display = "none";
        state2 = false;

        conBar.style.backgroundColor = "transparent";

        
        for(let i = 0; i < info3.length; i++){
            // console.log(info3[i]);
            info3[i].style.marginTop = "16px";
            info3[i].style.textAlign = "center";
        }
        },300);

        setTimeout(function(){
            cover1.style.opacity = "1";
            information.style.opacity = "1";
        },600);

        state3 = true;
    }else{
        year.style.display = "none";
        composer.style.display = "none";
        cate.style.display = "none";

        player.style.background = "transparent";
        player.style.borderRadius = "0"

        sec1.style.hight = "491px";
        sec1.style.padding = "0";
        sec1.style.flexDirection = "column";
        sec1.style.alignItems = "center";

        cover1.style.width = "392px";
        cover1.style.height = "392px";

        information.style.height = "63px";
        information.style.margin = "0 0 17px 0";
        information.style.justifyContent = "space-between";

        title1.style.fontSize = "28px";

        // info2.style.display = "auto";
        info2.style.removeProperty("display");
        info2.style.removeProperty("align-items");
        info2.style.removeProperty("flex-direction");
        

        for(let i = 0; i < info3.length - 1; i++){
            icon[i].style.display = "";
        }

        conBar.style.backgroundColor = "#5f5f5f30";

        
        for(let i = 0; i < info3.length; i++){
            // console.log(info3[i]);
            info3[i].style.removeProperty("margin-top")
            info3[i].style.removeProperty("text-align");
        }
        state3 = false;
    }

}
infobtn.addEventListener("click",info)