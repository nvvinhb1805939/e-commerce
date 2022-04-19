/**
 * TOGGLE CART LIST
 * */
const cartBtnElement = document.querySelector('.header__cart-btn');
const cartWrapperElement = document.querySelector('.header__cart-wrapper');
const handleCartBtnClick = e => {
  e.stopPropagation();
  cartWrapperElement.classList.toggle('show');
};
const handleCartWrapperClick = e => {
  e.stopPropagation();
};
cartBtnElement.addEventListener('click', handleCartBtnClick);
window.addEventListener('click', () => {
  if (cartWrapperElement.classList.contains('show')) cartWrapperElement.classList.remove('show');
});
cartWrapperElement.addEventListener('click', handleCartWrapperClick);
