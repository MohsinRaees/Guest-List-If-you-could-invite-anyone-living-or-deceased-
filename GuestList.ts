//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.//

class Person {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  const guestList: Person[] = [
    new Person("mohsin"),
    new Person("jamal"),
    new Person("asif"),
  ];
  
  function sendInvitation(person: Person) {
  {   console.log(`Dear ${person.name},\nYou are invited to dinner!`);
    }
  }
  
  guestList.forEach(sendInvitation);