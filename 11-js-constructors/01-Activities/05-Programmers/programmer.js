var Programmer = function (name, title, age, lang) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.lang = lang
    this.displayInfo = function () {
        var arrayOfKeys = Object.keys(this);
        for (i = 0; i < arrayOfKeys.length - 1; i++) {
            console.log(arrayOfKeys[i] + ": " + this[arrayOfKeys[i]]);
        }
    }
}

var user1 = new Programmer('Claudio Saillant', 'Senior Developer', 21, 'Python')
user1.displayInfo()