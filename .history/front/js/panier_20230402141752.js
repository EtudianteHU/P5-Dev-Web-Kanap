// 1ère étape : récupérer le contenu du panier => getItem l89
// l 92 2ème étape => convertir la chaine de caractère en json -JSON.parse
// 3ème étape => faire un querySelector pour récupérer le conteneur dans lequel on va mettre les produits (.cart__items)
// utiliser un forEach sur ce tableau du panier, afin les différents produits du panier.  => comme sur la page d'accuiel, innerHTML (s'inspirer des lignes 13 à 28 du fifchier index.js)
// 5eme étape : faire la somme des prix => quantité * prix pour chaque produit (le prix est récupéré dans le json => attribut "price")

const panierInString = localStorage.getItem('panier')
const panierObject = JSON.parse(panierInString)
console.log(panierObject)

const contenuItem = document.querySelector('.cart__items')

products.forEach((panier, index) => {
  console.log('itération n°' + index)
  console.log('on fait unu tour de boucle')
  console.log('notre variable contient les données', panier)
  console.log('le prix du produit est', panier.price)
  console.log('le nom du produit est', panier.name)
  contenuItem.innerHTML += ` <article class="cart__item" data-id="${panier._id}" data-color="${panier.colors}">
    <div class="cart__item__img">
      <img src="${panier.imageUrl}" alt="${panier.altTxt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${panier.name}</h2>
        <p>${panier.colors}</p>
        <p>${panier.price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${panier.price}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article> `
})
const totalQuantity = 0
const totalPrice = 0
panier.forEach((function (panier) {
  totalQuantity = totalQuantity + panier.quantity;
  totalPrice = panier.quantity * panier.price
})
const totalQuantity = document.querySelector('#totalQuantity')
console log(totalQuantity)
totalQuantity.innerHTML = totalQuantity + panier.quantity
const totalPrice = document.querySelector('#totalPrice')
console log(totalPrice)
totalPrice.innerHTML = totalPrice
