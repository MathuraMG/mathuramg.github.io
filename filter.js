function changeCategory(type){
  //console.log('hi');
  if(type =='programming'){
    var projects = $('.projects__item').css("display","none");
    var projects = $('.tag-programming').css("display","inline-flex");
    //change category to yellow
    $('.nav__category').removeClass('nav__category--selected');
    $('.nav__category-programming').addClass('nav__category--selected');
  }
  else if(type =='physcomp'){
    var projects = $('.projects__item').css("display","none");
    var projects = $('.tag-physcomp').css("display","inline-flex");
    //change category to yellow
    $('.nav__category').removeClass('nav__category--selected');
    $('.nav__category-physcomp').addClass('nav__category--selected');
  }
  else if(type =='animation'){
    var projects = $('.projects__item').css("display","none");
    var projects = $('.tag-animation').css("display","inline-flex");
    //change category to yellow
    $('.nav__category').removeClass('nav__category--selected');
    $('.nav__category-animation').addClass('nav__category--selected');
  }
  else if(type =='all'){
    var projects = $('.projects__item').css("display","inline-flex");
    //change category to yellow
    $('.nav__category').removeClass('nav__category--selected');
    $('.nav__category-all').addClass('nav__category--selected');
  }
}
function load(){
  changeCategory('all');
}
window.onload = load;
