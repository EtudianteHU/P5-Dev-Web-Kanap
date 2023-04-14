


const url = new URL(window.location);
console.log(url)
const params = new URLSearchParams(url.search);
console.log(params.get('id'))
console.log(params.get('autreIdentifiant'))
const id = params.get('id')


async function getProduct() {
    const data = await fetch(`http://localhost:3000/api/products/${id}`);
    console.log(data)
    const product = await data.json();
    console.log(product);
    return product;
    // logs [{ name: 'Joker'}, { name: 'Batman' }]
}

const product = await getProduct()
console.log(product)

const priceContainer = document.querySelector('#price')
console.log(priceContainer)
priceContainer.innerHTML = product.price
const imageContainer = document.querySelector('.item__img')
console.log(imageContainer)
imageContainer.innerHTML = product.image < img src = "../images/logo.png" alt = "Photographie d'un canapé" >