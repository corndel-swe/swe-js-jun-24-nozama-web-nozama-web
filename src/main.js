document.addEventListener('DOMContentLoaded', async function () {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  const data = await res.json()
  console.log(data)
})
