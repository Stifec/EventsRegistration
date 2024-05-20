

const idBook = Number(localStorage.getItem("button"));
let bookItem = document.querySelector(".event-list");

const addDataToHTML = () => {
    bookItem.innerHTML = "";

        events.forEach((event) => {
            if (event.id === idBook) {
                if(event.user.length === 0) {
                    let newBook = document.createElement("div");
                    newBook.classList.add("event");
                    newBook.innerHTML = `
                    <div class="user-info">
                        <p class="name">User not found</p>                        
                    </div>
                `;
                    bookItem.appendChild(newBook);
                }
                else {
                    for(const userInfo of event.user) {
                        let newBook = document.createElement("div");
                        newBook.classList.add("event");
                        newBook.innerHTML = `
                        <div class="user-info">                  
                            <p class="name">Name: ${userInfo.name}</p>
                            <p class="email">E-mail: ${userInfo.email}</p>
                        </div>`;
                        bookItem.appendChild(newBook);
                    }
                }
            }
        });
};

const initApp = () => {
    fetch("./event.json")
        .then((response) => response.json())
        .then((data) => {
            events = data.devents;
            addDataToHTML();
        });
};
initApp();


