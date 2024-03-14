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
  // let catContainer = document.getElementsByClassName('categories')[0];
  let catContainer = document.getElementById('categories');
  const uniqueCat = [... new Set(categories)];
  let ul = document.createElement('ul');
  ul.className = 'list-group';
  uniqueCat.forEach((category) =>{
    let li = document.createElement('li');
    li.className = 'list-group-item border-0  d-flex align-items-center';
    li.innerHTML = `<i class="fa-solid fa-vest-patches me-2 bg-body-secondary ps-2 pt-2 pe-2 pb-2 rounded-circle"></i> <p class="m-0">${category.charAt(0).toUpperCase() + category.slice(1)}</p>`;
    ul.appendChild(li);
  });
  catContainer.appendChild(ul);

  console.log(uniqueCat)

} catch(error){
  console.log('Error While Fetching The Products', error);
}}

fetchData();