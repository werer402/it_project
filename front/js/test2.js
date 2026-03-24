const videoChooser = document.getElementById('videoChooser');
const myVideo = document.getElementById('myVideo');

videoChooser.addEventListener('change', function() {
    const file = this.files[0]; // Берем файл из инпута
    if (file) {
        const url = URL.createObjectURL(file); // Создаем временную ссылку
        myVideo.src = url;
        myVideo.play(); // Запускаем просмотр
    }
});
async function server_snap() {
    const hidden_canvas = document.createElement('canvas');
    const ctx = hidden_canvas.getContext('2d'); // 1. Получаем контекст рисования
    const btn_snap = document.getElementById('snap');
    const video = document.getElementById('myVideo'); // Убедись, что ID совпадает

    // 2. Добавляем async перед параметрами стрелочной функции
    btn_snap.addEventListener('click', async() => {

        // 3. Устанавливаем размер холста равным размеру видеокадра
        hidden_canvas.width = video.videoWidth;
        hidden_canvas.height = video.videoHeight;

        // 4. Рисуем (используем ctx!)
        ctx.drawImage(video, 0, 0, hidden_canvas.width, hidden_canvas.height);

        // 5. Превращаем в строку
        let json_image = hidden_canvas.toDataURL('image/jpeg');

        // 6. Отправляем
        const res = await fetch('/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: json_image })
        });

        const result = await res.json();
        console.log("Ответ сервера:", result);
    });
}

server_snap();