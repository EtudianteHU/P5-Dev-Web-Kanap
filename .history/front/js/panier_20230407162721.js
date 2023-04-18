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

const totalQuantityPanier = document.querySelector('#totalQuantity')
const totalPricePanier = document.querySelector('#totalPrice')

let totalQuantity = 0
let totalPrice = 0

await Promise.all(panierObject.map(async (panier, index) => {
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



  totalQuantity = totalQuantity + panier.quantity; // meme chose:  totalQuantity += product.quantity;  
  totalPrice += panier.quantity * product.price

}))


const inputsQuantity = document.querySelectorAll('.itemQuantity')
inputsQuantity.forEach((input) => {
  input.addEventListener('change', (event) => {
    const productTotal = panierObject.find((product) => product.id === id)
    totalQuantityPanier.innerHTML = productTotal

    localStorage.setItem(('panier'))




    productTotal.quantity = productTotal.quantity + quantityNumber


    // on va mettre à jour la quantité dans le localStorage (objet panierObject => rechercher la bonne ligne avec la méthode find (ex: dans la page product), puis un efois que l'on a récupéré le produit, on met à jour le champ "quantité" et on sauvegarde les modification localStorage.setItem)
    // on va mettre à jour la quantité dans la ligne total (mettre à jour la quantité dans  totalQuantityPanier.inerhtml et totalPricePanier)
    // et on va mettre à jour le prix (total et pour le produit)
    console.log(event)
  })
})



const deleteLinks = document.querySelectorAll('.cart__item__content__settings__delete')
deleteLinks.forEach((link) => {
  link.addEventListener('click', (event) => {

    // on va supprimer le produit du localqtorage
    // puis on va mettre à jour le prix et la quantité totale
    // et on supprimant la ligne du panier
    console.log(event)
  })
})

totalQuantityPanier.innerHTML = totalQuantity
totalPricePanier.innerHTML = totalPrice

// 1 ajouter un event listner sur l'input de saisie de quantité et sur le lien desuppression

// faire le add event listener sur le bouton de validationœ