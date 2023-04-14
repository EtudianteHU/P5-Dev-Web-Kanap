// 1ère étape : récupérer le contenu du panier => getItem l89
// l 92 2ème étape => convertir la chaine de caractère en json -JSON.parse
// 3ème étape => faire un querySelector pour récupérer le conteneur dans lequel on va mettre les produits (.cart__items)
// utiliser un forEach sur ce tableau du panier, afin les différents produits du panier.  => comme sur la page d'accuiel, innerHTML (s'inspirer des lignes 13 à 28 du fifchier index.js)
// 5eme étape : faire la somme des prix => quantité * prix pour chaque produit (le prix est récupéré dans le json => attribut "price")

const panierInString = localStorage.getItem('panier')
const panierObject = JSON.parse(panierInString)
console.log(panierObject)

const contenuItem = document.querySelector('.cart__items')

products.forEach((product, index) => {
    console.log('itération n°' + index)
    console.log('on fait unu tour de boucle')
    console.log('notre variable contient les données', product)
    console.log('le prix du produit est', product.price)
    console.log('le nom du produit est', product.name)
    container.innerHTML += `
  
    `
})

products.forEach