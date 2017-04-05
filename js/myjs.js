var canvas = new fabric.Canvas('drawing', {
  width: window.innerWidth,
  height: window.innerWidth - 50,
  isDrawingMode: false,
  backgroundColor: '#fff'
});

document.querySelectorAll('.square')[0].addEventListener('click', function(){
  canvas.add(new fabric.Rect({left: 0, top: 0, fill: '#ff1919', width: 100, height: 100}));
});
    
document.querySelectorAll('.circle')[0].addEventListener('click', function(){
  canvas.add(new fabric.Circle({radius: 50, fill: '#19ff8c', left: 0, top: 0}));
});
    
document.querySelectorAll('.triangle')[0].addEventListener('click', function(){
  canvas.add(new fabric.Triangle({ width: 100, height: 100, fill: '#7c19ff', left: 0, top: 0 }));
});

document.body.addEventListener('keydown', function(event){
  
  if (event.keyCode == 37) {
            var obj = canvas.getActiveObject();
            if (!obj) return;
            obj.left -= 1;
            canvas.renderAll();
    }
        
    if (event.keyCode == 38) {
            var obj = canvas.getActiveObject();
            if (!obj) return;
            obj.top -= 1;
            canvas.renderAll();
    }
        
    if (event.keyCode == 39) {
            var obj = canvas.getActiveObject();
            if (!obj) return;
            obj.left += 1;
            canvas.renderAll();
    }
        
    if (event.keyCode == 40) {
            var obj = canvas.getActiveObject();
            if (!obj) return;
            obj.top += 1;
            canvas.renderAll();
    }
        
    if (event.keyCode == 46) {
            
        if (canvas.getActiveGroup()) {
            canvas.getActiveGroup().forEachObject(function(a) {
                canvas.remove(a);
            });
            canvas.discardActiveGroup();
            canvas.deactivateAll().renderAll();
        } else {
            canvas.getActiveObject().remove();
        }
            
    }
  
});