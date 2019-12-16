function addButton(text) {
    const replay = document.querySelector('.video-type');

    const button = document.createElement('span');
    button.innerHTML = 'DOWNLOAD';
    button.classList = replay.classList;
    if (replay.getAttributeNames().find(dataAttribute)) {
        button.setAttribute(replay.getAttributeNames().find(dataAttribute), '');
    }
    button.style.backgroundColor = 'rgba(255,211,0,.9)';
    button.style.color = 'black';
    button.style.marginLeft = '6px';
    button.style.cursor = 'pointer';

    button.onclick = function () {
        prompt('VLC Download URL:', text);
    };

    replay.parentNode.append(button);
    console.log('Download button added');
}

function dataAttribute(attributeName) {
    return attributeName.includes('data');
}

const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url) {
    if (url.endsWith('vod.m3u8')) {
        addButton(url);
    }
    originalOpen.apply(this, arguments);
};
