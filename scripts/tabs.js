console.log(`tabs.js подключён`)


    const tabs = document.querySelectorAll('.card-detail__change');
    const tabsTitle = document.querySelector('.card-details__title');
    const tabsPrice = document.querySelector('.card-details__price');
    const tabsImage = document.querySelector('.card__image_item');

    const tabsOptions = [
        {name: 'Graphite', memory: '128', price: '1250', image: 'img/iPhone-graphite.webp'},
        {name: 'Silver', memory: '256', price: '1350', image: 'img/iPhone-silver.webp'},
        {name: "Sierra Blue", memory: '512', price: '1550', image: 'img/iPhone-sierra_blue.webp'}
    ]

    //3
    const changeContent = (index) => {
        tabsTitle.innerHTML = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
        tabsPrice.innerHTML = `${tabsOptions[index].price}$`;

        tabsImage.setAttribute('src', tabsOptions[index].image);
        document.title = `iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
    }

    //2
    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active');

            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
        })
        changeContent(indexClickedTab);
    }

    //1
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index);
        })
    })

    changeContent(0);





