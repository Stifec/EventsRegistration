// Предполагается, что данные о событиях будут загружаться из API или базы данных.
const events = [
    {
        id: 1,
        title: "Событие 1",
        description: "Описание события 1",
        date: "2023-05-10",
        organizer: "Организатор 1",
        user: [{
            name: "Alex",
            email: 'alex@ghgjg.com'
        },{
            name: "Stif",
            email: 'stif@ghgjg.com'
        },{
            name: "Dron",
            email: 'dron@ghgjg.com'
        },

        ],
    },
    {
        id: 2,
        title: "Событие 2",
        description: "Описание события 2",
        date: "2021-05-20",
        organizer: "Организатор 2",
        user: [{
            name: "Saret",
            email: 'saret@ghgjg.com'
        }],
    },
    {
        id: 3,
        title: "Событие 3",
        description: "Описание события 3",
        date: "2024-08-20",
        organizer: "Организатор 1"
    },
    {
        id: 4,
        title: "Событие 4",
        description: "Описание события 4",
        date: "2024-08-25",
        organizer: "Организатор 2"
    },
    {
        id: 5,
        title: "Событие 5",
        description: "Описание события 5",
        date: "2025-05-20",
        organizer: "Организатор 1"
    },
    {
        id: 6,
        title: "Событие 6",
        description: "Описание события 6",
        date: "2025-01-25",
        organizer: "Организатор 2"
    },
    {
        id: 7,
        title: "Событие 7",
        description: "Описание события 7",
        date: "2022-05-20",
        organizer: "Организатор 1"
    },
    {
        id: 8,
        title: "Событие 8",
        description: "Описание события 8",
        date: "2023-02-25",
        organizer: "Организатор 2"
    },
    {
        id: 9,
        title: "Событие 9",
        description: "Описание события 9",
        date: "2024-05-24",
        organizer: "Организатор 1"
    },
    {
        id: 10,
        title: "Событие 10",
        description: "Описание события 10",
        date: "2024-06-25",
        organizer: "Организатор 2",
        users: [],
    },
    {
        id: 11,
        title: "Событие 11",
        description: "Описание события 11",
        date: "2023-03-20",
        organizer: "Организатор 1",
        users: [],
    },
    {
        id: 12,
        title: "Событие 12",
        description: "Описание события 12",
        date: "2024-05-25",
        organizer: "Организатор 2",
        users: [],
    },

    // Добавьте больше событий по аналогии
];

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

    displayedEvents.forEach(events => {

        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.dataset.id = events.id
        eventElement.innerHTML = `
            <h2>${events.title}</h2>
            <p><strong>Дата:</strong> ${events.date}</p>
            <p><strong>Организатор:</strong> ${events.organizer}</p>
            <p>${events.description}</p>
          
                <button id="${events.id}" type="button" class="registr">Redistr</button>
            
            
            <button id="${events.id}" type="button" class="btn-view">View</button>
        `;
        eventList.appendChild(eventElement)


    });

}



// Функция для отображения пагинации
function displayPagination() {
    pagination.innerHTML = '';


    const totalPages = Math.ceil(events.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
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



// modalOpen.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);








