import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor(){
    
    const obs$ = new Observable( observer => {
      let i = -1;
      
      const intervalo = setInterval( () => {

        i++;
        observer.next(i);

        if( i === 4 ){

          clearInterval( intervalo );
          observer.complete();

        }

        //Una vez llegado el error no continúa al complete
        if( i == 2 ){
          observer.error('i llegó al valor de 2');
          clearInterval( intervalo );
        }

      }, 1000)

    });

    obs$.pipe(
      retry(1)
    ).subscribe(
      valor => console.log('Subs:', valor),
      error => console.warn('Error', error),
      () => console.info('Obs terminado')
    );

  }

}
