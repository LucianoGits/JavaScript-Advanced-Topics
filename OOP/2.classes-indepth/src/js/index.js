//Accessing the DOM
const products = document.querySelector('.products');
const nameInp = document.querySelector('input[name=name]');
const costInp = document.querySelector('input[name=cost]');
const acceptingOrdersInp = document.querySelector(
  'select[name=acceptingOrders]'
);
const quantityInp = document.querySelector('input[name=quantity]');
const descriptionInp = document.querySelector('textarea[name=description]');
const addBtn = document.querySelector('#addBtn');

//Product class
class Product {
  //A CONSTRUCTOR IS A SPECIAL METHOD OF A CLASS
  constructor(name, cost, acceptingOrders, quantity, description) {
    this.name = name;
    this.cost = cost;
    this.acceptingOrders = acceptingOrders;
    this.quantity = quantity;
    this.description = description;
  }

  //Methods
  stockCost() {
    return this.cost * this.quantity;
  }
  getDesc() {
    return this.description;
  }

  //render Method(what we want to display on the screen)
  render() {
    // creating div and adding class
    const productCard = document.createElement('div');
    productCard.setAttribute('class', 'product');

    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'name');

    const costDiv = document.createElement('div');
    costDiv.setAttribute('class', 'cost');

    const quantityDiv = document.createElement('div');
    quantityDiv.setAttribute('class', 'quantity');

    const stockCost = document.createElement('div');
    stockCost.setAttribute('class', 'stock-cost');

    const stockBtn = document.createElement('button');
    stockBtn.innerText = 'Stock Cost';
    //event listener for button to add
    stockBtn.addEventListener('click', e => {
      e.preventDefault();
      let fetchCost = this.stockCost();
      alert(`Total Cost: $${fetchCost}`);
    });
    stockCost.append(stockBtn);

    const viewDescDiv = document.createElement('div');
    viewDescDiv.setAttribute('class', 'view-description');

    const viewDescBtn = document.createElement('button');
    viewDescBtn.innerText = 'Description';
    viewDescBtn.addEventListener('click', e => {
      e.preventDefault();
      let fetchDesc = this.getDesc();
      alert(`Description: ${fetchDesc}`);
    });
    viewDescDiv.append(viewDescBtn);

    const buyBtnDiv = document.createElement('div');
    buyBtnDiv.setAttribute('class', 'buy-btn');

    const buyBtn = document.createElement('button');
    buyBtn.innerText = 'Buy';
    buyBtn.addEventListener('click', e => {
      e.preventDefault();
      alert(`Buying ${this.name}`);
    });
    if (this.quantity > 0 && this.acceptingOrders === 'No') {
      buyBtn.setAttribute('disabled', true);
    }
    buyBtnDiv.append(buyBtn);

    nameDiv.innerText = this.name;
    costDiv.innerText = `$${this.cost}`;
    quantityDiv.innerText = `${this.quantity} unit(s)`;
    productCard.append(
      nameDiv,
      costDiv,
      quantityDiv,
      stockCost,
      viewDescDiv,
      buyBtnDiv
    );

    return productCard;
  }
}

//getting all details from form when they have been filled out. if they are empty the form will be taken as false
const getFormContents = () => {
  if (
    nameInp.value !== '' &&
    costInp.value > 0 &&
    quantityInp.value > 0 &&
    descriptionInp.value !== ''
  ) {
    return [
      nameInp.value,
      costInp.value,
      acceptingOrdersInp.value,
      quantityInp.value,
      descriptionInp.value,
    ];
  } else {
    return false;
  }
};

//clearing form after submission
const clearForm = () => {
  nameInp.value = descriptionInp.value = '';
  acceptingOrdersInp.value = 'Yes';
  costInp.value = quantityInp.value = 0;
};

//adding content when adding the product
addBtn.addEventListener('click', function () {
  const getProduct = getFormContents();
  if (getProduct) {
    const createProduct = new Product(...getProduct);
    products.append(createProduct.render());
  }
  clearForm();
});
