import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas : Persona [] = [
    {nombre : 'Juan', edad: 22},
    {nombre : 'Maria', edad: 19},
    {nombre : 'Ana', edad: 28},
    {nombre : 'Claudia', edad: 32},
    {nombre : 'Mario', edad: 26}
  ] 

}
