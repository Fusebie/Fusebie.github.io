function closeReal(elementID)
{
    document.getElementById(elementID).style.display = "none";
    document.getElementById("openedwindowcontainer").style.display = "none";
}
function maximize(contentlink)
{
    balls = document.getElementById("openedwindowcontainer");
    console.log("cock");
    balls.style.display = "block";
    
    document.getElementById("openedwindow").style.display = "flex"
    document.getElementById("openedwindow-inner").style.backgroundImage = `url("${contentlink}")`;
}
function minimize()
{

}