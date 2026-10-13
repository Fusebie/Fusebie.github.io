var backgroundImagePaths = ["Assets/images/backgrounds/corridor.png",
                            "Assets/images/backgrounds/forest.png",
                            "Assets/images/backgrounds/forest_2.gif",
                            "Assets/images/backgrounds/forest_2.png",
                            "Assets/images/backgrounds/snow2.gif",
                            "Assets/images/backgrounds/corridor.gif"
                            ];
                            
                            var headerContainer = document.getElementById("header-container");
                            // var h1_Fusebie = document.getElementById("h1-fusebie");
                            // var h2_welcome = document.getElementById("h2-welcome");
                            

function SetRandomTheme()
{
    ChangeTheme(getRndInteger(0, backgroundImagePaths.length - 1));
}

function ChangeTheme(randomInt)
{
    console.log(randomInt);
    var backgroundimgURL = backgroundImagePaths[randomInt];
    var backgroundImageValue = `url( ${backgroundimgURL} )`; 

    switch (randomInt)
    {
        case 0:
            SetTheme(backgroundImageValue);
            break;
        case 1:
            SetTheme(backgroundImageValue);
            headerContainer.style.backgroundPositionY = "-7vw"
            break;
        case 2:
            SetTheme(backgroundImageValue);
            break;
        case 3:
            SetTheme(backgroundImageValue);
            break;
        case 4:
            SetTheme(backgroundImageValue);
            break;
        case 5:
            SetTheme(backgroundImageValue, "center", "100%");
            break;
    }
}

function SetTheme(bgImg, bgPos = "center", bgSize = "80%", bgRepeat = "no-repeat", bgColor = "#0000")
{
    headerContainer.style.backgroundImage = bgImg;
    headerContainer.style.backgroundPosition = bgPos;
    headerContainer.style.backgroundRepeat = bgRepeat;
    headerContainer.style.backgroundColor = bgColor;
    headerContainer.style.backgroundSize = bgSize;
}

function getRndInteger(minInclusive, maxInclusive) {
    return Math.floor(Math.random() * (maxInclusive - minInclusive + 1) ) + minInclusive;
}

function ShowElement(elementId)
{
    document.getElementById(elementId).style.color = "white";
    document.getElementById(elementId).style.textDecoration = "underline";
}
function HideElement(elementId)
{
    document.getElementById(elementId).style.color = "rgba(0,0,0,0)";
}