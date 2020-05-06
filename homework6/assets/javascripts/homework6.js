prompt("you ready for this shit, bitches?!")

document.getElementById("datboi").addEventListener("click", datboiFunction);

function datboiFunction() {
	alert("o shit waddup!");
}

function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        window.location = 'https://www.youtube.com/watch?v=kqJhisHVYAE';
    });
}