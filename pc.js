


var gitbtn = document.querySelector('.gitbtn');
var channelbtn = document.querySelector('.channelbtn');
var emailbtn = document.querySelector('.emailbtn');
var cdbtn = document.querySelector('.cdbtn');

cdbtn.addEventListener('click',function(){
    window.open('CDplayerv2.0/index.html');
})
gitbtn.addEventListener('click',function(){
    window.location.href = 'https://github.com/Tarkyyyy';
})
channelbtn.addEventListener('click',function(){
    window.location.href = 'https://space.bilibili.com/350646385';
})
emailbtn.addEventListener('click',function(){

  navigator.clipboard.writeText('ningyiyun14@163.com');

  alert("已将地址复制到剪切板");

})