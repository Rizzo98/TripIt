$(document).ready(function(){

  localStorage.clear();
  localStorage.setItem('IdCounter',0)

  $('#newMarker').click(()=>{
    $('#newTripModal').modal('toggle')
    $("#newTrip").attr('addMarker',true)
    $("#map1").css('cursor','pointer')
  })

  $('#confirmMarker').click(()=>{
    id = localStorage.IdCounter
    images = [$('#img1').attr('src'),$('#img2').attr('src'),$('#img3').attr('src'),$('#img4').attr('src')]
    localStorage.setItem(id, JSON.stringify(images))
    localStorage.IdCounter ++
    $('#newTripModal').modal('show')
    $("#markerList").append('<li class="addMarkerli" lat ='
                            + $('#newMarkerModal').attr('lat') +' lng = '+ $('#newMarkerModal').attr('lng') +' description = "' + $("#newMarkerDescription").val()
                            +'" name= "'+ $('#newMarkerName').val() +'" localId = "'+ id +'" >'+ $('#newMarkerName').val() +'</li>')

    resetNewMarkerModal()
  })

})


function resetNewMarkerModal(){
  $("#newMarkerDescription").val('')
  $('#newMarkerName').val('')
  $('#img1').attr('src','images/loadImage.jpg')
  $('#img2').attr('src','images/loadImage.jpg')
  $('#img3').attr('src','images/loadImage.jpg')
  $('#img4').attr('src','images/loadImage.jpg')
  $('#pic1').val(null)
  $('#pic2').val(null)
  $('#pic3').val(null)
  $('#pic4').val(null)
}
