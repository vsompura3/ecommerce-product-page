// Navigation
const nav = document.querySelector('.navbar')
const navToggle = document.querySelector('.navbar-menu-toggle')
const backdrop = document.querySelector('.navbar__backdrop')

function openMenu() {
  nav.setAttribute('data-visible', true)
  navToggle.setAttribute('aria-expanded', true)
}

function closeMenu() {
  nav.setAttribute('data-visible', false)
  navToggle.setAttribute('aria-expanded', false)
}
navToggle.addEventListener('click', function () {
  const visibility = nav.getAttribute('data-visible')
  if (visibility === 'false') {
    openMenu()
  } else {
    closeMenu()
  }
})

backdrop.addEventListener('click', function () {
  if (nav.getAttribute('data-visible')) {
    closeMenu()
  }
})

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && nav.getAttribute('data-visible')) {
    closeMenu()
  }
})

// Sliding Carousel
const slides = document.querySelectorAll('.carousel-images img')
const btnPrev = document.querySelector('.carousel-prev')
const btnNext = document.querySelector('.carousel-next')
const thumbnailContainer = document.querySelector('.carousel-thumbnails')
const thumbnailBtns = thumbnailContainer.querySelectorAll(
  '.btn-carousel-thumbnail',
)

let currentSlide = 0
const maxSlide = slides.length

// Show Active thumbnail
function activeThumbnail(slide, tabContainer, tabBtns) {
  tabBtns.forEach(btn => btn.classList.remove('thumbnail-active'))
  tabContainer
    .querySelector(`[data-slide="${slide}"]`)
    .classList.add('thumbnail-active')
}
// On page load first slide is active
activeThumbnail(currentSlide, thumbnailContainer, thumbnailBtns)

// Go to a specific slide
function goToSlide(slider, slidePosition) {
  slider.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - slidePosition) * 100}%)`
  })
}

// When script runs, load the first slide
goToSlide(slides, currentSlide)

// Go to next slide
function goToNext(slider, tabContainer, tabBtns) {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0
  } else {
    currentSlide += 1
  }
  goToSlide(slider, currentSlide)
  activeThumbnail(currentSlide, tabContainer, tabBtns)
}

// Go to previous slide
function goToPrev(slider, tabContainer, tabBtns) {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1
  } else {
    currentSlide -= 1
  }
  goToSlide(slider, currentSlide)
  activeThumbnail(currentSlide, tabContainer, tabBtns)
}

// Event Listeners
btnNext.addEventListener('click', () =>
  goToNext(slides, thumbnailContainer, thumbnailBtns),
)
btnPrev.addEventListener('click', () =>
  goToPrev(slides, thumbnailContainer, thumbnailBtns),
)
window.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft' && modal.classList.contains('hidden'))
    goToPrev(slides, thumbnailContainer, thumbnailBtns)
  if (e.key === 'ArrowRight' && modal.classList.contains('hidden'))
    goToNext(slides, thumbnailContainer, thumbnailBtns)
})
thumbnailContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn-thumbnail')) return
  currentSlide = +e.target.dataset.slide
  goToSlide(slides, currentSlide)
  activeThumbnail(currentSlide, thumbnailContainer, thumbnailBtns)
})

// Add to Cart functionality
const btnAdd = document.querySelector('.btn-add')
const btnRemove = document.querySelector('.btn-remove')
const count = document.querySelector('.items-to-add')
const addToCart = document.querySelector('.btn-addToCart')
const cartContainer = document.querySelector('.cart-items-container')
const badge = document.querySelector('.btn-cart--badge')

let initialCount = 0
let productPrice = 125
const shoppingCart = {
  productName: 'Fall Limited Edition Sneakers',
  productPrice,
}
count.textContent = initialCount

function toggleBadge(cart) {
  if (cart.qty) {
    badge.textContent = cart.qty
    badge.classList.remove('hidden')
  } else {
    badge.classList.add('hidden')
  }
}

function displayUI(cart) {
  if (cart.qty) {
    const html = `
    <div class="cart-items-list">
      <img src="./images/image-product-${
        currentSlide + 1
      }-thumbnail.jpg" alt="" />
      <div class="cart-item">
        <p>Fall Limited Edition Sneakers</p>
        <p>$${cart.productPrice.toFixed(2)} x ${cart.qty} <span>$${(
      cart.qty * cart.productPrice
    ).toFixed(2)}</span></p>
      </div>
      <button class="btn btn-delete">
        <span class="sr-only">Delete Items</span>
        <span aria-hidden="true">
          <svg
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a"
              />
            </defs>
            <use fill="currentColor" xlink:href="#a" />
          </svg>
        </span>
      </button>
    </div>
    <button class="btn btn-checkout">Checkout</button>
  `
    cartContainer.innerHTML = html
  } else {
    cartContainer.innerHTML = `<p class="empty-cart-msg">You cart is empty.</p>`
  }
}

btnAdd.addEventListener('click', function () {
  if (initialCount === 5) return
  initialCount += 1
  shoppingCart.qty = initialCount
  count.textContent = initialCount
})

btnRemove.addEventListener('click', function () {
  if (initialCount === 0) return
  initialCount -= 1
  shoppingCart.qty = initialCount
  count.textContent = initialCount
})

addToCart.addEventListener('click', function () {
  displayUI(shoppingCart)
  toggleBadge(shoppingCart)
})

cartContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn-delete')) return
  shoppingCart.qty = 0
  initialCount = 0
  count.textContent = initialCount
  displayUI(shoppingCart)
  toggleBadge(shoppingCart)
})

// Modal
const modal = document.querySelector('.modal-container')
const closeBtn = document.querySelector('.btn-close')

function toggleModal() {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden')
  } else {
    modal.classList.add('hidden')
  }
}

const modalSlides = document.querySelectorAll('.modal-images img')
const btnPrevModal = document.querySelector('.modal-prev')
const btnNextModal = document.querySelector('.modal-next')
const modalThumbnailContainer = document.querySelector('.modal-thumbnails')
const modalThumbnailBtns = modalThumbnailContainer.querySelectorAll(
  '.btn-modal-thumbnail',
)

btnNextModal.addEventListener('click', () =>
  goToNext(modalSlides, modalThumbnailContainer, modalThumbnailBtns),
)
btnPrevModal.addEventListener('click', () =>
  goToPrev(modalSlides, modalThumbnailContainer, modalThumbnailBtns),
)

slides.forEach((slide, i) =>
  slide.addEventListener('click', e => {
    toggleModal()
    goToSlide(modalSlides, i)
    activeThumbnail(i, modalThumbnailContainer, modalThumbnailBtns)
  }),
)
closeBtn.addEventListener('click', toggleModal)

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden')
  }
})

modal.addEventListener('click', function (e) {
  if (modal.classList.contains('hidden')) return
  if (!e.target.closest('.modal-inner')) {
    modal.classList.add('hidden')
  }
})

modalThumbnailContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn-thumbnail')) return
  currentSlide = +e.target.dataset.slide
  goToSlide(modalSlides, currentSlide)
  activeThumbnail(currentSlide, modalThumbnailContainer, modalThumbnailBtns)
})

window.addEventListener('keydown', function (e) {
  if (modal.classList.contains('hidden')) return

  if (e.key === 'ArrowLeft')
    goToPrev(modalSlides, modalThumbnailContainer, modalThumbnailBtns)
  if (e.key === 'ArrowRight')
    goToNext(modalSlides, modalThumbnailContainer, modalThumbnailBtns)
})
