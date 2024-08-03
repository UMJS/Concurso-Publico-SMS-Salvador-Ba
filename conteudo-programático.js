// conteudo-programático.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const contentList = document.querySelectorAll('ul li');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();

        contentList.forEach(item => {
            const contentText = item.textContent.toLowerCase();

            if (contentText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});