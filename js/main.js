//MAP SCRIPTS
var mymap =L.map('map').setView([49.52521, -84.46289],5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoicm9zIiwiYSI6ImNpemdib3FlMjAxNDYycW1rdGVhNzJ6em8ifQ.cpE8AhJghrrloc010KQXUQ',{
   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,'+' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +'Imagery © <a href="http://mapbox.com">Mapbox</a>',
   maxZoom:18,
   id: 'mapbox.light'
 }).addTo(mymap);

 var LeafIcon = L.Icon.extend({
   options: {
     iconUrl: 'leaf-shadow.png',
     iconSize:     [38, 95],
     shadowSize:   [50, 64],
     iconAnchor:   [22, 94],
     shadowAnchor: [4, 62],
     popupAnchor:  [-3, -76]
   }
 });

 var greenIcon = new LeafIcon({iconUrl: 'img/leaf-green.png'}),
   redIcon = new LeafIcon({iconUrl: 'img/leaf-green.png'}),
   orangeIcon = new LeafIcon({iconUrl: 'img/leaf-green.png'});

 L.marker([51.5, -0.09], {icon: greenIcon}).bindPopup("I am a green leaf.").addTo(mymap);
 L.marker([51.495, -0.083], {icon: redIcon}).bindPopup("I am a red leaf.").addTo(mymap);
 L.marker([51.49, -0.1], {icon: orangeIcon}).bindPopup("I am an orange leaf.").addTo(mymap);

  var baseballIcon = L.icon({
 	iconUrl: 'img/baseball-marker.png',
 	iconSize: [32, 37],
 	iconAnchor: [16, 37],
 	popupAnchor: [0, -28]
 });

 function onEachFeature(feature, layer){
   if(feature.properties&&feature.properties.popupContent){
     layer.bindPopup(feature.properties.popupContent);
   }
 }


   var geojsonFeature=[{
     "type":"Feature",
     "properties":{
       "name":"Coors Field",
     "amenity":"Baseball Stadium",
       "popupContent":"This is where the Rockies play!",
       "show_on_map":true
     },
     "geometry":{
       "type":"Point",
       "coordinates":[-104.99404, 39.75621]
     }
   },{
     "type":"Feature",
     "properties":{
       "name":"Busch Field",
       "show_on_map":false
     },
     "geometry":{
       "type":"Point",
       "coordinates":[-104.995, 39.75600]
     }
   }];


 // function onEachFeature(feature, layer){
 //  		var popupContent = "<p>I started out as a GeoJSON " +
 // 				feature.geometry.type + ", but now I'm a Leaflet vector!</p>";
 //   //
 // 		if (feature.properties && feature.properties.popupContent) {
 // 			popupContent += feature.properties.popupContent;
 // 		}
 // //
 // 		layer.bindPopup(popupContent);
 // 	}

   L.geoJSON(geojsonFeature,{
     onEachFeature:onEachFeature
   }).addTo(mymap);

   var myLines=[{
     "type":"LineString",
     "coordinates":[[-100,40],[-105,45],[-110,55]]
   },{
     "type":"LineString",
     "coordinates":[[-105,40],[-110,45],[-115,55]]
   }];
    var myStyle={
      "color":"#ff7800",
      "weight":5,
      "opacity":0.65
    };
//
L.geoJSON(myLines,{
    style:myStyle
}).addTo(mymap);

var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

L.geoJSON(states,{
  style:function(feature){
    switch (feature.properties.party) {
      case 'Republican':return {color:"#ff0000"};
      case 'Democrat':return  {color:"#0000ff"};

    }
  }
}).addTo(mymap);

var cmaStyle={
  "color":"#ff7800",
  "weight":3,
  "opacity":0.65
};

L.geoJSON(cmaTO,{
  style:cmaStyle
}).addTo(mymap);

// function onMapClick(e){
//   alert("You clicked the map at "+e.latlng);
// }
// mymap.on('click',onMapClick);

//DISPLAY SCRIPTS
 //  $('#map').dblclick(function(){
 //    $('.layers').css('display','inline-block');
 //
 //  });
 //  $('.layers').dblclick(function(){
 //  $('.layers').css('transform','translate (50px) 20s')
 //  .css('display','none')
 //    ;
 // })
 // $('.close').click(function(){
 // $('.layers').css('transform','translate (50px) 20s')
 // .css('display','none')
 //   ;
 // })
