// Object property shorthand

const name = 'Yvan';
const userAge = 37;

const user = {
    name,
    age: userAge,
    location: 'Chimbote'
}

console.log(user);

// Object destructering
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salesPrice: undefined,
    rating: 4.2
}

// const label = product.label;
// const stock = product.stock;

// const {label: productLabel, stock, rating = 5} = product;
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product);
