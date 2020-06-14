let unOrderedList = document.querySelector('.collection');
let childNodes = unOrderedList.childNodes;
let childElements = unOrderedList.children;

let childArrayElements = Array.from(childElements);
childArrayElements.forEach(function (element) {
  console.log(element.firstChild);
  console.log(element.firstElementChild);
  console.log(element.firstChild.nextSibling);
  console.log(element.firstElementChild.nextElementSibling);

});



console.log(unOrderedList);
console.log(childNodes);
console.log(childElements);
console.log(childNodes[3].nodeType);
console.log(childNodes[3].nodeName);
console.log(childNodes[3].nodeValue);
console.log(childNodes[3].ELEMENT_NODE);
console.log(unOrderedList.firstChild);
console.log(unOrderedList.firstElementChild);
console.log(unOrderedList.attributes);
console.log(unOrderedList.lastChild);
console.log(unOrderedList.lastElementChild);
console.log(unOrderedList.childElementCount);

for (let node of childNodes) {
  console.log(node.nodeName);
}

