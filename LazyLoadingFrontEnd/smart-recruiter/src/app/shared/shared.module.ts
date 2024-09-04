import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { SliderModule } from 'primeng/slider';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { ChartModule } from 'primeng/chart';
import { RouterLink } from '@angular/router';
import { KnobModule } from 'primeng/knob';
import { DividerModule } from 'primeng/divider';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    CardModule,
    TagModule,
    DropdownModule,
    DialogModule,
    ToastModule,
    TabViewModule,
    InputNumberModule,
    SliderModule,
    MultiSelectModule,
    InputTextModule,
    EditorModule,
    PanelModule,
    TooltipModule,
    ChartModule,
    RouterLink,
    KnobModule,
    DividerModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    CardModule,
    TagModule,
    DropdownModule,
    DialogModule,
    ToastModule,
    TabViewModule,
    InputNumberModule,
    SliderModule,
    MultiSelectModule,
    InputTextModule,
    EditorModule,
    PanelModule,
    TooltipModule,
    ChartModule,
    RouterLink,
    KnobModule,
    DividerModule,
  ],
})
export class SharedModule { }