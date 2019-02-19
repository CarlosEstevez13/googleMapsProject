import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MapaProvider } from './../../providers/mapa/mapa';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {


  @ViewChild("map") mapElement;
  map: any;
  service: any;

  form: FormGroup;
  campos:any = {
    texto:null
  }
  constructor(private mapaProvider: MapaProvider,
              private fb: FormBuilder) {
                this.form = this.fb.group({
                  texto: new FormControl(this.campos.texto)
                });
  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){
    let coords = new google.maps.LatLng(7.1193,-73.1227)
    let mapOptions : google.maps.MapOptions = {
      center : coords,
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement,
      mapOptions)

    /* let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position : coords
    }) */
  }

   createMarker(place) {
    var marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });

    console.log(place.geometry.location.lat);
  }

  buscar(){
    var request = {
      query: this.form.value.texto,
      fields: ['name', 'geometry'],
    };

     this.service = new google.maps.places.PlacesService(this.map);

        this.service.findPlaceFromQuery(request, (results, status)=> {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              this.createMarker(results[i]);
              console.log(results[i]);
            }

            this.map.setCenter(results[0].geometry.location);
          }
        });
  }

}
