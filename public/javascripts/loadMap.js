let mymap = L.map('map1').locate({setView: true, maxZoom: 10});
L.tileLayer.provider('OpenStreetMap.HOT').addTo(mymap);


mymap.on('click', function(e) {

  if($("#newTrip").attr('addMarker')=='true'){
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap)

    $("#newTrip").attr('addMarker',false)
    $("#map1").css('cursor','')
    $("#markerList").append('<li class="addMarkerli">lat: '+ e.latlng.lat + ' lng: ' + e.latlng.lng +' </li>')
    $('#newMarkerModal').modal('show')

    //load images in new marker
    $('#pic1').change(()=>{loadPic($('#pic1')[0],'img1')})
    $('#pic2').change(()=>{loadPic($('#pic2')[0],'img2')})
    $('#pic3').change(()=>{loadPic($('#pic3')[0],'img3')})
    $('#pic4').change(()=>{loadPic($('#pic4')[0],'img4')})

  }

});

function loadPic(input,imgId){
  console.log(input)
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
        $('#'+imgId).attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}
