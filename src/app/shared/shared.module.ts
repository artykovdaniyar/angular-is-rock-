import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { ComponentsModule } from './components/components.module';
import { DiractivesModule } from './diractives/diractives.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [PipesModule, ComponentsModule, DiractivesModule],
})
export class SharedModule {}
