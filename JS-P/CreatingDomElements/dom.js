const header = document.createElement("h1");
const unorderedList = document.createElement("ul");
const listItemOne = document.createElement("li");
const listItemTwo = document.createElement("li");
const listItemThree = document.createElement("li");

header.textContent = "Eimantas";
header.style.color = "red";
document.body.append(header);

document.body.append(unorderedList);

listItemOne.textContent = "VW";
unorderedList.appendChield(listItemOne);

listItemTwo.textContent = "BMW";
document.ul.appendChield(listItemTwo);


listItemThree.textContent = "AUDI";
document.ul.appendChield(listItemThree);


