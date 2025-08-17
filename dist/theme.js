export function toggleTheme() {
    const body = document.body;
    const modalContent = document.querySelector('.modal-content');
    const isDark = body.style.backgroundColor === 'rgb(30, 30, 47)';
    if (isDark) {
        body.style.backgroundColor = '#fdfdfd';
        body.style.color = '#333';
        modalContent.style.backgroundColor = '#fff';
        modalContent.style.color = '#333';
    }
    else {
        body.style.backgroundColor = '#1e1e2f';
        body.style.color = '#f5f5f5';
        modalContent.style.backgroundColor = '#2c2c2c';
        modalContent.style.color = 'aqua';
    }
}
