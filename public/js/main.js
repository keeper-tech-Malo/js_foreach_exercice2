// EXERCICE 1

// let tab = ["zak", "goku", "naruto", "luffy", "ichigo"];

// tab.forEach( i => {
//     console.log(i);
// });

// EXERCICE 2

// let coding16 = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"];

// coding16.forEach(i => {
//     console.log(bonjour, ${i} , ${coding16.length});
// });
let fruits = ['bananes', 'pommes', 'cerises', 'oranges', 'tomates' ];

fruits.forEach(element => {
    console.log(`fruit: ${element}`); 
});

console.log('----');



let coding16 = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]; 

coding16.forEach((element, i ) => {
    //console.log(`element no: ${coding16.indexOf(element)} Bonjour ${element} `); 
    console.log(`numero => ${i} Bonjour ${element}`);
});
