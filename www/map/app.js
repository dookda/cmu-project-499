
var map = L.map("map", {
    center: [14, 100],
    zoom: 12
})

var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var amphoe = L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/CM/wms?", {
    layers: "CM:amphoe_cm",
    format: 'image/png',
    transparent: true
})

// marker
var mkObject = [{
    name: "mk1",
    latlng: [16, 101.00]
}, {
    name: "mk2",
    latlng: [15, 98.234]
}, {
    name: "mk3",
    latlng: [14.5, 99.456]
}];

mkObject.forEach((i) => {
    console.log(i)
    L.marker(i.latlng).bindPopup(i.name).addTo(map);
});

var mk = L.marker([14, 100]).bindPopup("test");

var baseMap = {
    "แผนที่ OSM": OpenStreetMap_Mapnik,
    "แผนที่ ESRI": Esri_WorldStreetMap.addTo(map),
    "แผนที่ ESRI Imagery": Esri_WorldImagery
}

var overlayMap = {
    "อำเภอ": amphoe,
    "marker": mk
}

L.control.layers(baseMap, overlayMap, {
    collapsed: true,
    position: 'bottomright'
}).addTo(map);