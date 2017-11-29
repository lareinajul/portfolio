window.onload = function(){
///  var figure = $(".video").hover( hoverVideo, hideVideo );

  function hoverVideo(e) {
      $('video', this).get(0).play();
  }

  function hideVideo(e) {
      $('video', this).get(0).pause();
  }

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

//text
ctx.font = "50px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "left";
ctx.fillText("Julie Adams", canvas.width/5, canvas.height/5);
}
