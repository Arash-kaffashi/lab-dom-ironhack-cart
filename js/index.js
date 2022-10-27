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
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const [name, price] = document.querySelectorAll('.create-product input');
  const tr = document.createElement('tr');
  tr.classList.add('product');
  tr.innerHTML = `
    <td class="name">
      <span>${name.value}</span>
    </td>
    <td class="price">$<span>${Number(price.value).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
  price.value = name.value = '';
  document.querySelector('tbody').appendChild(tr);
  tr.querySelector('.btn-remove').addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName("btn-remove");
  Array.from(removeBtns).forEach(btn => btn.addEventListener('click', removeProduct));

  document.getElementById("create").addEventListener('click', createProduct);
});
