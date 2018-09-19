let mymap = L.map('map1').locate({setView: true, maxZoom: 10});
L.tileLayer.provider('OpenStreetMap.HOT').addTo(mymap);


mymap.on('click', function(e) {

  if($("#myModal").attr('addMarker')=='true'){
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap)

    $("#myModal").attr('addMarker',false)
    $("#map1").css('cursor','')
    $('#myModal').modal('show')

  }

});
