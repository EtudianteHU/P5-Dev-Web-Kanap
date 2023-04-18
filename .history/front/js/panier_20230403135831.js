// 1ère étape : récupérer le contenu du panier => getItem l89
// l 92 2ème étape => convertir la chaine de caractère en json -JSON.parse
// 3ème étape => faire un querySelector pour récupérer le conteneur dans lequel on va mettre les produits (.cart__items)
// utiliser un forEach sur ce tableau du panier, afin les différents produits du panier.  => comme sur la page d'accuiel, innerHTML (s'inspirer des lignes 13 à 28 du fifchier index.js)
// 5eme étape : faire la somme des prix => quantité * prix pour chaque produit (le prix est récupéré dans le json => attribut "price")

async function getProduct(id) {
  const data = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await data.json();
  return product;
}

const panierInString = localStorage.getItem('panier')
const panierObject = JSON.parse(panierInString)
console.log(panierObject)

const contenuItem = document.querySelector('#cart__items')
console.log('contenu item', contenuItem)
panierObject.forEach(async (panier, index) => {
  const product = await getProduct(panier.id)
  console.log('contenu du product', product)
  console.log('contenu de panier', panier)

  contenuItem.innerHTML += ` <article class="cart__item" data-id="${panier.id}" data-color="${panier.color}">
    <div class="cart__item__img">
      <img src="${product.imageUrl}" alt="${product.altTxt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${product.name}</h2>
        <p>${panier.color}</p>
        <p>${product.price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${panier.quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article> `
})
let totalQuantity = 0
let totalPrice = 0
panierObject.forEach(async(function (panier) {

  const product = await getProduct(panier.id)

  totalQuantity = totalQuantity + panier.quantity; // meme chose:  totalQuantity += product.quantity;  
  totalPrice += panier.quantity * product.price
}))
const totalQuantityPanier = document.querySelector('#totalQuantity')
console.log(totalQuantityPanier)
totalQuantityPanier.innerHTML = totalQuantity
const totalPricePanier = document.querySelector('#totalPrice')
console.log(totalPricePanier)
totalPricePanier.innerHTML = totalPrice
