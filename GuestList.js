//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.//
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var guestList = [
    new Person("mohsin"),
    new Person("jamal"),
    new Person("asif"),
];
function sendInvitation(person) {
    {
        console.log("Dear ".concat(person.name, ",\nYou are invited to dinner!"));
    }
}
guestList.forEach(sendInvitation);
