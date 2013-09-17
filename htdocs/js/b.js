var dataInput = document.getElementById('data'),
    output = document.getElementById('fromEvent');

addEvent(window, 'storage', function (event) {
    if (event.key == 'storage-event-test') {
        output.innerHTML = event.newValue;
    }
});

addEvent(dataInput, 'keyup', function () {
    localStorage.setItem('storage-event-test', this.value);
});