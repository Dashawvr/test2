// let h2 = document.createElement('h2');
// h2.innerText = 'hollo world!';
// console.log(h2);
// let simple = document.getElementById('point');
// simple.appendChild(h2);
// console.log(h2);
//
//
// let target = document.getElementsByClassName('simple');
// for (const simple of target) {
//     let node = h2.cloneNode(true);
//     simple.appendChild(node);
// }


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
 let container = document.getElementById('container');
// for (const user of users) {
//    let divElement = document.createElement('div');
//    divElement.innerText = `${user.name} - ${user.age} -  ${user.status}`;
//    container.appendChild(divElement);
// }

for (const user of users) {
    let div = document.createElement('div');
    div.classList.add('user');

    for (const field in user) {
        let innerdiv = document.createElement('div');
        innerdiv.innerText = `${user[field]}`;
        div.appendChild(innerdiv);
    }
    container.appendChild(div);
}








