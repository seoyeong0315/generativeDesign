window.addEventListener('load', () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext('2d');
  const saveBtn = document.getElementById("jsSave");


  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  var background = new Image();
  background.src = "feelPoster3.png";
  var boxImg = new Image();
  boxImg.src = "weAreOutOfOffice.png";
  boxImg.src = "secret.png";

  background.onload = function(){
    ctx.drawImage(background,530,10);
  }

  let painting = false;

    function startPosition(e){
      painting = true;
      draw(e);
    }
    function finishedPosition(){
      painting = false;
      ctx.beginPath();
    }

    function draw(e){
      if(!painting) return;
      /*ctx.lineWidth = 40;
      ctx.lineCap = 'square';

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
      */
      ctx.drawImage(boxImg, e.clientX, e.clientY, 150, 55);
    }
    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);





//



})
