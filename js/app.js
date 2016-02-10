
var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Ben');
    this.nickNames = ko.observableArray(['B-dawg', 'BamBam', 'Loogaloo', 'Boozie', 'Benniferous']);
    this.imgSrc = ko.observable('./img/22252709_010df3379e_z.jpg');
    this.imgAttribution = ko.observable('www.websitelkjasdf.com');

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

    this.incrementCounter = function () {
        this.clickCount( this.clickCount() + 1);
    };

    this.currentCat = ko.observable( new Cat() );
};

ko.applyBindings(new ViewModel());

