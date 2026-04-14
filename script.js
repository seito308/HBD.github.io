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

let clickCount = 0;
const targetClicks = 10;

function openSecretBox(element) {
    if (element.classList.contains('open')) return;

    clickCount++;
    const countDisplay = element.querySelector('.click-count');
    const hint = element.querySelector('.click-hint');
    
    // อัปเดตตัวเลขที่เหลือ
    if (countDisplay) {
        countDisplay.innerText = targetClicks - clickCount;
    }

    // เอฟเฟกต์สั่นเวลาเขย่ากล่อง
    element.style.transform = `scale(1.05) rotate(${clickCount % 2 === 0 ? 5 : -5}deg)`;

    if (clickCount >= targetClicks) {
        element.classList.add('open');
        hint.style.display = 'none'; // ซ่อนคำใบ้เมื่อเปิดแล้ว
        createHearts(element);
        clickCount = 0; // reset
    }
}
