var wms_layers = [];

var lyr_DTM_0 = new ol.layer.Tile({
  source: new ol.source.TileWMS(({
    url: "https://wms.pcn.minambiente.it/ogc?map%3D/ms_ogc/WMS_v1.3/raster/DTM_20M.map",
    attributions: ' ',
    params: {
      "LAYERS": "EL.DTM.20M",
      "TILED": "true",
      "VERSION": "1.3.0"
    },
  })),
  title: 'DTM',
  popuplayertitle: 'DTM',
  type: '',
  opacity: 1.000000,


});
wms_layers.push([lyr_DTM_0, 0]);

var lyr_DarkMatter_1 = new ol.layer.Tile({
  'title': 'Dark Matter',
  'opacity': 1.000000,


  source: new ol.source.XYZ({
    attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
    url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
  })
});

var lyr_ESRITopo_2 = new ol.layer.Tile({
  'title': 'ESRI Topo',
  'opacity': 1.000000,


  source: new ol.source.XYZ({
    attributions: ' ',
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
  })
});

var lyr_GoogleRoad_3 = new ol.layer.Tile({
  'title': 'Google Road',
  'opacity': 1.000000,


  source: new ol.source.XYZ({
    attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
    url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
  })
});

var lyr_GoogleSatellite_4 = new ol.layer.Tile({
  'title': 'Google Satellite',
  'opacity': 1.000000,


  source: new ol.source.XYZ({
    attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
    url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
  })
});

var lyr_GoogleHybrid_5 = new ol.layer.Tile({
  'title': 'Google Hybrid',
  'opacity': 1.000000,


  source: new ol.source.XYZ({
    attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
    url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
  })
});

var lyr_Fiumiprincipaliesecondari_7 = new ol.layer.Tile({
  source: new ol.source.TileWMS(({
    url: "https://wms.pcn.minambiente.it/ogc?map%3D/ms_ogc/WMS_v1.3/Vettoriali/Aste_fluviali.map",
    attributions: ' ',
    params: {
      "LAYERS": "ID.RETICOLO.FIUMI_PRINCIPALI_SECONDARI",
      "TILED": "true",
      "VERSION": "1.3.0"
    },
  })),
  title: 'Fiumi principali e secondari',
  popuplayertitle: 'Fiumi principali e secondari',
  type: '',
  opacity: 1.000000,


});
wms_layers.push([lyr_Fiumiprincipaliesecondari_7, 0]);
var lyr_Fiumietorrenti_8 = new ol.layer.Tile({
  source: new ol.source.TileWMS(({
    url: "https://wms.pcn.minambiente.it/ogc?map%3D/ms_ogc/WMS_v1.3/Vettoriali/Aste_fluviali.map",
    attributions: ' ',
    params: {
      "LAYERS": "ID.RETICOLO.FIUMI_TORRENTI",
      "TILED": "true",
      "VERSION": "1.3.0"
    },
  })),
  title: 'Fiumi e torrenti',
  popuplayertitle: 'Fiumi e torrenti',
  type: '',
  opacity: 1.000000,


});
wms_layers.push([lyr_Fiumietorrenti_8, 0]);
var lyr_Corsidacqua_9 = new ol.layer.Tile({
  source: new ol.source.TileWMS(({
    url: "https://wms.pcn.minambiente.it/ogc?map%3D/ms_ogc/WMS_v1.3/Vettoriali/Aste_fluviali.map",
    attributions: ' ',
    params: {
      "LAYERS": "ID.RETICOLO.CORSI_ACQUA",
      "TILED": "true",
      "VERSION": "1.3.0"
    },
  })),
  title: 'Corsi d\'acqua',
  popuplayertitle: 'Corsi d\'acqua',
  type: '',
  opacity: 1.000000,


});
wms_layers.push([lyr_Corsidacqua_9, 0]);
var group_LIMITIAMMINISTRATIVI = new ol.layer.Group({
  layers: [],
  fold: 'close',
  title: 'LIMITI AMMINISTRATIVI'
});
var group_FERROVIA = new ol.layer.Group({
  layers: [],
  fold: 'open',
  title: 'FERROVIA'
});
var group_SPECCHIDACQUA = new ol.layer.Group({
  layers: [lyr_Fiumiprincipaliesecondari_7, lyr_Fiumietorrenti_8, lyr_Corsidacqua_9,],
  fold: 'close',
  title: 'SPECCHI D\'ACQUA'
});
var group_MAPPE = new ol.layer.Group({
  layers: [lyr_DTM_0, lyr_DarkMatter_1, lyr_ESRITopo_2, lyr_GoogleRoad_3, lyr_GoogleSatellite_4, lyr_GoogleHybrid_5,],
  fold: 'open',
  title: 'MAPPE'
});

lyr_DTM_0.setVisible(true); lyr_DarkMatter_1.setVisible(true); lyr_ESRITopo_2.setVisible(true); lyr_GoogleRoad_3.setVisible(true); lyr_GoogleSatellite_4.setVisible(true); lyr_GoogleHybrid_5.setVisible(true); lyr_Fiumiprincipaliesecondari_7.setVisible(true); lyr_Fiumietorrenti_8.setVisible(true); lyr_Corsidacqua_9.setVisible(true);
var layersList = [group_MAPPE, group_SPECCHIDACQUA];
