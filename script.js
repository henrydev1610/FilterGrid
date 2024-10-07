// Seleciona todos os botoes e os cards filtrados 

const filterButtons = document.querySelectorAll('.filterable-buttons button')
const filterCards = document.querySelectorAll('.filterable-cards .card')

// Função que filtra os cards
const cardFilter = e =>{
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
    console.log(e.target)
    // Adicionando "hide" para esconder o card selecionado 
    filterCards.forEach(card =>{
        card.classList.add('hide');

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name == 'all'){
            card.classList.remove('hide');

        }



    })





}

// Criando o event listener para filtrar o botão 


filterButtons.forEach(button => button.addEventListener('click', cardFilter))


// implementando o darkmode 

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const icon = toggleButton.querySelector('i');

    // Verifica se o usuário já possui preferência salva
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});


