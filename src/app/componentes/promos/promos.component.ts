import { Component } from '@angular/core';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent {

  verCard(){
    alert ("Inicia sesión para continuar 😉")
  }

  editarCard(){
    alert ("La función editar aún no está disponible 😉")
  }
}
