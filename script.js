// Предполагается, что данные о событиях будут загружаться из API или базы данных.
const events = [
    {
        title: "Событие 1",
        description: "Описание события 1",
        date: "2024-05-20",
        organizer: "Организатор 1"
    },
    {
        title: "Событие 2",
        description: "Описание события 2",
        date: "2024-05-25",
        organizer: "Организатор 2"
    },
    {
        title: "Событие 1",
        description: "Описание события 1",
        date: "2024-05-20",
        organizer: "Организатор 1"
    },
    {
        title: "Событие 2",
        description: "Описание события 2",
        date: "2024-05-25",
        organizer: "Организатор 2"
    },
    {
        title: "Событие 1",
        description: "Описание события 1",
        date: "2024-05-20",
        organizer: "Организатор 1"
    },
    {
        title: "Событие 2",
        description: "Описание события 2",
        date: "2024-05-25",
        organizer: "Организатор 2"
    },
    // Добавьте больше событий по аналогии
];

const itemsPerPage = 5; // Количество событий на странице

const eventList = document.getElementById('event-list');
const pagination = document.getElementById('pagination');

let currentPage = 1;

// Функция для отображения событий на текущей странице
function displayEvents(page) {
    eventList.innerHTML = '';

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedEvents = events.slice(startIndex, endIndex);

    displayedEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <h2>${event.title}</h2>
            <p><strong>Дата:</strong> ${event.date}</p>
            <p><strong>Организатор:</strong> ${event.organizer}</p>
            <p>${event.description}</p>
        `;
        eventList.appendChild(eventElement);
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

