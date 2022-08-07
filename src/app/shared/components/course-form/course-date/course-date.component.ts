import { Component, OnInit, forwardRef } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDateComponent),
      multi: true,
    },
  ],
})
export class CourseDateComponent implements OnInit, ControlValueAccessor {
  date!: FormControl;
  value!: string;
  changed!: (value: string) => void;
  touched!: () => void;
  isDisabled!: boolean;
  disabled!: boolean;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.date = this.formGroupDirective.control.get('date') as FormControl;
  }

  writeValue(value: string): void {
    this.value = value;
  }
  onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
