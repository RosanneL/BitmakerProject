var mymap =L.map('map').setView([49.52521, -84.46289],5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoicm9zIiwiYSI6ImNpemdib3FlMjAxNDYycW1rdGVhNzJ6em8ifQ.cpE8AhJghrrloc010KQXUQ',{
   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,'+' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +'Imagery © <a href="http://mapbox.com">Mapbox</a>',
   maxZoom:18,
   id: 'mapbox.light'
 }).addTo(mymap);
