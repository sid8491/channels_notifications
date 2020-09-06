const socket = new ReconnectingWebSocket('ws://127.0.0.1:8000/ws/notifications/');

socket.onopen = function(e) {
    console.log('connection made');
};

socket.onmessage = function(e) {
    console.log('msg came');
    const data = JSON.parse(e.data);
    appendNotification(data);
};

socket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly');
};

function appendNotification(data) {
    document.querySelector('#notifications-panel').innerHTML += (
        `<div class="alert alert-primary" role="alert">` +
         +
        `</div>`
    )
  }

  function appendNotification(data) {
          if (data.salary < 30) {
              notificationClass = 'alert-danger'
          } else if (data.salary > 30 && data.salary < 40) {
            notificationClass = 'alert-primary'
          } else {
            notificationClass = 'alert-success'
          }
    document.querySelector('#notifications-panel').innerHTML += (
        `<div class="alert notifications ${notificationClass}" role="alert">
            <b>${data.name}</b> is selected for <b>${data.job_location}</b> with an offer of ${data.salary}LPA.
            <span class="float-right text-muted">${data.timestamp}</span>
        </div>`
    )
  }