document.querySelectorAll('.comida').forEach(item => {
    item.addEventListener('click', () => {
        const descricao = item.querySelector('.descricao');
        descricao.classList.toggle('ativo');
    });
});