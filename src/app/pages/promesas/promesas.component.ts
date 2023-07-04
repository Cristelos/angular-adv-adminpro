import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  ngOnInit(): void {
    
    // const promesa = new Promise( ( resolve, reject ) => {

    //   //promesa básica:
    //   if( false ){
    //     resolve('Hola Mundo');
    //   } else {
    //     reject('Algo salió mal');
    //   }
      
    // });

    // //Aquí resuelvo la promesa
    // promesa.then( ( mensaje ) => {
    //   console.log(mensaje);
      
    // })//a continuación manejo el error
    // .catch( error => console.log('Error en mi promesa',error));

    // console.log('Fin del init');
    
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
      
    });

  }

  getUsuarios(){

    const promesa = new Promise( resolve => {

      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => resolve( body.data ));

    });

    return promesa;

  } 

}
