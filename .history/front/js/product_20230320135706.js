


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

const product = await getProduct() /* on récupére un objet {
    "colors": [
        "Pink",
        "White"
    ],
    "_id": "a557292fe5814ea2b15c6ef4bd73ed83",
    "name": "Kanap Autonoé",
    "price": 1499,
    "imageUrl": "http://localhost:3000/images/kanap04.jpeg",
    "description": "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.",
    "altTxt": "Photo d'un canapé rose, une à deux place"
}*/
// color, _id, price, description sont des propriétés
// ce qui vient après les ":" correspond aux valeurs de chaque propriété
// pour récupérer une valeur d'une propriété, on utilise la sytnaxe suivante :
// nomDeMaVariable.nomDeMaPropriete
// Par ex: pour récupérer le prix, on fait product.price => la valeur retournée sera 1499
console.log('1er console log', product.colors)

const nameContainer = document.querySelector('#title')
console.log(nameContainer)
nameContainer.innerHTML = product.name
const priceContainer = document.querySelector('#price')
console.log(priceContainer)
priceContainer.innerHTML = product.price
const descriptionContainer = document.querySelector('#description')
console.log(descriptionContainer)
descriptionContainer.innerHTML = product.description
const optionContainer = document.querySelector('#colors')


// product.colors permet de récupérer la liste des couleurs (c'est un tableau)
// pour parcourir notre tableau, on va utiliser le forEach. Le paramètre de fonction forEach aura une valeur différente à chaque itération (une itération c'est un tour de boucle)
// dans notre exemple, element sera d'abord égal à "Pink", puis lors de la 2nde itération, il sera égal à White
product.colors.forEach((element) => {
    // le + permet de faire une concaténation, c'est à dire de conserver les données que l'on a ajoutée lors des précédentes itérations. Si on ne le met pas, alors notre liste déroulante que la dernière couleur et pas l'ensemble des couelurs
    console.log('couleur courante : ', element)
    optionContainer.innerHTML = ` <option value="${element}">${element}</option>`
})