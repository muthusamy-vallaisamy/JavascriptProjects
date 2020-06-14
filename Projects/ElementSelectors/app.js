var list_items = document.querySelectorAll('.container li');
list_items.forEach(function (item) {
  let innerHtmlValue = item.innerHTML;
  item.innerHTML = `<h5>${innerHtmlValue}</h5>`
})



const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
  li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}
