$(document).ready(function(){
  $('html').click(function(event){
      var x = event.clientX + document.body.scrollLeft;
      var y = event.clientY + document.body.scrollTop;
      var coor = "X coords: " + x + ", Y coords: " + y;
      var winHeight = $(window).height();
      var docHeight = $(document).height();
      var winWidth = $(window).width();
      var docWidth = $(document).width();
      var element = $(event.target);
      var clickText = $(event.target).text();
      var date = new Date();
      var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      // 0 - 100 pixels wide
      // users window is 600 pixels wide
      // Use percentage to determine how far across the event happens
      // (600 / 100.00) * pixelCoord


      console.log(coor);
      console.log("Window Height: " + winHeight);
      console.log("Document Height: " + docHeight);
      console.log("window Width: " + winWidth);
      console.log("Document Width: "+ docWidth)
      console.log(element)
      console.log(clickText)
      console.log("Date of click: " + date)
      console.log("Time of click: " + time)

  });
});
