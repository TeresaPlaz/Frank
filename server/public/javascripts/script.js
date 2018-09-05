document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  let video = document.getElementsByTagName("video")[0];

  video.width = Math.floor(window.innerWidth);
  video.style.width = video.width+"px";
  // video.height = Math.floor(window.innerHeight);
  // video.style.height = video.height+"px";

}, true);

