//const ul = document.getElementById(`categories`);
//console.log(ul.children);
//console.log(`Number of ` + ul.getAttribute(`id`) + ":\t"+ ul.children.length);

const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Amount of elements:${item.lastElementChild.children.length}`);
});


