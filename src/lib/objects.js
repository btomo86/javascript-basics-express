const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const result = [];
  for (let i = 0; i < people.length; i++) {
    result.push(people[i].age);
  }
  return result;
};

const findByName = (name, people) => {
  const missingPerson = people.filter(a => {
    return a.name === name;
  });
  return missingPerson[0];
};

const findHondas = cars => {
  return cars.filter(a => {
    return a.manufacturer === "Honda";
  });
};

const averageAge = people => {
  const numOfPeople = people.length;
  const arrayOfAges = people.map(person => person.age);
  const sumOfAges = arrayOfAges.reduce(
    (total, currentValue) => total + currentValue
  );
  const averageOfAges = sumOfAges / numOfPeople;
  return averageOfAges;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: stranger => {
      return `Hi ${stranger}, my name is ${name} and I am ${age}!`;
    }
  };
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
  createTalkingPerson
};
