var wms_layers = [];

var lyr_DMT_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DMT<br />\
    <img src="styles/legend/DMT_0_0.png" /> 24,9955<br />\
    <img src="styles/legend/DMT_0_1.png" /> 150,3569<br />\
    <img src="styles/legend/DMT_0_2.png" /> 275,7184<br />\
    <img src="styles/legend/DMT_0_3.png" /> 401,0798<br />\
    <img src="styles/legend/DMT_0_4.png" /> 526,4412<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DMT_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2135308.071290, 5217642.456017, 2151976.412064, 5235559.846383]
        })
    });
var lyr_Hillshade_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hillshade<br />\
    <img src="styles/legend/Hillshade_1_0.png" /> 1<br />\
    <img src="styles/legend/Hillshade_1_1.png" /> 182<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Hillshade_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2135308.071290, 5217642.456017, 2151976.412064, 5235559.846383]
        })
    });
var lyr_Aspect_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Aspect<br />\
    <img src="styles/legend/Aspect_2_0.png" /> 0,0000<br />\
    <img src="styles/legend/Aspect_2_1.png" /> 89,9801<br />\
    <img src="styles/legend/Aspect_2_2.png" /> 179,9602<br />\
    <img src="styles/legend/Aspect_2_3.png" /> 269,9402<br />\
    <img src="styles/legend/Aspect_2_4.png" /> 359,9203<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Aspect_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2135308.071290, 5217642.456017, 2151976.412064, 5235559.846383]
        })
    });
var format_putevi2_3 = new ol.format.GeoJSON();
var features_putevi2_3 = format_putevi2_3.readFeatures(json_putevi2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_putevi2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_putevi2_3.addFeatures(features_putevi2_3);
var lyr_putevi2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_putevi2_3, 
                style: style_putevi2_3,
                popuplayertitle: 'putevi2',
                interactive: true,
                title: '<img src="styles/legend/putevi2_3.png" /> putevi2'
            });
var format_putevi1_4 = new ol.format.GeoJSON();
var features_putevi1_4 = format_putevi1_4.readFeatures(json_putevi1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_putevi1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_putevi1_4.addFeatures(features_putevi1_4);
var lyr_putevi1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_putevi1_4, 
                style: style_putevi1_4,
                popuplayertitle: 'putevi1',
                interactive: true,
                title: '<img src="styles/legend/putevi1_4.png" /> putevi1'
            });
var format_putevi_grad_5 = new ol.format.GeoJSON();
var features_putevi_grad_5 = format_putevi_grad_5.readFeatures(json_putevi_grad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_putevi_grad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_putevi_grad_5.addFeatures(features_putevi_grad_5);
var lyr_putevi_grad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_putevi_grad_5, 
                style: style_putevi_grad_5,
                popuplayertitle: 'putevi_grad',
                interactive: true,
                title: '<img src="styles/legend/putevi_grad_5.png" /> putevi_grad'
            });
var format_Zgrade_grad_6 = new ol.format.GeoJSON();
var features_Zgrade_grad_6 = format_Zgrade_grad_6.readFeatures(json_Zgrade_grad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zgrade_grad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zgrade_grad_6.addFeatures(features_Zgrade_grad_6);
var lyr_Zgrade_grad_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zgrade_grad_6, 
                style: style_Zgrade_grad_6,
                popuplayertitle: 'Zgrade_grad',
                interactive: true,
                title: '<img src="styles/legend/Zgrade_grad_6.png" /> Zgrade_grad'
            });
var format_Rijeke_grad_7 = new ol.format.GeoJSON();
var features_Rijeke_grad_7 = format_Rijeke_grad_7.readFeatures(json_Rijeke_grad_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rijeke_grad_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rijeke_grad_7.addFeatures(features_Rijeke_grad_7);
var lyr_Rijeke_grad_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rijeke_grad_7, 
                style: style_Rijeke_grad_7,
                popuplayertitle: 'Rijeke_grad',
                interactive: true,
                title: '<img src="styles/legend/Rijeke_grad_7.png" /> Rijeke_grad'
            });
var format_Groblja_grad_8 = new ol.format.GeoJSON();
var features_Groblja_grad_8 = format_Groblja_grad_8.readFeatures(json_Groblja_grad_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Groblja_grad_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Groblja_grad_8.addFeatures(features_Groblja_grad_8);
var lyr_Groblja_grad_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Groblja_grad_8, 
                style: style_Groblja_grad_8,
                popuplayertitle: 'Groblja_grad',
                interactive: true,
                title: '<img src="styles/legend/Groblja_grad_8.png" /> Groblja_grad'
            });
var format_Zelene_povrine_9 = new ol.format.GeoJSON();
var features_Zelene_povrine_9 = format_Zelene_povrine_9.readFeatures(json_Zelene_povrine_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zelene_povrine_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zelene_povrine_9.addFeatures(features_Zelene_povrine_9);
var lyr_Zelene_povrine_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zelene_povrine_9, 
                style: style_Zelene_povrine_9,
                popuplayertitle: 'Zelene_površine',
                interactive: true,
                title: '<img src="styles/legend/Zelene_povrine_9.png" /> Zelene_površine'
            });
var format_Rijeke_10 = new ol.format.GeoJSON();
var features_Rijeke_10 = format_Rijeke_10.readFeatures(json_Rijeke_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rijeke_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rijeke_10.addFeatures(features_Rijeke_10);
var lyr_Rijeke_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rijeke_10,
maxResolution:28.00446615226196,
 
                style: style_Rijeke_10,
                popuplayertitle: 'Rijeke',
                interactive: true,
                title: '<img src="styles/legend/Rijeke_10.png" /> Rijeke'
            });
var format_Parkovi_11 = new ol.format.GeoJSON();
var features_Parkovi_11 = format_Parkovi_11.readFeatures(json_Parkovi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkovi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkovi_11.addFeatures(features_Parkovi_11);
var lyr_Parkovi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkovi_11,
maxResolution:28.00446615226196,
 
                style: style_Parkovi_11,
                popuplayertitle: 'Parkovi',
                interactive: true,
                title: '<img src="styles/legend/Parkovi_11.png" /> Parkovi'
            });
var format_Park_uma_12 = new ol.format.GeoJSON();
var features_Park_uma_12 = format_Park_uma_12.readFeatures(json_Park_uma_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Park_uma_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Park_uma_12.addFeatures(features_Park_uma_12);
var lyr_Park_uma_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Park_uma_12,
maxResolution:28.00446615226196,
 
                style: style_Park_uma_12,
                popuplayertitle: 'Park_šuma',
                interactive: true,
                title: '<img src="styles/legend/Park_uma_12.png" /> Park_šuma'
            });
var format_Trimstaza_13 = new ol.format.GeoJSON();
var features_Trimstaza_13 = format_Trimstaza_13.readFeatures(json_Trimstaza_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trimstaza_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trimstaza_13.addFeatures(features_Trimstaza_13);
var lyr_Trimstaza_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trimstaza_13,
maxResolution:28.00446615226196,
 
                style: style_Trimstaza_13,
                popuplayertitle: 'Trim-staza',
                interactive: true,
                title: '<img src="styles/legend/Trimstaza_13.png" /> Trim-staza'
            });
var format_Plantae_vinograd_14 = new ol.format.GeoJSON();
var features_Plantae_vinograd_14 = format_Plantae_vinograd_14.readFeatures(json_Plantae_vinograd_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantae_vinograd_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantae_vinograd_14.addFeatures(features_Plantae_vinograd_14);
var lyr_Plantae_vinograd_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantae_vinograd_14,
maxResolution:28.00446615226196,
 
                style: style_Plantae_vinograd_14,
                popuplayertitle: 'Plantaže_vinograd',
                interactive: true,
                title: '<img src="styles/legend/Plantae_vinograd_14.png" /> Plantaže_vinograd'
            });
var format_Plantae_vonjak_15 = new ol.format.GeoJSON();
var features_Plantae_vonjak_15 = format_Plantae_vonjak_15.readFeatures(json_Plantae_vonjak_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantae_vonjak_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantae_vonjak_15.addFeatures(features_Plantae_vonjak_15);
var lyr_Plantae_vonjak_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantae_vonjak_15,
maxResolution:28.00446615226196,
 
                style: style_Plantae_vonjak_15,
                popuplayertitle: 'Plantaže_voćnjak',
                interactive: true,
                title: '<img src="styles/legend/Plantae_vonjak_15.png" /> Plantaže_voćnjak'
            });
