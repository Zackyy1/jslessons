module MyModule {

    const MY_LIST_SELECTOR: string = '[data-js-my-list]';
    const ATTR_NUMBER_OF_ITEMS: string = 'data-number-of-items';
    const BUTTON = '[data-js-add-list-item]';
    const TIMER_SELECTOR = '[data-js-timer]';


    export const Init = () => {
        // console.log('Hello world!');
        // let myList = findMyList();
        // createListItems();

        initButtonListener();
        createListItems();

        setInterval( () => setTimerValue(), 1000);

    }

    const setTimerValue = () => {
        let timeData = getTimer();
        let timeString = `${timeData.hours}:${timeData.minutes}:${timeData.seconds}`;
        $(TIMER_SELECTOR).text(timeString);

    }

    const getTimer = () => {
        const date = new Date();
        let seconds;
        let minutes;
        let hours;

        let timeData = {
            seconds,
            minutes,
            hours
        };



        timeData.seconds = date.getSeconds();
        timeData.minutes = date.getMinutes();
        timeData.hours = date.getHours();

        for (let timeElement in timeData) {
            if (timeData[timeElement] < 10) {
                timeData[timeElement] = '0' + timeData[timeElement].toString();
            }
        }

        return timeData;
    }


    function initButtonListener() {
        let button = $(BUTTON);

        button.on('click', () => {
            let debouncer = false;

            findMyList().find('li').each((i, e) => {
                console.log(i, e);
                if (!$(e).hasClass('active') && debouncer === false) {
                    $(e).addClass('active');
                    debouncer = true;
                }
            })
        })
    }

    const test = (first, second) => {
        return (first * 2) + (second * 3)
    }


    const findMyList = () => {
        let myList = $(MY_LIST_SELECTOR);
        return myList;
    }

    const createListItems = () => {
        const NUMBER_OF_ITEMS = Number(findMyList().attr(ATTR_NUMBER_OF_ITEMS));
        for (let i = 0; i < NUMBER_OF_ITEMS; i++) {
            const LIST_ITEM_HTML = `<li>${i + 1}</li>`
            findMyList().append(LIST_ITEM_HTML);
        }
    }

    const createListItem = () => {
        const LIST_ITEM_HTML = `<li>Derevo</li>`;
        findMyList().append(LIST_ITEM_HTML);

    }


}


$(document).ready(() => {
    MyModule.Init();

})
