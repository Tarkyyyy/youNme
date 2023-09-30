var musiclist = [];
var currentIndex = 0;   //当前播放歌曲
var playingor = false;

$.ajax({
    type: "GET",
    url: "./music.json",
    dataType: "json",
    success: function (data) {
        musiclist = data;
        render(musiclist[currentIndex])
    },
});

//设置页面内容
function render(data) {
    $(".title").text(data.title);
    $(".author").text(data.author);
    $(".cover-img").attr("src", data.cover)
    $("#audio").attr("src", data.audio)
}

//更新播放状态
function update() {
    if (playingor) {
        $("audio").get(0).play();
        $(this).attr("src", "./icon/play-solid.svg");
    } else {
        $("audio").get(0).pause();
        $(this).attr("src", "./icon/pause-solid.svg");
    }
}
//事件
$(document).ready(function () {
    //播放
    $("#play").on("click", function () {
        // console.log("play");
        if (!playingor) {
            $(this).attr("src", "./icon/pause-solid.svg");
            $("audio").get(0).play();
            playingor = true;
        } else {
            $(this).attr("src", "./icon/play-solid.svg");
            $("audio").get(0).pause();
            playingor = false;
        }
    });
    //切换歌曲
    $("#back").on("click", function () {
        // console.log("back");
        if (currentIndex != 0) {
            currentIndex--;
            render(musiclist[currentIndex]);
            update();
        } else {
            currentIndex = musiclist.length - 1;
            render(musiclist[currentIndex]);
            update();
        }
    });

    $("#forw").on("click", function () {
        // console.log("forw");
        if (currentIndex < musiclist.length - 1) {
            currentIndex++;
            render(musiclist[currentIndex]);
            update();
        } else {
            currentIndex = 0;
            render(musiclist[currentIndex]);
            update();
        }
    });
});