import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  name = new FormControl('', Validators.required); // deben ser la instancia de una clase form Control para sincronizar con los inputs del html
  email = new FormControl('', [Validators.required, Validators.email]);


}
