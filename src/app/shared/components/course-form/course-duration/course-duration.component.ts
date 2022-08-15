import { Component, OnInit, forwardRef } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true,
    },
  ],
})
export class CourseDurationComponent implements OnInit, ControlValueAccessor {
  length!: FormControl;
  value!: number;
  changed!: (value: number) => void;
  touched!: () => void;
  isDisabled!: boolean;
  disabled!: boolean;

  constructor(
    private formGroupDirective: FormGroupDirective,
    public translate: TranslateService
  ) {}
  ngOnInit(): void {
    this.length = this.formGroupDirective.control.get('length') as FormControl;
  }

  writeValue(value: number): void {
    this.value = value;
  }
  onChange(event: Event): void {
    const value: number = +(<HTMLInputElement>event.target).value;
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
