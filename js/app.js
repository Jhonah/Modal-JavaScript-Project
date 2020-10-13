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
    const boxItem = document.querySelector('.lightbox-item');
    const btnClose = document.querySelector('.lightbox-close');

    boxButtons.forEach((buttonImg) => {
        buttonImg.addEventListener('click', (eventImg) => {
            boxContainer.classList.add('show');
            //console.log(`click to event: ${eventImg.currentTarget.children[0].outerHTML}`);

            const urlImg = getUrlImgFromHtml(eventImg.currentTarget.children[0].outerHTML);
            
            clickBtn(urlImg);
            //const background = boxContainer.children[0].children[1].style.background;
            //console.log(background);

            /*btnClose.addEventListener('click', () => {
                boxContainer.classList.remove('show');
            })*/
        })
    })

});

/* запускается когда вызовут */
function clickBtn(img) {
    const boxControls = document.querySelectorAll('.lightbox-control');

    boxControls.forEach((button) => {
        button.addEventListener('click', (e) => {

            //console.log(`click to button: ${buttonImg.children[0].outerHTML}`);
            //console.log(`click to button: ${buttonImg.children[0].src}`);
            setUrlForHtmlStyle(img);

            if (e.currentTarget.classList.contains('btnRight')) {
                console.log('вправа');

            } else {
                console.log('влево');
            }
        })
    })
}

/* запускается когда вызовут */
function getUrlImgFromHtml(str) {
    const indexStartUrl = str.indexOf('/');
    const indexEndUrl = str.indexOf(`"`, indexStartUrl);

    return srcImg = str.substring(indexStartUrl + 1, indexEndUrl);
}

/* запускается когда вызовут */
function setUrlForHtmlStyle(calledImg) {
    const boxContainer = document.querySelector('.lightbox-container');
    const boxItem = document.querySelector('.lightbox-item');
    const urlSrc = "../img/cupcake-3.jpeg";

    boxContainer.children[0].children[1].style.background = `url("./img/${calledImg}")`;
    alert(boxItem.style.cssText);
    boxItem.style.backgroundImage = `url("./img/${calledImg}")`;
    alert(boxItem.style.backgroundImage);
}