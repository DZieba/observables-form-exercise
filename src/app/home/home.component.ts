import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Observer, Subscription} from "rxjs";
import 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numb:number;
  infoplace: string = "";
  numbersObsSubscr:Subscription;
  otherObsSubscr:Subscription;

  ngOnInit() {
    const myNumbers=Observable.interval(1000)
      .map(
        (data:number)=>{
          return data*2;
        }
      );
    this.numbersObsSubscr=myNumbers.subscribe(
      (number:number)=> {
        this.numb=number;
      }

    )


    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first value');
      }, 2000);
      setTimeout(() => {
        observer.next('first value');
      }, 4000);
      setTimeout(() => {
        observer.error('error message');
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 6000);
    });
    this.otherObsSubscr=myObservable.subscribe(
      (data: string) => {
        this.infoplace = data;
      },
      (error: string) => {
        this.infoplace = error;
      },
      () => {
        this.infoplace = "completed";
      }
    )
  }
  stopTimer(){
    this.numbersObsSubscr.unsubscribe()
  }
  ngOnDestroy(){
this.numbersObsSubscr.unsubscribe();
this.otherObsSubscr.unsubscribe();
  }
}

    /*
    const myNumbers = Observable.interval(1000);
    myNumbers.subscribe(
      (number:number) => {
        this.numb=number;
      }
    )
  }
  */




