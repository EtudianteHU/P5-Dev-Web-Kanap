async function getProducts() {
    const data = await fetch('http://localhost:3000/api/products');
    console.log(data)
    const products = await data.json();
    console.log(products);
    return products;
    // logs [{ name: 'Joker'}, { name: 'Batman' }]
}
getProducts();