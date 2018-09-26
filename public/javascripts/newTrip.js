$(document).ready(function(){

  localStorage.clear();

  $('#newMarker').click(()=>{
    $('#newTripModal').modal('toggle')
    $("#newTrip").attr('addMarker',true)
    $("#map1").css('cursor','pointer')
  })

  $('#confirmMarker').click(()=>{
    $('#newTripModal').modal('show')
    id = (parseFloat($('#newMarkerModal').attr('lat')).toFixed(4)+parseFloat($('#newMarkerModal').attr('lng')).toFixed(4)+$('#newMarkerName').val().length)
    localStorage.setItem(id ,[$('#img1').attr('src'),$('#img2').attr('src'),$('#img3').attr('src'),$('#img4').attr('src')])
    $("#markerList").append('<li class="addMarkerli" lat ='
                            + $('#newMarkerModal').attr('lat') +' lng = '+ $('#newMarkerModal').attr('lng') +' description = "' + $("#newMarkerDescription").val()
                            +'" name= "'+ $('#newMarkerName').val() +'" localId = "'+ id +'" >'+ $('#newMarkerName').val() +'</li>')
  })

})