var format_Obrazovne_ustanove_16 = new ol.format.GeoJSON();
var features_Obrazovne_ustanove_16 = format_Obrazovne_ustanove_16.readFeatures(json_Obrazovne_ustanove_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obrazovne_ustanove_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obrazovne_ustanove_16.addFeatures(features_Obrazovne_ustanove_16);
var lyr_Obrazovne_ustanove_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obrazovne_ustanove_16,
maxResolution:28.00446615226196,
 
                style: style_Obrazovne_ustanove_16,
                popuplayertitle: 'Obrazovne_ustanove',
                interactive: true,
                title: '<img src="styles/legend/Obrazovne_ustanove_16.png" /> Obrazovne_ustanove'
            });
var format_Biblioteke_17 = new ol.format.GeoJSON();
var features_Biblioteke_17 = format_Biblioteke_17.readFeatures(json_Biblioteke_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biblioteke_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biblioteke_17.addFeatures(features_Biblioteke_17);
var lyr_Biblioteke_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biblioteke_17,
maxResolution:28.00446615226196,
 
                style: style_Biblioteke_17,
                popuplayertitle: 'Biblioteke',
                interactive: true,
                title: '<img src="styles/legend/Biblioteke_17.png" /> Biblioteke'
            });
var format_Pozorita_18 = new ol.format.GeoJSON();
var features_Pozorita_18 = format_Pozorita_18.readFeatures(json_Pozorita_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pozorita_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pozorita_18.addFeatures(features_Pozorita_18);
var lyr_Pozorita_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pozorita_18,
maxResolution:28.00446615226196,
 
                style: style_Pozorita_18,
                popuplayertitle: 'Pozorišta',
                interactive: true,
                title: '<img src="styles/legend/Pozorita_18.png" /> Pozorišta'
            });
var format_Trni_centar_19 = new ol.format.GeoJSON();
var features_Trni_centar_19 = format_Trni_centar_19.readFeatures(json_Trni_centar_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trni_centar_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trni_centar_19.addFeatures(features_Trni_centar_19);
var lyr_Trni_centar_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trni_centar_19,
maxResolution:28.00446615226196,
 
                style: style_Trni_centar_19,
                popuplayertitle: 'Tržni_centar',
                interactive: true,
                title: '<img src="styles/legend/Trni_centar_19.png" /> Tržni_centar'
            });
var format_Sud_20 = new ol.format.GeoJSON();
var features_Sud_20 = format_Sud_20.readFeatures(json_Sud_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sud_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sud_20.addFeatures(features_Sud_20);
var lyr_Sud_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sud_20,
maxResolution:28.00446615226196,
 
                style: style_Sud_20,
                popuplayertitle: 'Sud',
                interactive: true,
                title: '<img src="styles/legend/Sud_20.png" /> Sud'
            });
var format_Zdravstvene_ustanove_21 = new ol.format.GeoJSON();
var features_Zdravstvene_ustanove_21 = format_Zdravstvene_ustanove_21.readFeatures(json_Zdravstvene_ustanove_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zdravstvene_ustanove_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zdravstvene_ustanove_21.addFeatures(features_Zdravstvene_ustanove_21);
var lyr_Zdravstvene_ustanove_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zdravstvene_ustanove_21,
maxResolution:28.00446615226196,
 
                style: style_Zdravstvene_ustanove_21,
                popuplayertitle: 'Zdravstvene_ustanove',
                interactive: true,
                title: '<img src="styles/legend/Zdravstvene_ustanove_21.png" /> Zdravstvene_ustanove'
            });
var format_Dom_zdravlja_22 = new ol.format.GeoJSON();
var features_Dom_zdravlja_22 = format_Dom_zdravlja_22.readFeatures(json_Dom_zdravlja_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dom_zdravlja_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dom_zdravlja_22.addFeatures(features_Dom_zdravlja_22);
var lyr_Dom_zdravlja_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dom_zdravlja_22,
maxResolution:28.00446615226196,
 
                style: style_Dom_zdravlja_22,
                popuplayertitle: 'Dom_zdravlja',
                interactive: true,
                title: '<img src="styles/legend/Dom_zdravlja_22.png" /> Dom_zdravlja'
            });
var format_Ustanove_23 = new ol.format.GeoJSON();
var features_Ustanove_23 = format_Ustanove_23.readFeatures(json_Ustanove_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ustanove_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ustanove_23.addFeatures(features_Ustanove_23);
var lyr_Ustanove_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ustanove_23,
maxResolution:28.00446615226196,
 
                style: style_Ustanove_23,
                popuplayertitle: 'Ustanove',
                interactive: true,
                title: '<img src="styles/legend/Ustanove_23.png" /> Ustanove'
            });
var format_Kasarna_24 = new ol.format.GeoJSON();
var features_Kasarna_24 = format_Kasarna_24.readFeatures(json_Kasarna_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kasarna_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kasarna_24.addFeatures(features_Kasarna_24);
var lyr_Kasarna_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kasarna_24,
maxResolution:28.00446615226196,
 
                style: style_Kasarna_24,
                popuplayertitle: 'Kasarna',
                interactive: true,
                title: '<img src="styles/legend/Kasarna_24.png" /> Kasarna'
            });
var format_Muzeji_25 = new ol.format.GeoJSON();
var features_Muzeji_25 = format_Muzeji_25.readFeatures(json_Muzeji_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muzeji_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Muzeji_25.addFeatures(features_Muzeji_25);
var lyr_Muzeji_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Muzeji_25,
maxResolution:28.00446615226196,
 
                style: style_Muzeji_25,
                popuplayertitle: 'Muzeji',
                interactive: true,
                title: '<img src="styles/legend/Muzeji_25.png" /> Muzeji'
            });
var format_Znamenitosti_26 = new ol.format.GeoJSON();
var features_Znamenitosti_26 = format_Znamenitosti_26.readFeatures(json_Znamenitosti_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Znamenitosti_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Znamenitosti_26.addFeatures(features_Znamenitosti_26);
var lyr_Znamenitosti_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Znamenitosti_26,
maxResolution:28.00446615226196,
 
                style: style_Znamenitosti_26,
                popuplayertitle: 'Znamenitosti',
                interactive: true,
                title: '<img src="styles/legend/Znamenitosti_26.png" /> Znamenitosti'
            });
var format_Crkve_27 = new ol.format.GeoJSON();
var features_Crkve_27 = format_Crkve_27.readFeatures(json_Crkve_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crkve_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crkve_27.addFeatures(features_Crkve_27);
var lyr_Crkve_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Crkve_27,
maxResolution:28.00446615226196,
 
                style: style_Crkve_27,
                popuplayertitle: 'Crkve',
                interactive: true,
                title: '<img src="styles/legend/Crkve_27.png" /> Crkve'
            });
var format_Rekreacija_28 = new ol.format.GeoJSON();
var features_Rekreacija_28 = format_Rekreacija_28.readFeatures(json_Rekreacija_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rekreacija_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rekreacija_28.addFeatures(features_Rekreacija_28);
var lyr_Rekreacija_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rekreacija_28,
maxResolution:28.00446615226196,
 
                style: style_Rekreacija_28,
                popuplayertitle: 'Rekreacija',
                interactive: true,
                title: '<img src="styles/legend/Rekreacija_28.png" /> Rekreacija'
            });
var format_Groblje_29 = new ol.format.GeoJSON();
var features_Groblje_29 = format_Groblje_29.readFeatures(json_Groblje_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Groblje_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Groblje_29.addFeatures(features_Groblje_29);
var lyr_Groblje_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Groblje_29,
maxResolution:28.00446615226196,
 
                style: style_Groblje_29,
                popuplayertitle: 'Groblje',
                interactive: true,
                title: '<img src="styles/legend/Groblje_29.png" /> Groblje'
            });
var format_Aerodrom_30 = new ol.format.GeoJSON();
var features_Aerodrom_30 = format_Aerodrom_30.readFeatures(json_Aerodrom_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aerodrom_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aerodrom_30.addFeatures(features_Aerodrom_30);
var lyr_Aerodrom_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aerodrom_30,
maxResolution:28.00446615226196,
 
                style: style_Aerodrom_30,
                popuplayertitle: 'Aerodrom',
                interactive: true,
                title: '<img src="styles/legend/Aerodrom_30.png" /> Aerodrom'
            });
