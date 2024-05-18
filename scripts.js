
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
        description: "Описание события 1",
        date: "2021-05-20",
        organizer: "Организатор 1",
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
        organizer: "Организатор 1",
        user: [],
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

// ======================== VIEW ============================



const idBook = Number(localStorage.getItem("button"));
console.log(idBook)
let bookItem = document.querySelector(".users");
const addDataToHTML = () => {
    bookItem.innerHTML = "";

        events.forEach((event) => {
            if (event.id === idBook) {
                if(event.user.length === 0) {
                    let newBook = document.createElement("div");
                    newBook.classList.add("book-item");
                    newBook.innerHTML = `
                    <div class="book-image">
                        <p class="item-discription">User not found</p>                        
                    </div>
                `;
                    bookItem.appendChild(newBook);
                }
                else {
                    for(const userInfo of event.user) {
                        let newBook = document.createElement("div");
                        newBook.classList.add("book-item");
                        newBook.innerHTML = `
                        <div class="book-image">
                            <p class="item-discription">45</p>
                            <p class="item-discription">rteretretrere</p>
                            <p>${userInfo.name}</p>
                            <p>${userInfo.email}</p>
                        </div>`;
                        bookItem.appendChild(newBook);
                    }
                }
            }
        });
};
addDataToHTML();
