


fetch("./assets/data/banner.json")
.then(res=>res.json())
.then(json=>{

  data=json.list;

  let html = ``;
  data.forEach(el => {
    html+=`
    <li class="swiper-slide">
      <a href="" class="link">
          <div class="thumb">
            <img src="${el.thumb}" alt="${el.title}">
          </div>
          <div class="desc-area">
            <h3 class="title">${el.title}</h3>
            <span class="desc">${el.desc}</span>
          </div>
        </a>
  </li>
    `;
  });

  $('#visualList').html(html);
  
  const visualSlide = new Swiper('.visual-slide',{
    loop: true,
    navigation:{
      nextEl:".next"
    },
    pagination:{
      el:".pagination"
    }
  })

})



fetch("./assets/data/product.json")
.then(res=>res.json())
.then(json=>{

  data=json.introList;





  let html=``;
  data.forEach(element => {

    prdArr = element.prdList;

    let prdHtml = ``;
    prdArr.forEach(prd => {

      if(prd.price.saleprice !== prd.price.oriprice){
        saleEl=`<span class="percent ">${prd.price.saleprecent}%</span>`
      }else{
        saleEl=``;
      }

      prdHtml+=`<li class="item-prd">
      <a href="" class="link">
        <div class="thumb">
          <img src="${prd.thumb}" alt="${prd.title}">
        </div>
        <div class="text-area">
          <span class="brand"> ${prd.brand}</span>
          <span class="name">${prd.title}</span>
          <div class="price-wrap">
            ${saleEl}
            <span class="sell">${prd.price.saleprice.toLocaleString()}</span>
            <span class="unit">won</span>
          </div>
        </div>
      </a>
      <button class="btn-save">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" style="width: 16px; height: 14px">
          <path
            d="M9 6.088C9 3.831 10.791 2 13 2s4 1.83 4 4.088c0 1.743-1.46 3.23-1.46 3.23L9 16 2.46 9.318S1 7.83 1 6.088C1 3.831 2.791 2 5 2s4 1.83 4 4.088z"
            style="fill: none; stroke: #5d5d5d; stroke-width: 1;"></path>
        </svg>
        <span class="count">${prd.fav}</span>
      </button>
      </li>`
    });



    html+=`<li class="item">
              <div class="intro">
                <a href="" class="link">
                  <div class="thumb">
                    <img src="${element.introThumb}" alt>
                  </div>
                  <div class="text-area">
                    <h3 class="title">${element.introTitle}</h3>
                    <p class="desc">${element.introDesc}</p>
                  </div>
                </a>
              </div>
              <ul class="list-prd">
                ${prdHtml}
              </ul>
          </li>`

  });

  $('#introList').html(html);
})












$(window).scroll(function(){

  curr = $(this).scrollTop();

  if (curr >= $('.ad-top').outerHeight()) {
    $('.header').addClass('fixed');

  }else{
    $('.header').removeClass('fixed');
  }
})
$(window).trigger('scroll');

const commonSlide = new Swiper('.common-slide',{
  slidesPerView : 1.1,
  spaceBetween: 10,
  pagination:{
    el:".pagination"
  }
})
const recommendSlide = new Swiper('.recommend-slide',{
  slidesPerView : 2.2,
  spaceBetween: 10,
  pagination:{
    el:".pagination"
  }
})
const catedSlide = new Swiper('.cate-slide',{
  slidesPerView: 2,
  grid: {
    rows: 3,
  },
  pagination:{
    el:".pagination"
  },

})

/**
 * 
 * search
 * 
 */

$('.btn-setting').click(function(){
  $('body').addClass('hidden');
  $('.popup-inner').slideDown(300);
});
$('.dimmed').click(function(){
  $('body').removeClass('hidden');
  $('.popup-inner').slideUp(300);
})

$('.tab a').click(function(e){
  e.preventDefault();

  tabName = $(this).data('tab');

  $('.tab a').removeClass('active');
  $(this).addClass('active');

  $(tabName).addClass('active').siblings().removeClass('active');
  

  $('.popup-inner').slideUp(300);
  $('body').removeClass('hidden');


})

$('.btn-close').click(function() {
  history.back(); 
});

$('.footer .btn-addr').click(function(){
  $('.footer .addr-wrap').toggleClass('active');
  $(this).toggleClass('active');
})