var format_Autobuskastanica_31 = new ol.format.GeoJSON();
var features_Autobuskastanica_31 = format_Autobuskastanica_31.readFeatures(json_Autobuskastanica_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autobuskastanica_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autobuskastanica_31.addFeatures(features_Autobuskastanica_31);
var lyr_Autobuskastanica_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autobuskastanica_31,
maxResolution:28.00446615226196,
 
                style: style_Autobuskastanica_31,
                popuplayertitle: 'Autobuska stanica',
                interactive: true,
                title: '<img src="styles/legend/Autobuskastanica_31.png" /> Autobuska stanica'
            });
var format_eljeznikastanica_32 = new ol.format.GeoJSON();
var features_eljeznikastanica_32 = format_eljeznikastanica_32.readFeatures(json_eljeznikastanica_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eljeznikastanica_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eljeznikastanica_32.addFeatures(features_eljeznikastanica_32);
var lyr_eljeznikastanica_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eljeznikastanica_32,
maxResolution:28.00446615226196,
 
                style: style_eljeznikastanica_32,
                popuplayertitle: 'Željeznička stanica',
                interactive: true,
                title: '<img src="styles/legend/eljeznikastanica_32.png" /> Željeznička stanica'
            });
var format_Damije_33 = new ol.format.GeoJSON();
var features_Damije_33 = format_Damije_33.readFeatures(json_Damije_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Damije_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Damije_33.addFeatures(features_Damije_33);
var lyr_Damije_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Damije_33,
maxResolution:28.00446615226196,
 
                style: style_Damije_33,
                popuplayertitle: 'Džamije',
                interactive: true,
                title: '<img src="styles/legend/Damije_33.png" /> Džamije'
            });
var format_Pumpa_34 = new ol.format.GeoJSON();
var features_Pumpa_34 = format_Pumpa_34.readFeatures(json_Pumpa_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pumpa_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pumpa_34.addFeatures(features_Pumpa_34);
var lyr_Pumpa_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pumpa_34,
maxResolution:28.00446615226196,
 
                style: style_Pumpa_34,
                popuplayertitle: 'Pumpa',
                interactive: true,
                title: '<img src="styles/legend/Pumpa_34.png" /> Pumpa'
            });
var format_Restorani_35 = new ol.format.GeoJSON();
var features_Restorani_35 = format_Restorani_35.readFeatures(json_Restorani_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restorani_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restorani_35.addFeatures(features_Restorani_35);
var lyr_Restorani_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restorani_35,
maxResolution:28.00446615226196,
 
                style: style_Restorani_35,
                popuplayertitle: 'Restorani',
                interactive: true,
                title: '<img src="styles/legend/Restorani_35.png" /> Restorani'
            });
var format_Marketi_36 = new ol.format.GeoJSON();
var features_Marketi_36 = format_Marketi_36.readFeatures(json_Marketi_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marketi_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marketi_36.addFeatures(features_Marketi_36);
var lyr_Marketi_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marketi_36,
maxResolution:28.00446615226196,
 
                style: style_Marketi_36,
                popuplayertitle: 'Marketi',
                interactive: true,
                title: '<img src="styles/legend/Marketi_36.png" /> Marketi'
            });
var format_Hoteli_37 = new ol.format.GeoJSON();
var features_Hoteli_37 = format_Hoteli_37.readFeatures(json_Hoteli_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteli_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteli_37.addFeatures(features_Hoteli_37);
cluster_Hoteli_37 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Hoteli_37
});
var lyr_Hoteli_37 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hoteli_37,
maxResolution:28.00446615226196,
 
                style: style_Hoteli_37,
                popuplayertitle: 'Hoteli',
                interactive: true,
                title: '<img src="styles/legend/Hoteli_37.png" /> Hoteli'
            });
var format_Kafii_38 = new ol.format.GeoJSON();
var features_Kafii_38 = format_Kafii_38.readFeatures(json_Kafii_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kafii_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kafii_38.addFeatures(features_Kafii_38);
var lyr_Kafii_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kafii_38,
maxResolution:28.00446615226196,
 
                style: style_Kafii_38,
                popuplayertitle: 'Kafići',
                interactive: true,
                title: '<img src="styles/legend/Kafii_38.png" /> Kafići'
            });

