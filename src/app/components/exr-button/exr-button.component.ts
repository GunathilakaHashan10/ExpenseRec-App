import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exr-button',
  templateUrl: './exr-button.component.html',
})
export class ExrButtonComponent {
  @Input() color: string = 'bg-blue-950';
  @Input() text: string = 'Button';
  @Input() textColor: string = 'text-white';
  @Input() width: string = 'auto';
  @Input() height: string = 'auto';
  @Input() onPress: Function | undefined;

  get tailStyles(): string {
    return `rounded-md py-2 px-4 shadow-md focus:outline-none text-[0.8rem]
     ${this.color} ${this.width} ${this.height} ${this.textColor}`;
  }

  onClickFunction(): void {
    if( this.onPress ) {
      this.onPress();
    }
  }
}
