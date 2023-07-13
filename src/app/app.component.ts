import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  consoleOutput: string = '';

  ngOnInit() {
    const myObservable = of(1, 2, 3);

    // Create observer object
    const myObserver = {
      next: (x: number) => {
        this.consoleOutput += 'Observer got a next value: ' + x + '<br>';
      },
      error: (err: Error) => {
        this.consoleOutput += 'Observer got an error: ' + err + '<br>';
      },
      complete: () => {
        this.consoleOutput += 'Observer got a complete notification' + '<br>';
      },
    };

    // Execute with the observer object
    myObservable.subscribe(myObserver);
  }
}
