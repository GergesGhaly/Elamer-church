// fixed nav

// window.addEventListener('scroll', function(){

// const header = document.querySelector('header')

// header.classList.toggle("sticky",window.scrollY>0)

// });

function menutogl(){


const menutogl1 = document.querySelector('.menutogle');
const nav= document.querySelector('#nave')

menutogl1.classList.toggle('active');
nav.classList.toggle('active')

}

// play songs

const ply = document.getElementById("play");
const ply2 = document.getElementById("play2");
const ply3 = document.getElementById("play3");
const song = document.getElementById("mysong");
const song2 = document.getElementById("mysong2");
const song3 = document.getElementById("mysong3");

ply.onclick = function () {
    if (song.paused) {
        song.play();
        ply.src = "img/pause.png";

    } else {
        song.pause();
        ply.src = "img/play.png";



    }


}


ply2.onclick = function () {
    if (song2.paused) {
        song2.play();
        ply2.src = "img/pause.png";

    } else {
        song2.pause();
        ply2.src = "img/play.png";



    }


}

ply3.onclick = function () {
    if (song3.paused) {
        song3.play();
        ply3.src = "img/pause.png";

    } else {
        song3.pause();
        ply3.src = "img/play.png";



    }


}



window.onscroll = function(){
    if(window.pageYOffset >= 800){

        btn.style.display='block'

    }else{
        btn.style.display='none'
    }

}

btn.onclick = function(){

window.scrollTo(0,0);

}

// changlangug

// let arbtn = document.querySelector(".arbtn")
// let enbtn = document.querySelector(".enbtn")
// let story = document.querySelector(".story")


// enbtn.onclick = ()=>{
//     story.textContent = `The saint was born in Tire in the year 275 AD. When he reached the role of youth, he enlisted in the
//     army, and rose to the rank of commander. His father, Sadarichos, was a vizier during the reign of
//     Numarius, and his mother was the sister of Wasilides, the vizier. When King Normarius died in the
//     Persian war, and his son Justus was in the army fighting in the west. The two ministers, Sadarichos
//     and Basilides, continued to manage the affairs of the kingdom, until the pagan king of Diocletian in
//     the year 303 AD. The effects of persecution on Christians. As for St. Theodore, at this time, he
//     assumed the leadership of the army fighting against the Persians. And he saw in a night vision that
//     there was a ladder from earth to heaven, and above the ladder the Lord sat on a great pulpit and
//     around it were myriads of angels glorifying. Under the stairs, he saw a great dragon, Satan. And the
//     Lord said to Saint Theodore, Your blood will be shed on my name, so he said to him and my friend to
//     Lyondius? And the Lord said to him, it is not only him. And even the Persian Panicarus, and when a
//     truce was made between the Roman army and the Persian army, and he instructed him to the Christian
//     religion, he believed in Christ. Then Diocletian saw that Prince Theodore should be brought in, so
//     he brought his army with him to Lyndius and Panicarros, and if Theodore knew that the king would
//     invite him to worship idols, he said to his soldiers, whoever of you wanted to fight in the name of
//     the Lord Christ, let him stay with me. They all cried with one voice, We die with you, and your God
//     is our God. And when he reached the city, he left his soldiers outside, and entered the king who
//     welcomed him well. And he asked him about war with the courage of faith. I do not know a god to whom
//     I worship except my Lord Jesus Christ. Diocletian ordered the soldiers to nail him to a tree and to
//     intensify his torment, but the Lord was strengthening and comforting him. Finally, he surrendered
//     his pure soul to the hand of the Lord who loved him, and received the crown of eternal glory in the
//     kingdom of the heavens. Then the king sent priests of Apollon to the saints’ soldiers calling them
//     to worship idols. So they all cried, saying, We have no king but our Lord Jesus Christ, King of
//     kings and Lord of lords. When he heard Diocletian, he sent to cut off their heads all, and they
//     received luminous wreaths and everlasting happiness. May their prayers be with us, Amen.`

// }