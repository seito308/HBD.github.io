function openBox(element) {
    element.classList.toggle('open');
    if (element.classList.contains('open')) {
        createHearts(element);
    }
}

function createHearts(parent) {
    const emojis = ['❤️', '💖', '✨', '🌸', '🎁', '🎂'];
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        const xOffset = (Math.random() - 0.5) * 200;
        heart.style.setProperty('--x', `${xOffset}px`);
        heart.style.left = '50%';
        heart.style.top = '20%';
        
        parent.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}