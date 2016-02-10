
var Cat = function (data) {
    this.clickCount = ko.observable(0);
    this.name = ko.observable(data.name);
    this.nickNames = ko.observableArray(data.nickNames);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);

    this.level = ko.computed(function () {
        if (this.clickCount() < 10) {
            return 'infant';
        } else if (this.clickCount() < 30) {
            return 'baby';
        } else if (this.clickCount() < 75) {
            return 'child';
        } else if (this.clickCount() < 100) {
            return 'teen';
        } else if (this.clickCount() < 125) {
            return 'adult';
        }
    }, this);
};



var ViewModel = function () {

    var self = this;

    this.incrementCounter = function () {
        this.clickCount( this.clickCount() + 1);
    };

    this.currentCat = ko.observable( new Cat(
        {
            name: 'Flabby',
            nickNames: ['flabbster', 'Frank', 'Fanny', 'Flinolium'],
            imgSrc: 'img/cat2.jpg',
            imgAttribution: 'imagesitelkjasf.com'
        }
    ) );
};

ko.applyBindings(new ViewModel());

