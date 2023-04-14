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

products.forEach((product) => {
    container.innerHTML += `<a href="./product.html?id=42">
    <article>
      <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
      <h3 class="productName">Kanap name1</h3>
      <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
    </article>
  </a>`
})