const projects = [
    {
        "name": "grabbaffiti",
        "link": "https://moodyl.github.io/Grabbaffiti/"
    },
    {
        "name": "-",
        "link": ""
    },
    {
        "name": "throughmyeyes",
        "link": "https://alessialarocca.github.io/through-my-eyes/"
    },
    {
        "name": "incuby",
        "link": "https://nickkgio.github.io/INCUBY/"
    },
    {
        "name": "caos",
        "link": "https://jokerboyz.github.io/AvatarGenerator/"
    },
    {
        "name": "moire",
        "link": "https://giuliaponti.github.io/moire/"
    },
    {
        "name": "fantasytypo",
        "link": "https://gwentogni.github.io/Fantasy-tipo/"
    },
    {
        "name": "letmespeak",
        "link": "https://gabrielevanzz.github.io/avatarss/"
    },
    {
        "name": "chibi",
        "link": "https://giadavegliante.github.io/Chibi-Generator/"
    },
    {
        "name": "pixelart",
        "link": "https://elizob.github.io/Pixel_Avatar/"
    }
]

const students = [
    "lauro",
    "sissi",
    "alessia",
    "giorgio",
    "alessandro",
    "giulia",
    "gwen",
    "gabriele",
    "giada",
    "elias"
]

function load_avatars(){

    const container_avatar = document.getElementById("avatars");
    let count = 0;

    for (let x = 0; x < projects.length; x++){
        for (let y = 0; y < students.length; y++){

            let alt =  students[y] + "_" + projects[x].name; 
            let img = "<img src='imgs/2022/" + projects[x].name + "_" + students[y] + ".png' alt=" + alt + " width='400' height='400'>";
            let link = "<a href='" + projects[x].link + "' title='" + projects[x].name  + "'>";
            let output = img;

            container_avatar.innerHTML += output;
        }
    }
} 

document.addEventListener("DOMContentLoaded", function(){
    load_avatars();
});