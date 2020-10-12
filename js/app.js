const sortBtn = document.querySelector(".sortBtn");
const buttons = document.querySelectorAll(".filter-btn");
const storeItems = document.querySelectorAll(".store-item");

sortBtn.addEventListener('click', (event) => {
    event.preventDefault();
})

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter;

        storeItems.forEach((item) => {
            if (filter === "all") {
                item.style.display = "block";
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }
        })
    })
})

const searchBox = document.querySelector("#search-item");

searchBox.addEventListener('keyup', (inputEvent) => {

    const searchFilter = inputEvent.target.value.toLowerCase();

    storeItems.forEach((item) => {
        if (item.textContent.includes(searchFilter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
})