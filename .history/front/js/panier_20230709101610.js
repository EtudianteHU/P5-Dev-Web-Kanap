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
//Récupérer le contenu du panier
const panierInString = localStorage.getItem('panier')
// Convertir la chaine de caractère en json -JSON.parse
const panierObject = JSON.parse(panierInString)

// récupérer le conteneur dans lequel on va mettre les produits
const contenuItem = document.querySelector('#cart__items')

const totalQuantityPanier = document.querySelector('#totalQuantity')
const totalPricePanier = document.querySelector('#totalPrice')

let totalQuantity = 0
let totalPrice = 0

await Promise.all(panierObject.map(async (panier, index) => {
  const product = await getProduct(panier.id)

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

// on va mettre à jour la quantité  et le prix dans la ligne total
const inputsQuantity = document.querySelectorAll('.itemQuantity')
inputsQuantity.forEach((input) => {
  input.addEventListener('change', (event) => {
    const dom = event.target
    const article = dom.closest('article')
    const id = article.getAttribute('data-id')
    const color = article.getAttribute('data-color')
    const productFound = panierObject.find((panier) => panier.id === id && panier.color === color)

    productFound.quantity = parseInt(event.target.value)
    let quantity = 0
    panierObject.forEach(product => { quantity += product.quantity })
    totalQuantityPanier.innerHTML = quantity
    localStorage.setItem("panier", JSON.stringify(panierObject))



    let price = 0
    panierObject.forEach(async (panier) => {
      const product = await getProduct(panier.id)
      price += panier.quantity * product.price
      totalPricePanier.innerHTML = price
    })








    // on va mettre à jour la quantité dans le localStorage (objet panierObject => rechercher la bonne ligne avec la méthode find (ex: dans la page product), puis un efois que l'on a récupéré le produit, on met à jour le champ "quantité" et on sauvegarde les modification localStorage.setItem)
    // on va mettre à jour la quantité dans la ligne total (mettre à jour la quantité dans  totalQuantityPanier.inerhtml et totalPricePanier)
    // et on va mettre à jour le prix (total et pour le produit)

  })


  totalQuantityPanier.innerHTML = totalQuantity;
  totalPricePanier.innerHTML = totalPrice

  // 1 ajouter un event listner sur l'input de saisie de quantité et sur le lien desuppression

  // faire le add event listener sur le bouton de validation
})

// on  va supprimer le produit 
const deleteLinks = document.querySelectorAll('.deleteItem')

deleteLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const dom = event.target
    const article = dom.closest('article')
    const id = article.getAttribute('data-id')
    const color = article.getAttribute('data-color')


    const filteredProducts = panierObject.filter((panier) => panier.id !== id && panier.color !== color)

    localStorage.setItem("panier", JSON.stringify(filteredProducts))

    const section = article.parentElement

    section.removeChild(article)
    // calcul quantité totale
    let quantity = 0
    panierObject.forEach(product => { quantity += product.quantity })
    totalQuantityPanier.innerHTML = quantity


    // calcul prix
    let price = 0
    panierObject.forEach(async (panier) => {
      const product = await getProduct(panier.id)
      price += panier.quantity * product.price
      totalPricePanier.innerHTML = price
    })


    // on va supprimer le produit du localqtorage
    // puis on va mettre à jour le prix et la quantité totale
    // et on supprimant la ligne du panier
  })
})

const orderbutton = document.querySelector("#order")
orderbutton.addEventListener('click', (e) => submitForm(e))
// Création de l’objet du nouvelle contact.
function makeRequestBody() {
  const form = document.querySelector(".cart__order__form")
  const firstName = form.elements.firstName.value
  const lastName = form.elements.lastName.value
  const address = form.elements.address.value
  const city = form.elements.city.value
  const email = form.elements.email.value
  const body = {
    contact: {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      email: email
    },
    products: getIdsFromCache()
  }
  return body
}
// on récupére l'identifiant de chaque produit
function getIdsFromCache() {
  const numberOfProducts = panierObject.length
  const ids = []
  for (let i = 0; i < numberOfProducts; i++) {

    ids.push(panierObject[i].id) // on récupère l'identifiant de chaque produit
  }
  return ids
}
// on redirige vers une autre page
function submitForm(e) {
  e.preventDefault()
  if (cart__items.length === 0) alert('Please select items to buy')
  const body = makeRequestBody()
  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json().then((data) => {
      window.location = `confirmation.html?orderId=${data.orderId}`
    }))
    .catch((data) => console.log(data))
}
function isPrenomInvalid() {
  const firstName = document.querySelector("firstName")
  const regex = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/
  if (regex.test(firstName) === false) {
    alert('Please enter valid prenom')
    return true
  }
  return false
}
function isNomInvalid() {
  const lastName = document.querySelector("lastName")
  const regex = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/
  if (regex.test(lastName) === false) {
    alert('Please enter valid Nom')
    return true
  }
  return false
}
// validation de l'email
function isEmailInvalid() {
  const email = document.querySelector("email")
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  if (regex.test(email) === false) {
    alert('Please enter valid email')
    return true
  }
  return false
}
// validation de l'address
function isAddressInvalid() {
  const address = document.querySelector("address")
  const regex = /^[a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\'\-]*$/
  if (regex.test(address) === false) {
    alert('Please enter valid address')
    return true
  }
  return false
}
function isVilleInvalid() {
  const city = document.querySelector("city")
  const regex = /^([0-9]{5}).[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/
  if (regex.test(city) === false) {
    alert('Please enter valid ville')
    return true
  }
  return false
}
// validation de données
function isFormInvalid() {
  const form = document.querySelector(".cart__order__form")
  const inputs = form.querySelectorAll("input")
  inputs.forEach(
    (input) => {
      if (input.value === "") {
        alert('Please fill all the fields')
        return true
      }
      return false
    })
}
