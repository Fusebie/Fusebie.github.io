var backgroundImagePaths = ["Assets/images/backgrounds/corridor.png", "Assets/images/backgrounds/snow.png", "Assets/images/backgrounds/forest.png"];

var headerContainer = document.getElementById("header-container");
var h1_Fusebie = document.getElementById("h1-fusebie");
var h2_welcome = document.getElementById("h2-welcome");

function changeTheme(randomInt)
{
    var backgroundimgURL = backgroundImagePaths[randomInt];
    var backgroundImageValue = `url( ${backgroundimgURL} )`; 

    if (randomInt == 0)
    {
        headerContainer.style.backgroundImage = backgroundImageValue;
        headerContainer.style.backgroundPositionY = "-250px"

        h1_Fusebie.style.color = "white";
        h1_Fusebie.style.textShadow = "none";
        
        h2_welcome.style.color = "rgb(109, 219, 255)";
    }
    if (randomInt == 1)
    {
        headerContainer.style.backgroundImage = backgroundImageValue;
        headerContainer.style.backgroundPositionY = "-100px"
        
        h1_Fusebie.style.color = "black";
        h1_Fusebie.style.textShadow = "-1px -1px 0 rgb(255, 255, 255), 1px -1px 0 rgb(255, 255, 255), -1px 1px 0 rgb(255, 255, 255), 1px 1px 0 rgb(255, 255, 255)";

        h2_welcome.style.color = "rgb(243, 243, 243)";
    }
    if (randomInt == 2)
    {
        headerContainer.style.backgroundImage = backgroundImageValue;
        headerContainer.style.backgroundPositionY = "-150px"
        
        h1_Fusebie.style.color = "white";
        h1_Fusebie.style.textShadow = "none";

        h2_welcome.style.color = "rgb(109, 219, 255)";
    }
}

function SetRandomTheme()
{
    changeTheme(getRndInteger(0, backgroundImagePaths.length - 1));
}

function getRndInteger(minInclusive, maxInclusive) {
    return Math.floor(Math.random() * (maxInclusive - minInclusive + 1) ) + minInclusive;
  }