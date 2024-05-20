console.log("welcome")

let songIndex =0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgessBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songImtem'));

let songs = [
    {songName:"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Gana Hi to hai",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Bhula ",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Mujhe ye",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"alvida",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"mai kya karu ji",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"ho ho ",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"chal hat",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"dhoom ",filePath:"song/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"krish ",filePath:"song/10.mp3",coverPath:"covers/10.jpg"},
]


songItems.forEach((element)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0)
  {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
  }  
})
audioElement.addEventListener('timeupdate',()=>{
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgessBar.value = progress;
})

myProgessBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgessBar.value  *  audioElement.duration/100;
})
const makeAllPlays = ()=>{
  e.target.classList.add('fa-pause-circle');
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    
  })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');

  })
})