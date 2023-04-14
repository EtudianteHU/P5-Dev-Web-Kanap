


const url = new URL(window.location);
console.log(url)
const params = new URLSearchParams(url.search);
console.log(params.get('id'))