import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  openAlert :boolean = false


  cerrarAlert(){
    this.openAlert = false
  }
  // mostrarCerraAlert = false

  mostrar_en_consola(name:string){
    console.log('name', name)
    this.openAlert = true
    // this.mostrarCerraAlert = true
  }


}
