import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor(){

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs:', valor),
    //   error => console.warn('Error', error),
    //   () => console.info('Obs terminado')
    // );

    this.intervalSubs = this.retornaInvervalo().subscribe(console.log);

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaInvervalo(): Observable<number>{

    return interval(200)
            .pipe(
              //take(10),
              map( valor =>valor + 1 ),
              filter( valor => ( valor % 2 === 0 ) ? true : false ),
            );
            
  }

  retornaObservable(): Observable<number>{

    let i = -1;

    const obs$ = new Observable< number >( observer => {
      
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

    return obs$;

  }

}
