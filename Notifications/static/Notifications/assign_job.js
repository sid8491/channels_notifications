const socket = new ReconnectingWebSocket('ws://127.0.0.1:8000/ws/notifications/');

socket.onopen = function(e) {
    console.log(`connection done`);
};

// socket.onmessage = function(e) {
//     console.log('msg came');
// };

socket.onclose = function(e) {
    console.error(`Chat socket closed unexpectedly ${e}`);
};

function formSubmit(e) {
    try {
    const formData = new FormData(e.target);
    const name = document.getElementById('nameInput').value;
    const country = document.getElementById('countrySelect').value;
    const salary = document.getElementById('salaryInput').value;
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    console.log(s);
    socket.send(JSON.stringify({
        'name': name,
        'job_location': country,
        'salary': salary,
        'timestamp': `${h}:${m}:${s}`
    }));
    e.preventDefault();
    } catch {
        console.log('error');
        e.preventDefault()
    }
}

const form = document.getElementById('form-wrapper');
form.addEventListener('submit', formSubmit);