$('.content').hide();
  $('.accordion_sec').click(function() {
    $(this).toggleClass('active')
    $('.accordion_sec').not(this).removeClass('active')
    $('.accordion_sec').not(this).find('.content').slideUp()
    $(this).find('.content').slideToggle()
    return false;
});

$('.instruction-part').not('.instruction-part.wrap1').fadeOut(0)
$('.instruction-navigation ul li').click(function(){
  let index = $(this).attr('instruction-tag')
  $('.instruction-part').fadeOut(0)
  $('.wrap' + index).fadeIn(200)
  $('.instruction-navigation ul li').removeClass('active')
  $(this).addClass('active')
  return false
})

$(document).ready(function(){
  const swiper = new Swiper('.instruction-part.swiper', {
// Optional parameters

loop: false,
rewind: true,
slidesPerView: 4,
// height: auto,
spaceBetween: 30,
enabled: true,
autoplay: {
delay: 4000,
},

// If we need pagination
pagination: {
 el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
 nextEl: '.swiper-button-next',
 prevEl: '.swiper-button-prev',
},
pagination: {
 el: ".swiper-pagination",
 type: "fraction",
},
scrollbar: {
 el: '.swiper-scrollbar',
 draggable: true,
},
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1.2,
    spaceBetween: 15
  },
  // when window width is >= 640px
  768: {
    slidesPerView: 3.5,
    spaceBetween: 20
  },
  991: {
    slidesPerView: 4,
    spaceBetween: 20
  }
}
});
})

$(document).ready(function(){
  const swiper = new Swiper('.swiper.top-wrap__inner', {
// Optional parameters

loop: false,
rewind: true,
slidesPerView: 1,
// autoplay: {
//   delay: 5000,
// },

// Navigation arrows
navigation: {
 nextEl: '.swiper-button-next',
 prevEl: '.swiper-button-prev',
},
pagination: {
 el: ".swiper-pagination-img",
//  type: "fraction",
},
});
})


// Template function which adds CSS flag and displays country name
function flagTemplate(country){
  return $("<span class='flag-icon flag-icon-" + country.id + " '></span><span class='flag-text'>" + country.text + "</span>");
}

// Generate correct URL based on entered search term
function generateUrl(params){
  if(params.term){
    return "https://restcountries.com/v3.1/name/" + params.term;
  } else {
    return "https://restcountries.com/v3.1/all";
  }
}

// Initialise select2 using flagTemplate function for both result and selection
$('.country_select').select2({
  // Set template for results and selection
  templateResult: flagTemplate,
  templateSelection: flagTemplate,
  // Set placeholder text
  placeholder: 'Сountry',
  // Load country list from https://restcountries.com
  ajax: {
    url: generateUrl,
    cache: 250,
    dataType: "json",
    processResults: function(data) {      
      return {
        results: data
          .map(x => ({id: x.cca2.toLowerCase(), text: x.name.common}))
          .sort((a, b) => ('' + a.text).localeCompare(b.text))
      };
    }
  }
});



function Searchinput () {
  const input = $('.input-country').val().toUpperCase();
  const countries = $('.link-country span');

  for (let i = 0; i < countries.length; i++) {
    const item = $(countries[i]);
    const name = item.html();
    if (name.toUpperCase().indexOf(input) > -1) {
      item.closest('.country-wrapper__card').show();
    } else {
      item.closest('.country-wrapper__card').hide();
    }
  }
}

// if $('.input-country'.value.length > 0 ){
  
// }
$('.input-country').keyup(function(){
  Searchinput();
})




