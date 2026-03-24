let a = document.getElementById('111')
a.innerText = "wweerrr"
let b = document.getElementById('btn')
b.addEventListener("click", () => { a.innerText = "wwee555" })
const chooser = document.getElementById('videoChooser');
const video = document.getElementById('myVideo');


chooser.addEventListener('change', function(event) {

    const file = event.target.files[0];

    if (file) {

        const fileURL = URL.createObjectURL(file);

        video.src = fileURL;


        document.getElementById('111').innerText = "Видео загружено: " + file.name;
    }
});
const snapBtn = document.getElementById('snap');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

snapBtn.addEventListener('click', () => {

    let a = ctx.drawImage(video, 0, 0, canvas.width, canvas.height);


    console.log(a);
});