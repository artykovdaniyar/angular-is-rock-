import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { ComponentsModule } from './components/components.module';
import { DiractivesModule } from './diractives/diractives.module';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { LoginEffects } from '../pages/login/store';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    LoginEffects,
    {
      provide: USER_PROVIDED_EFFECTS,
      multi: true,
      useValue: [LoginEffects],
    },
  ],
  exports: [PipesModule, ComponentsModule, DiractivesModule],
})
export class SharedModule {}
