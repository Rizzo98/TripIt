$(document).ready(function(){
  let menuClosed = true
  $('#left-menu').sidr({
    name: 'sidr-left',
    side: 'left',
    source : window.location.href+'./menuContent.html'
  });
  $('#left-menu').click(()=>{
    if(menuClosed){
      $('#left-menu').text('<')
      menuClosed = false
    }else{
      $('#left-menu').text('>')
      menuClosed = true
    }

  })

});
