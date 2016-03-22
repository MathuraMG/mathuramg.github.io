function changeCategory(type){
  //console.log('hi');
  if(type =='programming'){
    var projects = $('.portfolioHeader').css("display","none");
    var projects = $('.tag-programming').css("display","inline-block");
    //change category to yellow
    $('.category-tag').removeClass('selected-category');
    $('.category-tag-programming').addClass('selected-category');
  }
  else if(type =='physcomp'){
    var projects = $('.portfolioHeader').css("display","none");
    var projects = $('.tag-physcomp').css("display","inline-block");
    //change category to yellow
    $('.category-tag').removeClass('selected-category');
    $('.category-tag-physcomp').addClass('selected-category');
  }
  else if(type =='animation'){
    var projects = $('.portfolioHeader').css("display","none");
    var projects = $('.tag-animation').css("display","inline-block");
    //change category to yellow
    $('.category-tag').removeClass('selected-category');
    $('.category-tag-animation').addClass('selected-category');
  }
  else if(type =='all'){
    var projects = $('.portfolioHeader').css("display","inline-block");
    //change category to yellow
    $('.category-tag').removeClass('selected-category');
    $('.category-tag-all').addClass('selected-category');
  }
}
function load(){
  changeCategory('all');
}
window.onload = load;
