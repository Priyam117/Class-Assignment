# Catch-me-if-you-can

This is a simple game where the user tries to catch a box that moves around the screen. The box moves in a random direction and the user must use the mouse to move their cursor and catch the box.

## Code

# HTML

```
 <div id="box">
  <p>Catch Me</p>
</div>
```

# CSS
```*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#box {
    width: 7vw;
    height: 7vw;
    background-color: #b916f4;
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

#box p {
    font-size: 1.4vw;
    color: white;
}```

##JS

```
var box = document.getElementById('box');
var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;
box.addEventListener("mouseover", function() {
    var boxAttr = box.getBoundingClientRect();
    var pos = getNewPosition(boxAttr.width, boxAttr.height);
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});
function getNewPosition(boxWidth, boxHeight) {
    var newX = Math.floor((Math.random() * viewWidth)  - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight)  - boxHeight);
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    return {x: newX, y: newY};
}
```
