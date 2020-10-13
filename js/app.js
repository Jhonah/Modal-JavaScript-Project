/* $(); - обертка для функции запускает её сразу */
$(function () {

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

        const searchFilter = inputEvent.target.value.toLowerCase().trim();

        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    })
});

/* $(); - обертка для функции запускает её сразу */
$(function () {

    const boxButtons = document.querySelectorAll('.img-container');
    const boxContainer = document.querySelector('.lightbox-container');

    const images = document.querySelectorAll('.store-img');

    const length = boxButtons.length - 1;
    let index = 0;
    let arrayCalledImg = [];

    images.forEach((image) => {
        // found
        //console.log(`images: ${image.src}`);
    })

    boxButtons.forEach((buttonImg) => {

        arrayCalledImg[index] = getUrlImgFromHtml(buttonImg.children[0].outerHTML);
        index++;
        // undefined
        //console.log(`boxButtons: ${buttonImg.src}`);        

        buttonImg.addEventListener('click', (eventImg) => {

            //console.log(eventImg.target.src);
            let image = eventImg.target.src;

            /* включили показ модуля */
            boxContainer.classList.add('show');

            /* нашли название картинки */
            const urlImg = getUrlImgFromHtml(eventImg.currentTarget.children[0].outerHTML);
            /* заменили картинку при включение модуля */
            //boxContainer.children[0].children[1].style.backgroundImage = `url("./img/${urlImg}")`;
            boxContainer.children[0].children[1].style.backgroundImage = `url(${image})`;

            index = arrayCalledImg.indexOf(urlImg);
            //selectNextItemBy(index, arrayCalledImg, length);
            /* чтобы передать индекс и длину массива */
            /*index = 0;
            arrayCalledImg.forEach((item) => {
                index++;
                if (urlImg === item) {
                    selectNextItemBy(index - 1, arrayCalledImg, length);
                }
            })*/
        })
    })

    const boxControls = document.querySelectorAll('.lightbox-control');
    //const boxContainer = document.querySelector('.lightbox-container');

    boxControls.forEach((button) => {
        button.addEventListener('click', (e) => {

            if (e.currentTarget.classList.contains('btnRight')) {
                index++;
                //console.log(`вправа ${index}`);

            } else {
                index--;
                //console.log(`влево ${index}`);
            }

            if (index > length) {
                index = 0;
            } else if (index < 0) {
                index = length;
            }

            //const imgFromArray = selectImage(index);
            //boxContainer.children[0].children[1].style.backgroundImage = `url("./img/${imgFromArray}")`;

            boxContainer.children[0].children[1].style.backgroundImage = `url("./img/${arrayCalledImg[index]}")`;
        })
    })

    const btnClose = document.querySelector('.lightbox-close');

    btnClose.addEventListener('click', () => {
        boxContainer.classList.remove('show');
    })

});

/* запускается когда вызовут */
/*function selectNextItemBy(index, array, length) {

}*/

/* запускается когда вызовут */
function getUrlImgFromHtml(str) {

    const indexStartUrl = str.indexOf('/');
    const indexEndUrl = str.indexOf(`"`, indexStartUrl);

    return srcImg = str.substring(indexStartUrl + 1, indexEndUrl);
}

/* находим картинку по индекс, если вдруг нету самого массива */
/*function selectImage(count) {

    const boxButtons = document.querySelectorAll('.img-container');

    return urlImg = getUrlImgFromHtml(boxButtons[count].children[0].outerHTML);
}*/