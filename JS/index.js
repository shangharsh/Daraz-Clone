const slider = document.querySelector('.sliderContainer');
const slides = slider.querySelectorAll('.slides');
 
// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;
 
// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides[activeSlide].classList.remove('active');
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
}, 2000);

const url = 'https://dummyjson.com/products';

async function fetchData(){
  try{
  const response = await fetch(url);
  const data = await response.json();

  //All Products
  const products = data.products;
  console.log(products);

  //All Categories
  const categories = products.map((product, index) => {
    return product.category;
  }
  );
  //Unique Categories
  const uniqueCat = [... new Set(categories)];
  
  //Categories
  let catContainer = document.getElementById('categories');
  let categoryUl = document.createElement('ul');
  categoryUl.className = 'list-group';
  uniqueCat.forEach((category) =>{
    let li = document.createElement('li');
    li.className = 'list-group-item border-0  d-flex align-items-center';
    li.innerHTML = `<i class="fa-solid fa-vest-patches me-2 bg-body-secondary ps-2 pt-2 pe-2 pb-2 rounded-circle"></i> <p class="m-0">${category.charAt(0).toUpperCase() + category.slice(1)}</p>`;
    categoryUl.appendChild(li);
  });
  catContainer.appendChild(categoryUl);
  console.log(uniqueCat)

  //Products or Just For You
  let allProducts = document.getElementById('products');
  let productUl = document.createElement('ul');
  productUl.className = 'allProduct m-0 p-0 d-flex flex-wrap justify-content-between align-items-center row-gap-3';


  products.forEach((product)=>{
    let a = document.createElement('a');
    a.href = '#';
    a.className = 'productList text-decoration-none bg-white text-dark d-flex flex-column';
    let li = document.createElement('li');
    li.className = 'w-100 h-100';
    li.innerHTML = `
    <div class="w-100 h-50">
    <img class="w-100 h-100 ps-2 pe-2 pt-2 pb-2 productImage" src="${product.images[0]}" alt="Product Image">
    </div>
    <p class="productTitle m-0 mt-2 fs-6 w-100 ps-1">${product.title.length>12?product.title.slice(0,14) + '...':product.title}</p>
    <p class="productPrice m-0 mt-1 ps-1">$${(product.price - (product.price*product.discountPercentage)/100).toFixed(2)}</p>
    <span class="d-flex ps-1 oldPrice"><p class="text-secondary text-decoration-line-through m-0 pe-2">${product.price}</p><p class="m-0">-${product.discountPercentage}%</p></span>
    <div class="star ps-1">
        <span class="rating">&star;(${product.rating})</span>
    </div>`;
    a.appendChild(li);
    productUl.appendChild(a);
  })
  allProducts.appendChild(productUl);




} catch(error){
  console.log('Error While Fetching The Products', error);
}}

fetchData();