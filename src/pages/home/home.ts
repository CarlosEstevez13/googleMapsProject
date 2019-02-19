import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MapaProvider } from '../../providers/mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  form: FormGroup;
  campos:any = {
    texto:null
  }

  constructor(public navCtrl: NavController,
              private fb: FormBuilder,
              private mapaProvider: MapaProvider) {
                this.form = this.fb.group({
                  texto: new FormControl(this.campos.texto)
                });

  }

  buscar(){
    this.mapaProvider.setTexto(this.form.value.texto);
  }

}
