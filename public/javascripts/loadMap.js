let mymap = L.map('map1').locate({setView: true, maxZoom: 10});
L.tileLayer.provider('OpenStreetMap.HOT').addTo(mymap);
