// Open Envelope
function openEnvelope() {
    document.querySelector('.envelope').classList.add('open');
    document.getElementById('letterContainer').style.display = 'flex';
    document.querySelector('.letter').classList.add('open');
}

// Close Envelope
function closeEnvelope() {
    document.getElementById('letterContainer').style.display = 'none';
    document.querySelector('.envelope').classList.remove('open');
}

