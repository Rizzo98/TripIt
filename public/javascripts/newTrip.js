$(document).ready(function(){

  $('#newMarker').click(()=>{
    $('#myModal').modal('toggle')
    $("#myModal").attr('addMarker',true)
    $("#map1").css('cursor','pointer')
  })

})
