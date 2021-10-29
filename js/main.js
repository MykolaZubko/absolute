$(function(){
    
    $('.carousel__item-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: 'carousel__item'
      });
      $('.carousel__item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.carousel__item',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
      
});