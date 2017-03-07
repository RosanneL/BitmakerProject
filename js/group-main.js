//MAP SCRIPTS

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoicm9zIiwiYSI6ImNpemdib3FlMjAxNDYycW1rdGVhNzJ6em8ifQ.cpE8AhJghrrloc010KQXUQ',{
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,'+' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//    maxZoom:18,
//    id: 'mapbox.light'
//  }).addTo(mymap);

 var cities=new L.LayerGroup();

    var denver=L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
    littleton=L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
    aurora=L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
    golden=L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);

    var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    		mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
        
 var grayscale=L.tileLayer(mbUrl,{id:'mapbox.light',attribution:mbAttr}),
 streets=L.tileLayer(mbUrl,{id:'mapbox.streets',attribution:mbAttr});

 var mymap =L.map('map',{
   center:[39.73,-104.99],
   zoom:10,
   layers:[grayscale, cities]
 });

 var baseLayers={
   "Grayscale":grayscale,
   "Streets":streets
 };

 var overlays={
   "Cities":cities
 };

 L.control.layers(baseLayers,overlays).addTo(mymap);
