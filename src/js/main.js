var MyModule;
(function (MyModule) {
    var MY_LIST_SELECTOR = '[data-js-my-list]';
    var ATTR_NUMBER_OF_ITEMS = 'data-number-of-items';
    var BUTTON = '[data-js-add-list-item]';
    var TIMER_SELECTOR = '[data-js-timer]';
    MyModule.Init = function () {
        // console.log('Hello world!');
        // let myList = findMyList();
        // createListItems();
        initButtonListener();
        createListItems();
        setInterval(function () { return setTimerValue(); }, 1000);
    };
    var setTimerValue = function () {
        var timeData = getTimer();
        var timeString = timeData.hours + ":" + timeData.minutes + ":" + timeData.seconds;
        $(TIMER_SELECTOR).text(timeString);
    };
    var getTimer = function () {
        var date = new Date();
        var seconds;
        var minutes;
        var hours;
        var timeData = {
            seconds: seconds,
            minutes: minutes,
            hours: hours
        };
        timeData.seconds = date.getSeconds();
        timeData.minutes = date.getMinutes();
        timeData.hours = date.getHours();
        for (var timeElement in timeData) {
            if (timeData[timeElement] < 10) {
                timeData[timeElement] = '0' + timeData[timeElement].toString();
            }
        }
        return timeData;
    };
    function initButtonListener() {
        var button = $(BUTTON);
        button.on('click', function () {
            var debouncer = false;
            findMyList().find('li').each(function (i, e) {
                console.log(i, e);
                if (!$(e).hasClass('active') && debouncer === false) {
                    $(e).addClass('active');
                    debouncer = true;
                }
            });
        });
    }
    var test = function (first, second) {
        return (first * 2) + (second * 3);
    };
    var findMyList = function () {
        var myList = $(MY_LIST_SELECTOR);
        return myList;
    };
    var createListItems = function () {
        var NUMBER_OF_ITEMS = Number(findMyList().attr(ATTR_NUMBER_OF_ITEMS));
        for (var i = 0; i < NUMBER_OF_ITEMS; i++) {
            var LIST_ITEM_HTML = "<li>" + (i + 1) + "</li>";
            findMyList().append(LIST_ITEM_HTML);
        }
    };
    var createListItem = function () {
        var LIST_ITEM_HTML = "<li>Derevo</li>";
        findMyList().append(LIST_ITEM_HTML);
    };
})(MyModule || (MyModule = {}));
$(document).ready(function () {
    MyModule.Init();
});
