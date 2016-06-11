function save_options() {
    var naam = document.getElementById('name').value;
    var pata = document.getElementById('address').value;
    chrome.storage.sync.set({
        myName: naam,
        myAddress: pata
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        myName: "",
        myAddress: ""
    }, function(items) {
        document.getElementById('name').value = items.myName;
        document.getElementById('address').value = items.myAddress;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);