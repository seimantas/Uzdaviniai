alertName = (firsrtName) => {
  alert(firsrtName);
};

alertName("Eimantas");

randomNumber = () => {
  return console.log(Math.floor(Math.random() * 5) + 1);
};
randomNumber();

const getFirstNameAndSurnameLength = (firstName, surname) => {
  return firstName.length + surname.length;
};

console.log(getFirstNameAndSurnameLength("Eimantas", "sipas"));
