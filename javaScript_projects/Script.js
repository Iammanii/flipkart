var btnCart=document.querySelector('#cart-icon')
var btn =document.querySelector('.cart')
var btnClose=document.querySelector('#cart-close')
var addCartitem =document.querySelector('.add-cart')
var countCart=document.querySelectorAll('.cart-count')
var cartQuantity=document.querySelectorAll('.cart-quantity')



btnCart.addEventListener('click',()=>{
    btn.classList.add('cart-active');
});
btnClose.addEventListener('click',()=>{
    btn.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadfood());

function loadfood(){
    loadContant();
}
function loadContant(){
 //remove the food item for cart
 let btnRemove =document.querySelectorAll('.cart-remove')
  
  btnRemove.forEach((btn) => {
    btn.addEventListener('click',removeItem); 
  }); 
  //prodec item chang event
  let qtyElements =document.querySelectorAll('.cart-quantity')
  qtyElements.forEach((input) => {
    input.addEventListener('change',ChangeQty); 
  }); 
  

  let cartBtn =document.querySelectorAll('.add-cart')
  cartBtn.forEach((btn) => {
    btn.addEventListener('click',addcart); 
  }); 
}
 //removeItem
function removeItem(){
    if(confirm('Are you Sure to remove')){
        this.parentElement.remove();
    }
    
} 
function  ChangeQty(params) {
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
}
//add cart item
function addcart()
{
    if(confirm('your product added'))
    {
        btn.classList.add('cart-active');
        let food =this.parentElement;
        let title=food.querySelector('.food-title').
        innerHTML;
        let price=food.querySelector('.food-price').
        innerHTML;
        let image=food.querySelector('.food-img').src;
        //console.log(fodtitle,price,image);
        let cartElement=createcartprduct(title,price,image);
        let element=document.createElement('div');
        element.innerHTML=cartElement;
        let basket =document.querySelector('.cart-content')
        basket.append(element);
    } 
     btn.classList.add('cart-active');
    let food =this.parentElement;
    let title=food.querySelector('.food-title').
    innerHTML;
    let price=food.querySelector('.food-price').
    innerHTML;
    let image=food.querySelector('.food-img').src;
    //console.log(fodtitle,price,image);
    let cartElement=createcartprduct(title,price,image);
    let element=document.createElement('div');
    element.innerHTML=cartElement;
    let basket =document.querySelector('.cart-content')
    basket.append(element); 
 }
function createcartprduct(title,price,image)
{
  return`
     <div class="cart-box">
             <img src="${image}" class="cart-img">
            <div class="detaile-box">
                 <div class="card-food-title">${title}</div>
                    <div class="price-box">
                        <div class="card-price">${price}</div>
                        <div class="card-amt">rs.72</div>
                    </div>
                     <input type="number" value="1" class="cart-quantity">
            </div>
         <ion-icon name="trash" class="cart-remove"></ion-icon>
    </div>
  `
} 
//product item add event

function additem() {
    addCartitem.addEventListener('click',()=>{
        addd.classList.add('cart-active');
    });
}
 
 addCartitem.addEventListener('click',() =>{
    btn.classList.add('cart-active');
    if(confirm('your product will be added'))
    {
        let cartBox =document.querySelector('.cart-content')
        cartBox.forEach((addbox)=>{
            addbox.classList.add('cart-box')
        });
    
    }
}); document.addEventListener('DOMContentLoaded', () => {
    // Animation for progress bars
    const progressBars = document.querySelectorAll('.progress-bar');

    window.addEventListener('scroll', () => {
        progressBars.forEach(bar => {
            const value = bar.getAttribute('data-percent');
            const position = bar.getBoundingClientRect().top;
            if (position < window.innerHeight) {
                bar.style.width = value;
            }
        });
    });

    // Smooth scroll for navigation
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
