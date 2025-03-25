// 流星动画逻辑
window.onload = function () {
    function createMeteor() {
        const container = document.querySelector('.meteor-container');
        const meteor = document.createElement('div');
        meteor.className = 'meteor';

        // 设置随机参数
        meteor.style.left = Math.random() * 100 + '%';
        meteor.style.animationDelay = Math.random() * 5 + 's';
        meteor.style.animationDuration = (Math.random() + 2) + 's';

        container.appendChild(meteor);
    }

    // 创建流星（数量增加到15个）
    for (let i = 0; i < 15; i++) {
        createMeteor();
    }

    // 自动清理和补充流星
    setInterval(() => {
        const meteors = document.querySelectorAll('.meteor');
        meteors.forEach(meteor => {
            const rect = meteor.getBoundingClientRect();
            if (rect.top > window.innerHeight) {
                meteor.remove();
                createMeteor();
            }
        });
    }, 1000);
};

// 获取爱心图片和弹出框元素
const heartImage = document.getElementById('heart-image');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

// 调试信息，确认元素是否正确获取
console.log('heartImage:', heartImage);
console.log('popup:', popup);
console.log('closePopup:', closePopup);

// 点击爱心图片显示弹出框
if (heartImage) {
    heartImage.addEventListener('click', function () {
        popup.style.display = 'block';
    });
}

// 点击关闭按钮隐藏弹出框
if (closePopup) {
    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });
}

// 点击弹出框外部隐藏弹出框
if (popup) {
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}

// 音乐播放逻辑
const music_popup = document.getElementById('popup');// 获取弹出框元素

if (music_popup) {
    // 点击弹出框外部隐藏弹出框
    window.addEventListener('click', function (event) {
        if (event.target === music_popup) {
            music_popup.style.display = 'none';
        }
    });

    // 点击弹窗区域播放/暂停
    music_popup.addEventListener('click', function (event) {
        // 排除关闭按钮的点击
        if (event.target.classList.contains('close')) return;

        // 获取音乐播放器元素
        const bgm = document.getElementById('bgm');

        if (bgm.paused) {
            bgm.play();
        } else {
            bgm.pause();
        }
    });
}
