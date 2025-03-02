document.querySelectorAll('.top3').forEach(item => {
    item.addEventListener('click', () => {
        const descricao = item.querySelector('.descricao');
        descricao.classList.toggle('ativo');
    });
});