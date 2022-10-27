// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  let subTotal = Number(price.innerHTML) * Number(quantity.value);
  product.querySelector('.subtotal span').innerHTML = subTotal.toFixed(2);
  
  return subTotal
}

function calculateAll() {
  let total = 0;
  const products = document.getElementsByClassName('product');
  
  Array.from(products).forEach(product => total += updateSubtotal(product));
  document.querySelector('#total-value span').innerHTML = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
