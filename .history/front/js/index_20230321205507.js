async function getProducts() {
  const data = await fetch('http://localhost:3000/api/products');
  console.log(data)
  const products = await data.json();
  console.log(products);
  return products;
  // logs [{ name: 'Joker'}, { name: 'Batman' }]
}
const products = await getProducts();

const container = document.querySelector('.items') // document.querySelector('#items')

products.forEach((product, index) => {
  console.log('itération n°' + index)
  console.log('on fait unu tour de boucle')
  console.log('notre variable contient les données', product)
  console.log('le prix du produit est', product.price)
  console.log('le nom du produit est', product.name)
  container.innerHTML += `<a href="./product.html?id=${product._id}">
    <article>
      <img src="${product.imageUrl}" alt="${product.altTxt}">
      <h3 class="productName">${product.name}</h3>
      <p class="productDescription">${product.description}</p>
    </article>

  </a>`
})

const products = [{
  _id: 107fb5b75607497b96722bda5b504926,
  colors: [
    "Blue",
    "White",
    "Black"]
},
{
  _id: 415b7cacb65d43b2b5c1ff70f3393ad1,
  colors: [
    "Yellow",
    "Black"
    "Red"]
},
{
  _id: 055743915a544fde83cfdfc904935ee7,
  colors: [
    "Yellow",
    "Black"
  "Red"]
},

localStorage.setItem('links', JSON.stringify(products));