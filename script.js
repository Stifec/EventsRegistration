// Предполагается, что данные о событиях будут загружаться из API или базы данных.

let events = []


const itemsPerPage = 4; // Количество событий на странице

const eventList = document.querySelector('.event-list');
const pagination = document.getElementById('pagination');


let currentPage = 1;

// Функция для отображения событий на текущей странице

function displayEvents(page) {

    eventList.innerHTML = '';

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedEvents = events.slice(startIndex, endIndex);

    displayedEvents.forEach(ev => {

        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.dataset.id = ev.id
        eventElement.innerHTML = `
            <h2>Title: ${ev.title}</h2>
            <p><strong>Data:</strong> ${ev.date}</p>
            <p><strong>Organiser:</strong> ${ev.organizer}</p>
            <p>Description: ${ev.description}</p>
            <div class="control">
                <button id="${ev.id}" type="button" class="registr">Redistr</button>     
                <button id="${ev.id}" type="button" class="btn-view">View</button>
            </div>
            
        `;
        eventList.appendChild(eventElement)

    });

}
const initApp = () => {
    fetch("./event.json")
        .then((response) => response.json())
        .then((data) => {
            events = data.devents;
            displayEvents(1);
        });
};
initApp();


// Функция для отображения пагинации
function displayPagination() {
    pagination.innerHTML = '';


    const totalPages = Math.ceil(events.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.classList.add('btn-pagination');
        button.textContent = i;
        button.addEventListener('click', () => {

            currentPage = i;

            displayEvents(currentPage);

        });
        pagination.appendChild(button);
    }
}

// Первоначальная загрузка страницы
displayEvents(currentPage);
displayPagination();

// ======================== VIEW ============================

const btn = document.querySelector('.event-board');
console.log(btn)
    btn.addEventListener("click", (e) => {
            if(e.target.className === 'btn-view') {
                const bookElem = e.target.id;

                console.log('bookElem', bookElem)
                localStorage.setItem('button', `${bookElem}`)
                window.location.href = "users.html";
            }
            if(e.target.className === 'registr') {
                const regist = e.target.id;
                console.log('bookElem', regist)
                localStorage.setItem('buton', `${regist}`)
                toggleModal()

            }



    });

// ================== MODAL ==============

const modal = document.querySelector('.backdrop');
// const modalOpen = document.querySelector('.registr');
const modalClose = document.querySelector('.btn-modal-close');
const mod = document.querySelector(".body");

const toggleModal = () => {
    modal.classList.toggle('is-hidden')
    mod.classList.toggle('body-mod')
};

modalClose.addEventListener('click', toggleModal);







