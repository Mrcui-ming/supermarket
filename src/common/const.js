export function animate(obj, movetop, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
      var movelong = (movetop - obj.offsetTop) / 10;
      movelong = movelong > 0 ? Math.ceil(movelong) : Math.floor(movelong);
      if (obj.offsetTop == movetop) {
          clearInterval(obj.timer);
          if (callback) {
              callback();
          }
      } else {
          obj.style.Top = (obj.offsetTop + movelong) + "px";
      }
  }, 50)
}