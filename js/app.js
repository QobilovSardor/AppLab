let elLoader = document.querySelector('.loader');

setTimeout(function() {
  elLoader.style.opacity = '0';
  setTimeout(function(){
    elLoader.style.display = 'none'
  }, 500);
}, 2000);