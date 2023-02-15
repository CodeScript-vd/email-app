import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnChanges {
  
  @Input()
  message?: string;

  @Output()
  showChange = new EventEmitter();
  
  @Input()
  show = false;
  
  ngOnChanges(): void {
    console.log(this.show)
    if (this.show) {
      let count = 0;
      let interval = setInterval(() => {
        if (count === 10) {
          this.show = false;
          this.showChange.emit(false);
          clearInterval(interval);
        };
        count ++;
      }, 1000)
    };
  }
}
