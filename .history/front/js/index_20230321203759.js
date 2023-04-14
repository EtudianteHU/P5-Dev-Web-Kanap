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

const myBlogs = ["https://catalins.tech", "https://exampleblog.com"];
localStorage.setItem('links', JSON.stringify(myBlogs));