


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

const imageContainer = document.querySelector('.item__img')
console.log(imageContainer)
imageContainer.innerHTML = `<img src="../images" alt="Photographie d'un canapé">`
const nomContainer = document.querySelector('#title')
console.log(nomContainer)
nomContainer.innerHTML = product.title
const priceContainer = document.querySelector('#price')
console.log(priceContainer)
priceContainer.innerHTML = product.price
const descriptionContainer = document.querySelector('#description')
console.log(descriptionContainer)
descriptionContainer.innerHTML = product.description
const optionContainer = document.querySelector('#colors')
console.log(optionContainer)
optionContainer.innerHTML = product.option
optionContainer.innerHTML = ` < option value="vert" > vert</option >
    <option value="blanc">blanc</option>`

