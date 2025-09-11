function closeReal(elementID)
{
    document.getElementById(elementID).style.display = "none";
    document.getElementById("openedwindowcontainer").style.display = "none";
}
function maximize(contentlink)
{
    balls = document.getElementById("openedwindowcontainer");
    balls.style.display = "block";
    
    document.getElementById("openedwindow").style.display = "flex"
    document.getElementById("openedwindow-inner").style.backgroundImage = `url("${contentlink}")`;
}

// Windows system (draggable divs)

class Queue
{
    constructor()
    {
        this.items = [];
    }

    // Add element to the queue (push to the end)
    enqueue(element)
    {
        this.items.push(element);
    }

    // Remove an element from the front of the queue (dequeue)
    dequeue()
    {
        if (this.isEmpty())
        {
            console.log("Queue is empty!");
            return;
        }

        return this.items.shift(); // Removes the first element
    }

    // Move an element to the front of the queue
    moveToFront(element)
    {
        const index = this.items.indexOf(element);
        
        if (index !== -1)
        {
            // Remove the element from its current position and add it to the front
            this.items.splice(index, 1);
            this.items.unshift(element);
        }

        else
        {
            console.log("Element not found in the queue!");
        }
    }

    // Check if the queue is empty
    isEmpty()
    {
        return this.items.length === 0;
    }

    // View the front of the queue
    front()
    {
        if (this.isEmpty())
        {
            console.log("Queue is empty!");
            return;
        }
        return this.items[0];
    }

    // View all elements in the queue
    printQueue()
    {
        console.log(this.items);
    }
}

const windowQueue = new Queue();

window.addEventListener('load', setupDragElements);
window.addEventListener('load', InitializeWindowsQueue);
window.addEventListener('load', getVideoEmbedsAndButtons);


function setupDragElements()
{
    dragElement("dragWindow1");
    dragElement("dragWindow2");
    dragElement("dragWindow3");
    dragElement("dragWindow4");
    dragElement("dragWindow5");
    dragElement("dragWindow6");
    dragElement("dragWindow7");
}


function dragElement(elementID)
{
    var elmnt = document.getElementById(elementID);
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(elmnt.id + "Header"))
    {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
    }
    else
    {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        
        windowQueue.moveToFront(elmnt);
        SetWindowZIndex();
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function InitializeWindowsQueue()
{
    windowQueue.enqueue(document.getElementById("dragWindow1"));
    windowQueue.enqueue(document.getElementById("dragWindow2"));
    windowQueue.enqueue(document.getElementById("dragWindow3"));
    windowQueue.enqueue(document.getElementById("dragWindow4"));
    windowQueue.enqueue(document.getElementById("dragWindow5"));
    windowQueue.enqueue(document.getElementById("dragWindow6"));
    windowQueue.enqueue(document.getElementById("dragWindow7"));
}


function SetWindowZIndex()
{
    var i = windowQueue.items.length;

    windowQueue.items.forEach(window => 
    {
        window.style.zIndex = i;
        i--;
    });
}

// video slider

var videoEmbeds = [];
var currentActiveEmbed = 0;
var rightArrowButton;
var leftArrowButton;

function getVideoEmbedsAndButtons()
{
    videoEmbeds = document.getElementsByClassName("videoEmbed");

    rightArrowButton = document.getElementById("arrowButton1");
    leftArrowButton = document.getElementById("arrowButton2");

    rightArrowButton.onmousedown = (() => {
        rightArrowButton.style.backgroundColor = "rgba(0, 149, 255, 0.32)"
    });
    leftArrowButton.onmousedown = (() => {
        leftArrowButton.style.backgroundColor = "rgba(0, 149, 255, 0.32)"
    });
    rightArrowButton.onmouseup = (() => {
        rightArrowButton.style.backgroundColor = "rgba(0, 0, 0, 0)"
    });
    leftArrowButton.onmouseup = (() => {
        leftArrowButton.style.backgroundColor = "rgba(0, 0, 0, 0)"
    });
}

function changeNext(direction)
{
    if (direction == "right" && currentActiveEmbed < videoEmbeds.length - 1)
    {
        videoEmbeds[currentActiveEmbed].style.display = "none";
        currentActiveEmbed += 1;
        videoEmbeds[currentActiveEmbed].style.display = "block";
    }

    if (direction == "left" && currentActiveEmbed > 0)
    {
        videoEmbeds[currentActiveEmbed].style.display = "none";
        currentActiveEmbed -= 1;
        videoEmbeds[currentActiveEmbed].style.display = "block";
    }
}
