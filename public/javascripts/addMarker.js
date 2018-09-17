$(document).ready(function(){
  $('#addMarker').click(()=>{
    mymap.locate()
  })
})

mymap.on('locationfound', onLocationFound);
mymap.on('locationerror', onLocationError);

function onLocationFound(e) {
  var radius = e.accuracy / 2;
  L.circle(e.latlng,{
    color: '#8585ad',
    fillColor: '#8585ad',
    fillOpacity: 0.5,
    radius: radius
  }).addTo(mymap);
}

function onLocationError(e) {
  alert(e.message);
}
