/* Snack 1*/

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // Double Cheese Burger
// console.log(secondBurger.name); // Double Cheese Burger

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Solo uno.


/* Snack 2*/
// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // Salad
// console.log(secondBurger.ingredients[0]); // Salad
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 3.

/* Snack 3*/
// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };
// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 9.


/* Snack 4*/
// const chef = {
//     name: "Chef Hyur",
//     age: 29,
//     makeBurger: (num = 1) => {
//         console.log(`Ecco ${num} hamburger per te!`);
//     },
// }
// const secondChef = {...chef};
// console.log(chef);
// console.log(secondChef);

// const restaurant = {
//     name: "Hyur's Burgers",
//     address: {
//         street: 'Main Street',
//         number: 123,
//     },
//     openingDate: new Date(2025, 3, 11),
//     isOpen: false,
// };
// const secondRestaurant = structuredClone(restaurant);
// console.log(restaurant);
// console.log(secondRestaurant);

//Qual è il metodo migliore per clonare l'oggetto chef, e perché? Qual è il metodo migliore per clonare l'oggetto ristorante, e perché ?
// il metodo migliore per clonare l'oggetto chef è lo spread operator perchè ci permette di copiare le funzioni.
// il metodo migliore per clonare l'oggetto restaurant è structuredClone perchè ci permette di copiare anche le date e gli oggetti annidati.


/* Snack 5*/
// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };

// const newRestaurant = { ...hamburger.maker.restaurant };
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = { ...hamburger };
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";

// console.log(hamburger.maker.name); // Chef Hyur
// console.log(secondBurger.maker.name); // Chef Hyur
// console.log(hamburger.maker.restaurant.name); //Hyur's II
// console.log(secondBurger.maker.restaurant.name); // Hyur's II

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//Sono 5 gli oggetti creati in memoria.


/* Snack 6*/
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

const secondChef = {...chef,
    restaurant: {...chef.restaurant,
        address: {...chef.restaurant.address}
    }
};
console.log(chef);
console.log(secondChef);

//Qual è il metodo migliore per clonare l'oggetto chef, e perché?
// Il metodo migliore per clonare l'oggetto chef è lo spread operator, perché ci permette di copiare le funzioni e gli oggetti annidati.


/* Snack Bonus */

// Clonazione profonda dell'oggetto chef(deep copy)
cloneObj(chef);

function cloneObj(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }

    if (Array.isArray(obj)) {
        return obj.map(item => cloneObj(item)); 
    }

    const clonedObj = {};
    for (const key in obj) {
        const value = obj[key];
        if(typeof value !== 'object'){
            clonedObj[key] = value;
        }else{
            cloneObj(value);
        }
    }
    console.log(clonedObj);
    return clonedObj;
}


