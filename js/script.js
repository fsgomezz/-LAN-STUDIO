const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.Collections-card');

function applyFilter(category) {
    cards.forEach(card => {
        const cardCategory = card.dataset.gender;
        const shouldShow = category === 'all' || cardCategory === category;
        card.style.display = shouldShow ? '' : 'none';
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        applyFilter(category);
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const defaultButton = document.querySelector('.filter-btn[data-category="all"]');
    if (defaultButton) defaultButton.classList.add('active');
    applyFilter('all');
});