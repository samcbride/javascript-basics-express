const createPerson = (name, age) => {
  const person = {
    name,
    age,
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const ages = [];
  for (i = 0; i < people.length; i++) {
    if (people[i].age) {
      ages.push(people[i].age);
    }
  }
  return ages;
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(honda => honda.manufacturer === 'Honda');
};

const averageAge = people => {
  return people.reduce((total, currentUser) => total + currentUser.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  const talkingPerson = {
    name,
    age,
    introduce: person => {
      return `Hi ${person}, my name is ${name} and I am ${age}!`;
    },
  };
  return talkingPerson;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
