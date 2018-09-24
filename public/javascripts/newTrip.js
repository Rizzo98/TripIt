$(document).ready(function(){

  $('#newMarker').click(()=>{
    $('#newTripModal').modal('toggle')
    $("#newTrip").attr('addMarker',true)
    $("#map1").css('cursor','pointer')
  })

  $('#confirmMarker').click(()=>{
    $('#newTripModal').modal('show')
  })

})
