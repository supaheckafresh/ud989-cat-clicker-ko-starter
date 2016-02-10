
var initialCats = [
    { name: 'Sally', nickNames: ['Salster', 'Salty', 'Sabrina'], imgSrc: 'img/pants-cat.jpg', imgAttribution: 'defaultwhatever.com'},
    { name: 'Frank', nickNames: ['Becky', 'Frankenstein'], imgSrc: 'img/paper-cat.jpg', imgAttribution: 'defaultwhatever.com'},
    { name: 'Brenard', nickNames: ['Broheim', 'Bennifer', 'Blastocyst'], imgSrc: 'img/box-cat.jpg', imgAttribution: 'defaultwhatever.com'},
    { name: 'Jennifer', nickNames: ['Yogi', 'Jenny', 'Midas'], imgSrc: 'img/luggage-cat.jpg', imgAttribution: 'defaultwhatever.com'},
    { name: 'Logan', nickNames: ['Luigi', 'Lombard', 'Lolo'], imgSrc: 'img/hat-cat.jpg', imgAttribution: 'defaultwhatever.com'},
    { name: 'Grover', nickNames: ['Gro', 'Gandalf', 'Goober'], imgSrc: 'img/box-cat.jpg',imgAttribution: 'defaultwhatever.com' },
    { name: 'Licky', nickNames: ['Likelike', 'Linda', 'Lefty'], imgSrc: 'img/luggage-cat.jpg', imgAttribution: 'defaultwhatever.com'},
    { name: 'Mexico', nickNames: ['Pasta', 'Pumba', 'Momo'], imgSrc: 'img/hat-cat.jpg', imgAttribution: 'defaultwhatever.com' }
];


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

    this.catList = ko.observableArray();

    initialCats.forEach(function (catObj) {
        self.catList.push(new Cat(catObj));
    });

    this.currentCat = ko.observable( this.catList()[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount( self.currentCat().clickCount() + 1);
    };

    this.displayCat = function (index) {
        console.log(index);
        self.currentCat( self.catList()[index] );
    }
};

ko.applyBindings(new ViewModel());

