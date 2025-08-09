// Handles pop-up gallery overlay for flex-item images

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('imageOverlay');
    const overlayImg = document.getElementById('overlayImg');
    const flexItems = document.querySelectorAll('.flex-item');

    flexItems.forEach(function (item) {
        if (item.tagName === 'IMG') {
            item.addEventListener('click', function () {
                const src = item.getAttribute('src');
                if (src) {
                    overlayImg.src = src;
                }
                overlay.classList.add('active');
            });
        }
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            overlayImg.src = '';
        }
    });
});