lyr_DMT_0.setVisible(true);lyr_Hillshade_1.setVisible(true);lyr_Aspect_2.setVisible(true);lyr_putevi2_3.setVisible(true);lyr_putevi1_4.setVisible(true);lyr_putevi_grad_5.setVisible(true);lyr_Zgrade_grad_6.setVisible(true);lyr_Rijeke_grad_7.setVisible(true);lyr_Groblja_grad_8.setVisible(true);lyr_Zelene_povrine_9.setVisible(true);lyr_Rijeke_10.setVisible(true);lyr_Parkovi_11.setVisible(true);lyr_Park_uma_12.setVisible(true);lyr_Trimstaza_13.setVisible(true);lyr_Plantae_vinograd_14.setVisible(true);lyr_Plantae_vonjak_15.setVisible(true);lyr_Obrazovne_ustanove_16.setVisible(true);lyr_Biblioteke_17.setVisible(true);lyr_Pozorita_18.setVisible(true);lyr_Trni_centar_19.setVisible(true);lyr_Sud_20.setVisible(true);lyr_Zdravstvene_ustanove_21.setVisible(true);lyr_Dom_zdravlja_22.setVisible(true);lyr_Ustanove_23.setVisible(true);lyr_Kasarna_24.setVisible(true);lyr_Muzeji_25.setVisible(true);lyr_Znamenitosti_26.setVisible(true);lyr_Crkve_27.setVisible(true);lyr_Rekreacija_28.setVisible(true);lyr_Groblje_29.setVisible(true);lyr_Aerodrom_30.setVisible(true);lyr_Autobuskastanica_31.setVisible(true);lyr_eljeznikastanica_32.setVisible(true);lyr_Damije_33.setVisible(true);lyr_Pumpa_34.setVisible(true);lyr_Restorani_35.setVisible(true);lyr_Marketi_36.setVisible(true);lyr_Hoteli_37.setVisible(true);lyr_Kafii_38.setVisible(true);
var layersList = [lyr_DMT_0,lyr_Hillshade_1,lyr_Aspect_2,lyr_putevi2_3,lyr_putevi1_4,lyr_putevi_grad_5,lyr_Zgrade_grad_6,lyr_Rijeke_grad_7,lyr_Groblja_grad_8,lyr_Zelene_povrine_9,lyr_Rijeke_10,lyr_Parkovi_11,lyr_Park_uma_12,lyr_Trimstaza_13,lyr_Plantae_vinograd_14,lyr_Plantae_vonjak_15,lyr_Obrazovne_ustanove_16,lyr_Biblioteke_17,lyr_Pozorita_18,lyr_Trni_centar_19,lyr_Sud_20,lyr_Zdravstvene_ustanove_21,lyr_Dom_zdravlja_22,lyr_Ustanove_23,lyr_Kasarna_24,lyr_Muzeji_25,lyr_Znamenitosti_26,lyr_Crkve_27,lyr_Rekreacija_28,lyr_Groblje_29,lyr_Aerodrom_30,lyr_Autobuskastanica_31,lyr_eljeznikastanica_32,lyr_Damije_33,lyr_Pumpa_34,lyr_Restorani_35,lyr_Marketi_36,lyr_Hoteli_37,lyr_Kafii_38];
lyr_putevi2_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'sidewalk_r': 'sidewalk_r', 'sidewalk_l': 'sidewalk_l', 'maxspeed_f': 'maxspeed_f', 'maxspeed_b': 'maxspeed_b', 'parking_bo': 'parking_bo', 'destinatio': 'destinatio', 'placement_': 'placement_', 'maxheight': 'maxheight', 'tunnel': 'tunnel', 'destinat_1': 'destinat_1', 'destinat_2': 'destinat_2', 'destinat_3': 'destinat_3', 'parking_ri': 'parking_ri', 'change_lan': 'change_lan', 'change_l_1': 'change_l_1', 'overtaking': 'overtaking', 'destinat_4': 'destinat_4', 'placemen_1': 'placemen_1', 'placement': 'placement', 'name_sr-La': 'name_sr-La', 'ref': 'ref', 'start_date': 'start_date', 'name_fr': 'name_fr', 'name_es': 'name_es', 'name_en': 'name_en', 'name_de': 'name_de', 'length': 'length', 'junction': 'junction', 'cycleway': 'cycleway', 'source_sur': 'source_sur', 'maxweight_': 'maxweight_', 'layer': 'layer', 'bridge': 'bridge', 'turn_lanes': 'turn_lanes', 'width': 'width', 'turn_lan_1': 'turn_lan_1', 'maxspeed_t': 'maxspeed_t', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'turn_lan_2': 'turn_lan_2', 'sidewalk': 'sidewalk', 'int_name': 'int_name', 'foot': 'foot', 'shoulder': 'shoulder', 'old_name': 'old_name', 'bicycle': 'bicycle', 'lit': 'lit', 'smoothness': 'smoothness', 'destinat_5': 'destinat_5', 'destinat_6': 'destinat_6', 'destinat_7': 'destinat_7', 'colour_tex': 'colour_tex', 'colour_bac': 'colour_bac', 'colour_arr': 'colour_arr', 'surface': 'surface', 'parking__1': 'parking__1', 'parking__2': 'parking__2', 'oneway': 'oneway', 'name_sr': 'name_sr', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_putevi1_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'maxspeed_f': 'maxspeed_f', 'maxspeed_b': 'maxspeed_b', 'destinatio': 'destinatio', 'destinat_1': 'destinat_1', 'destinat_2': 'destinat_2', 'sidewalk_b': 'sidewalk_b', 'placement_': 'placement_', 'placemen_1': 'placemen_1', 'sidewalk_r': 'sidewalk_r', 'sidewalk_1': 'sidewalk_1', 'sidewalk_l': 'sidewalk_l', 'parking_ri': 'parking_ri', 'parking_bo': 'parking_bo', 'destinat_3': 'destinat_3', 'destinat_4': 'destinat_4', 'destinat_5': 'destinat_5', 'colour_tex': 'colour_tex', 'colour_bac': 'colour_bac', 'colour_arr': 'colour_arr', 'smoothness': 'smoothness', 'turn_lanes': 'turn_lanes', 'placement': 'placement', 'int_name': 'int_name', 'maxweight_': 'maxweight_', 'layer': 'layer', 'bridge': 'bridge', 'shoulder': 'shoulder', 'junction': 'junction', 'turn_lan_1': 'turn_lan_1', 'source_sur': 'source_sur', 'sidewalk': 'sidewalk', 'maxspeed_t': 'maxspeed_t', 'lit': 'lit', 'foot': 'foot', 'bicycle': 'bicycle', 'width': 'width', 'turn_lan_2': 'turn_lan_2', 'oneway': 'oneway', 'name_rs': 'name_rs', 'maxspeed': 'maxspeed', 'surface': 'surface', 'name_sr': 'name_sr', 'name': 'name', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'lanes': 'lanes', });
lyr_putevi_grad_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'destinatio': 'destinatio', 'parking_bo': 'parking_bo', 'check_date': 'check_date', 'sidewalk_r': 'sidewalk_r', 'access_lan': 'access_lan', 'access_l_1': 'access_l_1', 'destinat_1': 'destinat_1', 'destinat_2': 'destinat_2', 'destinat_3': 'destinat_3', 'destinat_4': 'destinat_4', 'destinat_5': 'destinat_5', 'destinat_6': 'destinat_6', 'destinat_7': 'destinat_7', 'maxspeed_c': 'maxspeed_c', 'placement_': 'placement_', 'turn_lanes': 'turn_lanes', 'turn_lan_1': 'turn_lan_1', 'name_hr': 'name_hr', 'hazard': 'hazard', 'access': 'access', 'change_lan': 'change_lan', 'change_l_1': 'change_l_1', 'name_sr-La': 'name_sr-La', 'parking__1': 'parking__1', 'maxspeed_f': 'maxspeed_f', 'maxspeed_b': 'maxspeed_b', 'placemen_1': 'placemen_1', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'sidewalk_1': 'sidewalk_1', 'sidewalk_l': 'sidewalk_l', 'source_sur': 'source_sur', 'placement': 'placement', 'foot': 'foot', 'tunnel': 'tunnel', 'parking_ri': 'parking_ri', 'maxheight': 'maxheight', 'destinat_8': 'destinat_8', 'destinat_9': 'destinat_9', 'destinat10': 'destinat10', 'colour_tex': 'colour_tex', 'colour_bac': 'colour_bac', 'colour_arr': 'colour_arr', 'maxweight_': 'maxweight_', 'change': 'change', 'embankment': 'embankment', 'junction': 'junction', 'change_l_2': 'change_l_2', 'turn_lan_2': 'turn_lan_2', 'sidewalk_b': 'sidewalk_b', 'old_ref': 'old_ref', 'layer': 'layer', 'bridge': 'bridge', 'sidewalk': 'sidewalk', 'name_sr': 'name_sr', 'name': 'name', 'lit': 'lit', 'int_ref': 'int_ref', 'surface': 'surface', 'smoothness': 'smoothness', 'smoothne_1': 'smoothne_1', 'shoulder': 'shoulder', 'ref': 'ref', 'overtaking': 'overtaking', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_Zgrade_grad_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'short_name': 'short_name', 'old_name_r': 'old_name_r', 'population': 'population', 'old_name_1': 'old_name_1', 'place': 'place', 'capital': 'capital', 'old_name_h': 'old_name_h', 'old_name_s': 'old_name_s', 'old_name_2': 'old_name_2', 'old_name_m': 'old_name_m', 'old_name_e': 'old_name_e', 'old_name_c': 'old_name_c', 'old_name_3': 'old_name_3', 'old_name': 'old_name', 'name_zh-Ha': 'name_zh-Ha', 'ISO3166-2': 'ISO3166-2', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'timezone': 'timezone', 'ref_nuts_3': 'ref_nuts_3', 'ref_nuts_2': 'ref_nuts_2', 'ref_nuts_1': 'ref_nuts_1', 'ref_nuts': 'ref_nuts', 'official_n': 'official_n', 'name_zh-_1': 'name_zh-_1', 'name_zh-_2': 'name_zh-_2', 'name_zh-_3': 'name_zh-_3', 'name_zh': 'name_zh', 'name_zea': 'name_zea', 'name_yue': 'name_yue', 'name_yo': 'name_yo', 'name_yi': 'name_yi', 'name_xmf': 'name_xmf', 'name_xal': 'name_xal', 'name_wuu': 'name_wuu', 'name_wo': 'name_wo', 'name_war': 'name_war', 'name_vro': 'name_vro', 'name_vo': 'name_vo', 'name_vls': 'name_vls', 'name_vi': 'name_vi', 'name_vep': 'name_vep', 'name_vec': 'name_vec', 'name_uz': 'name_uz', 'name_ur': 'name_ur', 'name_uk': 'name_uk', 'name_ug': 'name_ug', 'name_tzl': 'name_tzl', 'name_tt': 'name_tt', 'name_tr': 'name_tr', 'name_tl': 'name_tl', 'name_tk': 'name_tk', 'name_th': 'name_th', 'name_tg': 'name_tg', 'name_ta': 'name_ta', 'name_szl': 'name_szl', 'name_sw': 'name_sw', 'name_sv': 'name_sv', 'name_su': 'name_su', 'name_stq': 'name_stq', 'name_ss': 'name_ss', 'name_sr-La': 'name_sr-La', 'name_sr': 'name_sr', 'name_sq': 'name_sq', 'name_so': 'name_so', 'name_sms': 'name_sms', 'name_smn': 'name_smn', 'name_sm': 'name_sm', 'name_sl': 'name_sl', 'name_sk': 'name_sk', 'name_sh': 'name_sh', 'name_se': 'name_se', 'name_sco': 'name_sco', 'name_scn': 'name_scn', 'name_sc': 'name_sc', 'name_sah': 'name_sah', 'name_rw': 'name_rw', 'name_ru': 'name_ru', 'name_roa-t': 'name_roa-t', 'name_roa-r': 'name_roa-r', 'name_ro': 'name_ro', 'name_qu': 'name_qu', 'name_pt': 'name_pt', 'name_ps': 'name_ps', 'name_pnt': 'name_pnt', 'name_pnb': 'name_pnb', 'name_pms': 'name_pms', 'name_pl': 'name_pl', 'name_pih': 'name_pih', 'name_pcd': 'name_pcd', 'name_pap': 'name_pap', 'name_pa': 'name_pa', 'name_os': 'name_os', 'name_or': 'name_or', 'name_oc': 'name_oc', 'name_nv': 'name_nv', 'name_nrm': 'name_nrm', 'name_nov': 'name_nov', 'name_no': 'name_no', 'name_nn': 'name_nn', 'name_nl': 'name_nl', 'name_ne': 'name_ne', 'name_nds-n': 'name_nds-n', 'name_nds': 'name_nds', 'name_nap': 'name_nap', 'name_nan': 'name_nan', 'name_nah': 'name_nah', 'name_na': 'name_na', 'name_my': 'name_my', 'name_mt': 'name_mt', 'name_ms': 'name_ms', 'name_mr': 'name_mr', 'name_ml': 'name_ml', 'name_mk': 'name_mk', 'name_mi': 'name_mi', 'name_mhr': 'name_mhr', 'name_lv': 'name_lv', 'name_ltg': 'name_ltg', 'name_lt': 'name_lt', 'name_ln': 'name_ln', 'name_lmo': 'name_lmo', 'name_lij': 'name_lij', 'name_li': 'name_li', 'name_lb': 'name_lb', 'name_lad': 'name_lad', 'name_la': 'name_la', 'name_ky': 'name_ky', 'name_kw': 'name_kw', 'name_kv': 'name_kv', 'name_ku': 'name_ku', 'name_krc': 'name_krc', 'name_koi': 'name_koi', 'name_ko': 'name_ko', 'name_kn': 'name_kn', 'name_kl': 'name_kl', 'name_kk': 'name_kk', 'name_kg': 'name_kg', 'name_kbd': 'name_kbd', 'name_kab': 'name_kab', 'name_kaa': 'name_kaa', 'name_ka': 'name_ka', 'name_jv': 'name_jv', 'name_jbo': 'name_jbo', 'name_ja': 'name_ja', 'name_it': 'name_it', 'name_is': 'name_is', 'name_io': 'name_io', 'name_ilo': 'name_ilo', 'name_ie': 'name_ie', 'name_id': 'name_id', 'name_ia': 'name_ia', 'name_hy': 'name_hy', 'name_hu': 'name_hu', 'name_ht': 'name_ht', 'name_hsb': 'name_hsb', 'name_hr': 'name_hr', 'name_hif': 'name_hif', 'name_he': 'name_he', 'name_haw': 'name_haw', 'name_hak': 'name_hak', 'name_gv': 'name_gv', 'name_gu': 'name_gu', 'name_gn': 'name_gn', 'name_gl': 'name_gl', 'name_gd': 'name_gd', 'name_gag': 'name_gag', 'name_ga': 'name_ga', 'name_fy': 'name_fy', 'name_frr': 'name_frr', 'name_frp': 'name_frp', 'name_fr': 'name_fr', 'name_fo': 'name_fo', 'name_fi': 'name_fi', 'name_fa': 'name_fa', 'name_ext': 'name_ext', 'name_eu': 'name_eu', 'name_et': 'name_et', 'name_es': 'name_es', 'name_eo': 'name_eo', 'name_en': 'name_en', 'name_el': 'name_el', 'name_ee': 'name_ee', 'name_dv': 'name_dv', 'name_dsb': 'name_dsb', 'name_diq': 'name_diq', 'name_de': 'name_de', 'name_da': 'name_da', 'name_cy': 'name_cy', 'name_cv': 'name_cv', 'name_cu': 'name_cu', 'name_csb': 'name_csb', 'name_cs': 'name_cs', 'name_crh': 'name_crh', 'name_cnr-C': 'name_cnr-C', 'name_cnr': 'name_cnr', 'name_ckb': 'name_ckb', 'name_ceb': 'name_ceb', 'name_ce': 'name_ce', 'name_ca': 'name_ca', 'name_bxr': 'name_bxr', 'name_bs': 'name_bs', 'name_br': 'name_br', 'name_bpy': 'name_bpy', 'name_bo': 'name_bo', 'name_bn': 'name_bn', 'name_bi': 'name_bi', 'name_bg': 'name_bg', 'name_be-ta': 'name_be-ta', 'name_be': 'name_be', 'name_bcl': 'name_bcl', 'name_bat-s': 'name_bat-s', 'name_bar': 'name_bar', 'name_ba': 'name_ba', 'name_az': 'name_az', 'name_av': 'name_av', 'name_ast': 'name_ast', 'name_arz': 'name_arz', 'name_arc': 'name_arc', 'name_ar': 'name_ar', 'name_ang': 'name_ang', 'name_an': 'name_an', 'name_am': 'name_am', 'name_als': 'name_als', 'name_af': 'name_af', 'name_ace': 'name_ace', 'name': 'name', 'int_name': 'int_name', 'flag': 'flag', 'admin_leve': 'admin_leve', 'ISO3166-1_': 'ISO3166-1_', 'ISO3166-_1': 'ISO3166-_1', 'ISO3166-_2': 'ISO3166-_2', 'ISO3166-1': 'ISO3166-1', });
lyr_Rijeke_grad_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'place': 'place', 'source_lak': 'source_lak', 'intermitte': 'intermitte', 'man_made': 'man_made', 'contaminat': 'contaminat', 'wikidata': 'wikidata', 'name_sr': 'name_sr', 'name': 'name', 'boat': 'boat', 'water': 'water', 'type': 'type', });
lyr_Groblja_grad_8.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Zelene_povrine_9.set('fieldAliases', {'id': 'id', });
lyr_Rijeke_10.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Parkovi_11.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_Park_uma_12.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Trimstaza_13.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Plantae_vinograd_14.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_Plantae_vonjak_15.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Obrazovne_ustanove_16.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Biblioteke_17.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Pozorita_18.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Trni_centar_19.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_Sud_20.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Zdravstvene_ustanove_21.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Dom_zdravlja_22.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Ustanove_23.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Kasarna_24.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Muzeji_25.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_Znamenitosti_26.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_Crkve_27.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_Rekreacija_28.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Groblje_29.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Aerodrom_30.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Autobuskastanica_31.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_eljeznikastanica_32.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_Damije_33.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Pumpa_34.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', });
lyr_Restorani_35.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_Marketi_36.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_Hoteli_37.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_Kafii_38.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Link': 'Link', });
lyr_putevi2_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'sidewalk_r': '', 'sidewalk_l': '', 'maxspeed_f': '', 'maxspeed_b': '', 'parking_bo': '', 'destinatio': '', 'placement_': '', 'maxheight': '', 'tunnel': '', 'destinat_1': '', 'destinat_2': '', 'destinat_3': '', 'parking_ri': '', 'change_lan': '', 'change_l_1': '', 'overtaking': '', 'destinat_4': '', 'placemen_1': '', 'placement': '', 'name_sr-La': '', 'ref': '', 'start_date': '', 'name_fr': '', 'name_es': '', 'name_en': '', 'name_de': '', 'length': '', 'junction': '', 'cycleway': '', 'source_sur': '', 'maxweight_': '', 'layer': '', 'bridge': '', 'turn_lanes': '', 'width': '', 'turn_lan_1': '', 'maxspeed_t': '', 'lanes_forw': '', 'lanes_back': '', 'turn_lan_2': '', 'sidewalk': '', 'int_name': '', 'foot': '', 'shoulder': '', 'old_name': '', 'bicycle': '', 'lit': '', 'smoothness': '', 'destinat_5': '', 'destinat_6': '', 'destinat_7': '', 'colour_tex': '', 'colour_bac': '', 'colour_arr': '', 'surface': '', 'parking__1': '', 'parking__2': '', 'oneway': '', 'name_sr': '', 'name': '', 'maxspeed': '', 'lanes': '', });
lyr_putevi1_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'maxspeed_f': '', 'maxspeed_b': '', 'destinatio': '', 'destinat_1': '', 'destinat_2': '', 'sidewalk_b': '', 'placement_': '', 'placemen_1': '', 'sidewalk_r': '', 'sidewalk_1': '', 'sidewalk_l': '', 'parking_ri': '', 'parking_bo': '', 'destinat_3': '', 'destinat_4': '', 'destinat_5': '', 'colour_tex': '', 'colour_bac': '', 'colour_arr': '', 'smoothness': '', 'turn_lanes': '', 'placement': '', 'int_name': '', 'maxweight_': '', 'layer': '', 'bridge': '', 'shoulder': '', 'junction': '', 'turn_lan_1': '', 'source_sur': '', 'sidewalk': '', 'maxspeed_t': '', 'lit': '', 'foot': '', 'bicycle': '', 'width': '', 'turn_lan_2': '', 'oneway': '', 'name_rs': '', 'maxspeed': '', 'surface': '', 'name_sr': '', 'name': '', 'lanes_forw': '', 'lanes_back': '', 'lanes': '', });
lyr_putevi_grad_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'destinatio': '', 'parking_bo': '', 'check_date': '', 'sidewalk_r': '', 'access_lan': '', 'access_l_1': '', 'destinat_1': '', 'destinat_2': '', 'destinat_3': '', 'destinat_4': '', 'destinat_5': '', 'destinat_6': '', 'destinat_7': '', 'maxspeed_c': '', 'placement_': '', 'turn_lanes': '', 'turn_lan_1': '', 'name_hr': '', 'hazard': '', 'access': '', 'change_lan': '', 'change_l_1': '', 'name_sr-La': '', 'parking__1': '', 'maxspeed_f': '', 'maxspeed_b': '', 'placemen_1': '', 'lanes_forw': '', 'lanes_back': '', 'sidewalk_1': '', 'sidewalk_l': '', 'source_sur': '', 'placement': '', 'foot': '', 'tunnel': '', 'parking_ri': '', 'maxheight': '', 'destinat_8': '', 'destinat_9': '', 'destinat10': '', 'colour_tex': '', 'colour_bac': '', 'colour_arr': '', 'maxweight_': '', 'change': '', 'embankment': '', 'junction': '', 'change_l_2': '', 'turn_lan_2': '', 'sidewalk_b': '', 'old_ref': '', 'layer': '', 'bridge': '', 'sidewalk': '', 'name_sr': '', 'name': '', 'lit': '', 'int_ref': '', 'surface': '', 'smoothness': '', 'smoothne_1': '', 'shoulder': '', 'ref': '', 'overtaking': '', 'oneway': '', 'maxspeed': '', 'lanes': '', });
lyr_Zgrade_grad_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'short_name': 'TextEdit', 'old_name_r': 'TextEdit', 'population': 'TextEdit', 'old_name_1': 'TextEdit', 'place': 'TextEdit', 'capital': 'TextEdit', 'old_name_h': 'TextEdit', 'old_name_s': 'TextEdit', 'old_name_2': 'TextEdit', 'old_name_m': 'TextEdit', 'old_name_e': 'TextEdit', 'old_name_c': 'TextEdit', 'old_name_3': 'TextEdit', 'old_name': 'TextEdit', 'name_zh-Ha': 'TextEdit', 'ISO3166-2': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'timezone': 'TextEdit', 'ref_nuts_3': 'TextEdit', 'ref_nuts_2': 'TextEdit', 'ref_nuts_1': 'TextEdit', 'ref_nuts': 'TextEdit', 'official_n': 'TextEdit', 'name_zh-_1': 'TextEdit', 'name_zh-_2': 'TextEdit', 'name_zh-_3': 'TextEdit', 'name_zh': 'TextEdit', 'name_zea': 'TextEdit', 'name_yue': 'TextEdit', 'name_yo': 'TextEdit', 'name_yi': 'TextEdit', 'name_xmf': 'TextEdit', 'name_xal': 'TextEdit', 'name_wuu': 'TextEdit', 'name_wo': 'TextEdit', 'name_war': 'TextEdit', 'name_vro': 'TextEdit', 'name_vo': 'TextEdit', 'name_vls': 'TextEdit', 'name_vi': 'TextEdit', 'name_vep': 'TextEdit', 'name_vec': 'TextEdit', 'name_uz': 'TextEdit', 'name_ur': 'TextEdit', 'name_uk': 'TextEdit', 'name_ug': 'TextEdit', 'name_tzl': 'TextEdit', 'name_tt': 'TextEdit', 'name_tr': 'TextEdit', 'name_tl': 'TextEdit', 'name_tk': 'TextEdit', 'name_th': 'TextEdit', 'name_tg': 'TextEdit', 'name_ta': 'TextEdit', 'name_szl': 'TextEdit', 'name_sw': 'TextEdit', 'name_sv': 'TextEdit', 'name_su': 'TextEdit', 'name_stq': 'TextEdit', 'name_ss': 'TextEdit', 'name_sr-La': 'TextEdit', 'name_sr': 'TextEdit', 'name_sq': 'TextEdit', 'name_so': 'TextEdit', 'name_sms': 'TextEdit', 'name_smn': 'TextEdit', 'name_sm': 'TextEdit', 'name_sl': 'TextEdit', 'name_sk': 'TextEdit', 'name_sh': 'TextEdit', 'name_se': 'TextEdit', 'name_sco': 'TextEdit', 'name_scn': 'TextEdit', 'name_sc': 'TextEdit', 'name_sah': 'TextEdit', 'name_rw': 'TextEdit', 'name_ru': 'TextEdit', 'name_roa-t': 'TextEdit', 'name_roa-r': 'TextEdit', 'name_ro': 'TextEdit', 'name_qu': 'TextEdit', 'name_pt': 'TextEdit', 'name_ps': 'TextEdit', 'name_pnt': 'TextEdit', 'name_pnb': 'TextEdit', 'name_pms': 'TextEdit', 'name_pl': 'TextEdit', 'name_pih': 'TextEdit', 'name_pcd': 'TextEdit', 'name_pap': 'TextEdit', 'name_pa': 'TextEdit', 'name_os': 'TextEdit', 'name_or': 'TextEdit', 'name_oc': 'TextEdit', 'name_nv': 'TextEdit', 'name_nrm': 'TextEdit', 'name_nov': 'TextEdit', 'name_no': 'TextEdit', 'name_nn': 'TextEdit', 'name_nl': 'TextEdit', 'name_ne': 'TextEdit', 'name_nds-n': 'TextEdit', 'name_nds': 'TextEdit', 'name_nap': 'TextEdit', 'name_nan': 'TextEdit', 'name_nah': 'TextEdit', 'name_na': 'TextEdit', 'name_my': 'TextEdit', 'name_mt': 'TextEdit', 'name_ms': 'TextEdit', 'name_mr': 'TextEdit', 'name_ml': 'TextEdit', 'name_mk': 'TextEdit', 'name_mi': 'TextEdit', 'name_mhr': 'TextEdit', 'name_lv': 'TextEdit', 'name_ltg': 'TextEdit', 'name_lt': 'TextEdit', 'name_ln': 'TextEdit', 'name_lmo': 'TextEdit', 'name_lij': 'TextEdit', 'name_li': 'TextEdit', 'name_lb': 'TextEdit', 'name_lad': 'TextEdit', 'name_la': 'TextEdit', 'name_ky': 'TextEdit', 'name_kw': 'TextEdit', 'name_kv': 'TextEdit', 'name_ku': 'TextEdit', 'name_krc': 'TextEdit', 'name_koi': 'TextEdit', 'name_ko': 'TextEdit', 'name_kn': 'TextEdit', 'name_kl': 'TextEdit', 'name_kk': 'TextEdit', 'name_kg': 'TextEdit', 'name_kbd': 'TextEdit', 'name_kab': 'TextEdit', 'name_kaa': 'TextEdit', 'name_ka': 'TextEdit', 'name_jv': 'TextEdit', 'name_jbo': 'TextEdit', 'name_ja': 'TextEdit', 'name_it': 'TextEdit', 'name_is': 'TextEdit', 'name_io': 'TextEdit', 'name_ilo': 'TextEdit', 'name_ie': 'TextEdit', 'name_id': 'TextEdit', 'name_ia': 'TextEdit', 'name_hy': 'TextEdit', 'name_hu': 'TextEdit', 'name_ht': 'TextEdit', 'name_hsb': 'TextEdit', 'name_hr': 'TextEdit', 'name_hif': 'TextEdit', 'name_he': 'TextEdit', 'name_haw': 'TextEdit', 'name_hak': 'TextEdit', 'name_gv': 'TextEdit', 'name_gu': 'TextEdit', 'name_gn': 'TextEdit', 'name_gl': 'TextEdit', 'name_gd': 'TextEdit', 'name_gag': 'TextEdit', 'name_ga': 'TextEdit', 'name_fy': 'TextEdit', 'name_frr': 'TextEdit', 'name_frp': 'TextEdit', 'name_fr': 'TextEdit', 'name_fo': 'TextEdit', 'name_fi': 'TextEdit', 'name_fa': 'TextEdit', 'name_ext': 'TextEdit', 'name_eu': 'TextEdit', 'name_et': 'TextEdit', 'name_es': 'TextEdit', 'name_eo': 'TextEdit', 'name_en': 'TextEdit', 'name_el': 'TextEdit', 'name_ee': 'TextEdit', 'name_dv': 'TextEdit', 'name_dsb': 'TextEdit', 'name_diq': 'TextEdit', 'name_de': 'TextEdit', 'name_da': 'TextEdit', 'name_cy': 'TextEdit', 'name_cv': 'TextEdit', 'name_cu': 'TextEdit', 'name_csb': 'TextEdit', 'name_cs': 'TextEdit', 'name_crh': 'TextEdit', 'name_cnr-C': 'TextEdit', 'name_cnr': 'TextEdit', 'name_ckb': 'TextEdit', 'name_ceb': 'TextEdit', 'name_ce': 'TextEdit', 'name_ca': 'TextEdit', 'name_bxr': 'TextEdit', 'name_bs': 'TextEdit', 'name_br': 'TextEdit', 'name_bpy': 'TextEdit', 'name_bo': 'TextEdit', 'name_bn': 'TextEdit', 'name_bi': 'TextEdit', 'name_bg': 'TextEdit', 'name_be-ta': 'TextEdit', 'name_be': 'TextEdit', 'name_bcl': 'TextEdit', 'name_bat-s': 'TextEdit', 'name_bar': 'TextEdit', 'name_ba': 'TextEdit', 'name_az': 'TextEdit', 'name_av': 'TextEdit', 'name_ast': 'TextEdit', 'name_arz': 'TextEdit', 'name_arc': 'TextEdit', 'name_ar': 'TextEdit', 'name_ang': 'TextEdit', 'name_an': 'TextEdit', 'name_am': 'TextEdit', 'name_als': 'TextEdit', 'name_af': 'TextEdit', 'name_ace': 'TextEdit', 'name': 'TextEdit', 'int_name': 'TextEdit', 'flag': 'TextEdit', 'admin_leve': 'TextEdit', 'ISO3166-1_': 'TextEdit', 'ISO3166-_1': 'TextEdit', 'ISO3166-_2': 'TextEdit', 'ISO3166-1': 'TextEdit', });
lyr_Rijeke_grad_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'natural': 'TextEdit', 'place': 'TextEdit', 'source_lak': 'TextEdit', 'intermitte': 'TextEdit', 'man_made': 'TextEdit', 'contaminat': 'TextEdit', 'wikidata': 'TextEdit', 'name_sr': 'TextEdit', 'name': 'TextEdit', 'boat': 'TextEdit', 'water': 'TextEdit', 'type': 'TextEdit', });
lyr_Groblja_grad_8.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Zelene_povrine_9.set('fieldImages', {'id': 'TextEdit', });
lyr_Rijeke_10.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Parkovi_11.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_Park_uma_12.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Trimstaza_13.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Plantae_vinograd_14.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_Plantae_vonjak_15.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Obrazovne_ustanove_16.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Biblioteke_17.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Pozorita_18.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Trni_centar_19.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_Sud_20.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Zdravstvene_ustanove_21.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Dom_zdravlja_22.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Ustanove_23.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Kasarna_24.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Muzeji_25.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_Znamenitosti_26.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_Crkve_27.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_Rekreacija_28.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Groblje_29.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Aerodrom_30.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Autobuskastanica_31.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_eljeznikastanica_32.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_Damije_33.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Pumpa_34.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', });
lyr_Restorani_35.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_Marketi_36.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_Hoteli_37.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_Kafii_38.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Link': 'TextEdit', });
lyr_putevi2_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'sidewalk_r': 'no label', 'sidewalk_l': 'no label', 'maxspeed_f': 'no label', 'maxspeed_b': 'no label', 'parking_bo': 'no label', 'destinatio': 'no label', 'placement_': 'no label', 'maxheight': 'no label', 'tunnel': 'no label', 'destinat_1': 'no label', 'destinat_2': 'no label', 'destinat_3': 'no label', 'parking_ri': 'no label', 'change_lan': 'no label', 'change_l_1': 'no label', 'overtaking': 'no label', 'destinat_4': 'no label', 'placemen_1': 'no label', 'placement': 'no label', 'name_sr-La': 'no label', 'ref': 'no label', 'start_date': 'no label', 'name_fr': 'no label', 'name_es': 'no label', 'name_en': 'no label', 'name_de': 'no label', 'length': 'no label', 'junction': 'no label', 'cycleway': 'no label', 'source_sur': 'no label', 'maxweight_': 'no label', 'layer': 'no label', 'bridge': 'no label', 'turn_lanes': 'no label', 'width': 'no label', 'turn_lan_1': 'no label', 'maxspeed_t': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'turn_lan_2': 'no label', 'sidewalk': 'no label', 'int_name': 'no label', 'foot': 'no label', 'shoulder': 'no label', 'old_name': 'no label', 'bicycle': 'no label', 'lit': 'no label', 'smoothness': 'no label', 'destinat_5': 'no label', 'destinat_6': 'no label', 'destinat_7': 'no label', 'colour_tex': 'no label', 'colour_bac': 'no label', 'colour_arr': 'no label', 'surface': 'no label', 'parking__1': 'no label', 'parking__2': 'no label', 'oneway': 'no label', 'name_sr': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_putevi1_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'maxspeed_f': 'no label', 'maxspeed_b': 'no label', 'destinatio': 'no label', 'destinat_1': 'no label', 'destinat_2': 'no label', 'sidewalk_b': 'no label', 'placement_': 'no label', 'placemen_1': 'no label', 'sidewalk_r': 'no label', 'sidewalk_1': 'no label', 'sidewalk_l': 'no label', 'parking_ri': 'no label', 'parking_bo': 'no label', 'destinat_3': 'no label', 'destinat_4': 'no label', 'destinat_5': 'no label', 'colour_tex': 'no label', 'colour_bac': 'no label', 'colour_arr': 'no label', 'smoothness': 'no label', 'turn_lanes': 'no label', 'placement': 'no label', 'int_name': 'no label', 'maxweight_': 'no label', 'layer': 'no label', 'bridge': 'no label', 'shoulder': 'no label', 'junction': 'no label', 'turn_lan_1': 'no label', 'source_sur': 'no label', 'sidewalk': 'no label', 'maxspeed_t': 'no label', 'lit': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'width': 'no label', 'turn_lan_2': 'no label', 'oneway': 'no label', 'name_rs': 'no label', 'maxspeed': 'no label', 'surface': 'no label', 'name_sr': 'no label', 'name': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'lanes': 'no label', });
lyr_putevi_grad_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'destinatio': 'no label', 'parking_bo': 'no label', 'check_date': 'no label', 'sidewalk_r': 'no label', 'access_lan': 'no label', 'access_l_1': 'no label', 'destinat_1': 'no label', 'destinat_2': 'no label', 'destinat_3': 'no label', 'destinat_4': 'no label', 'destinat_5': 'no label', 'destinat_6': 'no label', 'destinat_7': 'no label', 'maxspeed_c': 'no label', 'placement_': 'no label', 'turn_lanes': 'no label', 'turn_lan_1': 'no label', 'name_hr': 'no label', 'hazard': 'no label', 'access': 'no label', 'change_lan': 'no label', 'change_l_1': 'no label', 'name_sr-La': 'no label', 'parking__1': 'no label', 'maxspeed_f': 'no label', 'maxspeed_b': 'no label', 'placemen_1': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'sidewalk_1': 'no label', 'sidewalk_l': 'no label', 'source_sur': 'no label', 'placement': 'no label', 'foot': 'no label', 'tunnel': 'no label', 'parking_ri': 'no label', 'maxheight': 'no label', 'destinat_8': 'no label', 'destinat_9': 'no label', 'destinat10': 'no label', 'colour_tex': 'no label', 'colour_bac': 'no label', 'colour_arr': 'no label', 'maxweight_': 'no label', 'change': 'no label', 'embankment': 'no label', 'junction': 'no label', 'change_l_2': 'no label', 'turn_lan_2': 'no label', 'sidewalk_b': 'no label', 'old_ref': 'no label', 'layer': 'no label', 'bridge': 'no label', 'sidewalk': 'no label', 'name_sr': 'no label', 'name': 'no label', 'lit': 'no label', 'int_ref': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'smoothne_1': 'no label', 'shoulder': 'no label', 'ref': 'no label', 'overtaking': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_Zgrade_grad_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'short_name': 'no label', 'old_name_r': 'no label', 'population': 'no label', 'old_name_1': 'no label', 'place': 'no label', 'capital': 'no label', 'old_name_h': 'no label', 'old_name_s': 'no label', 'old_name_2': 'no label', 'old_name_m': 'no label', 'old_name_e': 'no label', 'old_name_c': 'no label', 'old_name_3': 'no label', 'old_name': 'no label', 'name_zh-Ha': 'no label', 'ISO3166-2': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'timezone': 'no label', 'ref_nuts_3': 'no label', 'ref_nuts_2': 'no label', 'ref_nuts_1': 'no label', 'ref_nuts': 'no label', 'official_n': 'no label', 'name_zh-_1': 'no label', 'name_zh-_2': 'no label', 'name_zh-_3': 'no label', 'name_zh': 'no label', 'name_zea': 'no label', 'name_yue': 'no label', 'name_yo': 'no label', 'name_yi': 'no label', 'name_xmf': 'no label', 'name_xal': 'no label', 'name_wuu': 'no label', 'name_wo': 'no label', 'name_war': 'no label', 'name_vro': 'no label', 'name_vo': 'no label', 'name_vls': 'no label', 'name_vi': 'no label', 'name_vep': 'no label', 'name_vec': 'no label', 'name_uz': 'no label', 'name_ur': 'no label', 'name_uk': 'no label', 'name_ug': 'no label', 'name_tzl': 'no label', 'name_tt': 'no label', 'name_tr': 'no label', 'name_tl': 'no label', 'name_tk': 'no label', 'name_th': 'no label', 'name_tg': 'no label', 'name_ta': 'no label', 'name_szl': 'no label', 'name_sw': 'no label', 'name_sv': 'no label', 'name_su': 'no label', 'name_stq': 'no label', 'name_ss': 'no label', 'name_sr-La': 'no label', 'name_sr': 'no label', 'name_sq': 'no label', 'name_so': 'no label', 'name_sms': 'no label', 'name_smn': 'no label', 'name_sm': 'no label', 'name_sl': 'no label', 'name_sk': 'no label', 'name_sh': 'no label', 'name_se': 'no label', 'name_sco': 'no label', 'name_scn': 'no label', 'name_sc': 'no label', 'name_sah': 'no label', 'name_rw': 'no label', 'name_ru': 'no label', 'name_roa-t': 'no label', 'name_roa-r': 'no label', 'name_ro': 'no label', 'name_qu': 'no label', 'name_pt': 'no label', 'name_ps': 'no label', 'name_pnt': 'no label', 'name_pnb': 'no label', 'name_pms': 'no label', 'name_pl': 'no label', 'name_pih': 'no label', 'name_pcd': 'no label', 'name_pap': 'no label', 'name_pa': 'no label', 'name_os': 'no label', 'name_or': 'no label', 'name_oc': 'no label', 'name_nv': 'no label', 'name_nrm': 'no label', 'name_nov': 'no label', 'name_no': 'no label', 'name_nn': 'no label', 'name_nl': 'no label', 'name_ne': 'no label', 'name_nds-n': 'no label', 'name_nds': 'no label', 'name_nap': 'no label', 'name_nan': 'no label', 'name_nah': 'no label', 'name_na': 'no label', 'name_my': 'no label', 'name_mt': 'no label', 'name_ms': 'no label', 'name_mr': 'no label', 'name_ml': 'no label', 'name_mk': 'no label', 'name_mi': 'no label', 'name_mhr': 'no label', 'name_lv': 'no label', 'name_ltg': 'no label', 'name_lt': 'no label', 'name_ln': 'no label', 'name_lmo': 'no label', 'name_lij': 'no label', 'name_li': 'no label', 'name_lb': 'no label', 'name_lad': 'no label', 'name_la': 'no label', 'name_ky': 'no label', 'name_kw': 'no label', 'name_kv': 'no label', 'name_ku': 'no label', 'name_krc': 'no label', 'name_koi': 'no label', 'name_ko': 'no label', 'name_kn': 'no label', 'name_kl': 'no label', 'name_kk': 'no label', 'name_kg': 'no label', 'name_kbd': 'no label', 'name_kab': 'no label', 'name_kaa': 'no label', 'name_ka': 'no label', 'name_jv': 'no label', 'name_jbo': 'no label', 'name_ja': 'no label', 'name_it': 'no label', 'name_is': 'no label', 'name_io': 'no label', 'name_ilo': 'no label', 'name_ie': 'no label', 'name_id': 'no label', 'name_ia': 'no label', 'name_hy': 'no label', 'name_hu': 'no label', 'name_ht': 'no label', 'name_hsb': 'no label', 'name_hr': 'no label', 'name_hif': 'no label', 'name_he': 'no label', 'name_haw': 'no label', 'name_hak': 'no label', 'name_gv': 'no label', 'name_gu': 'no label', 'name_gn': 'no label', 'name_gl': 'no label', 'name_gd': 'no label', 'name_gag': 'no label', 'name_ga': 'no label', 'name_fy': 'no label', 'name_frr': 'no label', 'name_frp': 'no label', 'name_fr': 'no label', 'name_fo': 'no label', 'name_fi': 'no label', 'name_fa': 'no label', 'name_ext': 'no label', 'name_eu': 'no label', 'name_et': 'no label', 'name_es': 'no label', 'name_eo': 'no label', 'name_en': 'no label', 'name_el': 'no label', 'name_ee': 'no label', 'name_dv': 'no label', 'name_dsb': 'no label', 'name_diq': 'no label', 'name_de': 'no label', 'name_da': 'no label', 'name_cy': 'no label', 'name_cv': 'no label', 'name_cu': 'no label', 'name_csb': 'no label', 'name_cs': 'no label', 'name_crh': 'no label', 'name_cnr-C': 'no label', 'name_cnr': 'no label', 'name_ckb': 'no label', 'name_ceb': 'no label', 'name_ce': 'no label', 'name_ca': 'no label', 'name_bxr': 'no label', 'name_bs': 'no label', 'name_br': 'no label', 'name_bpy': 'no label', 'name_bo': 'no label', 'name_bn': 'no label', 'name_bi': 'no label', 'name_bg': 'no label', 'name_be-ta': 'no label', 'name_be': 'no label', 'name_bcl': 'no label', 'name_bat-s': 'no label', 'name_bar': 'no label', 'name_ba': 'no label', 'name_az': 'no label', 'name_av': 'no label', 'name_ast': 'no label', 'name_arz': 'no label', 'name_arc': 'no label', 'name_ar': 'no label', 'name_ang': 'no label', 'name_an': 'no label', 'name_am': 'no label', 'name_als': 'no label', 'name_af': 'no label', 'name_ace': 'no label', 'name': 'no label', 'int_name': 'no label', 'flag': 'no label', 'admin_leve': 'no label', 'ISO3166-1_': 'no label', 'ISO3166-_1': 'no label', 'ISO3166-_2': 'no label', 'ISO3166-1': 'no label', });
lyr_Rijeke_grad_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'natural': 'no label', 'place': 'no label', 'source_lak': 'no label', 'intermitte': 'no label', 'man_made': 'no label', 'contaminat': 'no label', 'wikidata': 'no label', 'name_sr': 'no label', 'name': 'no label', 'boat': 'no label', 'water': 'no label', 'type': 'no label', });
lyr_Groblja_grad_8.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', });
lyr_Zelene_povrine_9.set('fieldLabels', {'id': 'no label', });
lyr_Rijeke_10.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Parkovi_11.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'inline label - visible with data', });
lyr_Park_uma_12.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Trimstaza_13.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Plantae_vinograd_14.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'inline label - visible with data', });
lyr_Plantae_vonjak_15.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Obrazovne_ustanove_16.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Biblioteke_17.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Pozorita_18.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Trni_centar_19.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'no label', });
lyr_Sud_20.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Zdravstvene_ustanove_21.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Dom_zdravlja_22.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Ustanove_23.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Kasarna_24.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Muzeji_25.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'inline label - visible with data', });
lyr_Znamenitosti_26.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'inline label - visible with data', });
lyr_Crkve_27.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'no label', });
lyr_Rekreacija_28.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Groblje_29.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Aerodrom_30.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Autobuskastanica_31.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'inline label - visible with data', });
lyr_eljeznikastanica_32.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'inline label - visible with data', });
lyr_Damije_33.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Pumpa_34.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', });
lyr_Restorani_35.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'inline label - visible with data', });
lyr_Marketi_36.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'no label', });
lyr_Hoteli_37.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'inline label - always visible', });
lyr_Kafii_38.set('fieldLabels', {'id': 'no label', 'Naziv': 'inline label - always visible', 'Link': 'inline label - visible with data', });
lyr_Kafii_38.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});