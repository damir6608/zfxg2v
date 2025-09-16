import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import { ArticleCalc } from './article-calc/article-calc';
import { CommonModule } from '@angular/common';

/**
 * @title Button toggle appearance
 */
@Component({
  selector: 'button-toggle-appearance-example',
  templateUrl: 'button-toggle-appearance-example.html',
  styleUrl: 'button-toggle-appearance-example.css',
  standalone: true,
  imports: [
    MatButton,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatTableModule,
    ArticleCalc,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleAppearanceExample {
  saveMode: string = 'saveSelected';
  displayedColumns: string[] = ['sale', 'product', 'oldSum', 'sum'];

  summaryParams: SummaryParams[] = [
    {sale: 'Продажа 1', product: 'SIEM', oldSum: '34 697,00', sum: '74 542,00'},
    {sale: 'Продажа 2', product: 'NGFW', oldSum: '25 697,00', sum: '25 542,00'},
    {sale: 'Продажа 3', product: 'NAD', oldSum: '69 697,00', sum: '63 542,00'},
    {sale: 'Продажа 4', product: 'MaxPatrol 8', oldSum: '85 697,00', sum: '36 542,00'},
  ];

  specCalcs: SpecCalc[] = [
    { id: 'fe2b5aec-c5db-450c-b2ba-bd6782423d6f', name: 'Расчет спецификации 1', product: 'SIEM', sum: '6 985,00', isSelected: false},
    { id: '260e7067-53d8-4b63-bfb5-ef6def0e6f0b', name: 'Расчет спецификации 2', product: 'NGFW', sum: '85 274,00', isSelected: false},
    { id: '6e9aaf9e-1b64-45c7-bd9d-e59ddccb2d35', name: 'Расчет спецификации 3', product: 'NAD', sum: '9 652,00', isSelected: false},
    { id: 'f64453cb-316a-4dd8-9f24-ad63c30a2480', name: 'Расчет спецификации 4', product: 'MaxPatrol 8', sum: '5 285,00', isSelected: false},
    { id: '62154d1c-9705-4343-99c8-d1180315f603', name: 'Расчет спецификации 5', product: 'PT BlackBox', sum: '367 485,00', isSelected: false},
    { id: 'a70ead1c-0517-4b63-be1a-ab2bb3c73389', name: 'Расчет спецификации 6', product: 'NGFW', sum: '9 985,00', isSelected: false},
  ]

  specCalcs1: SpecCalc[] = [
    { id: 'f64453cb-316a-4dd8-9f24-ad63c30a2480', name: 'Расчет спецификации 1', product: 'MaxPatrol 8', sum: '5 285,00', isSelected: false},
    { id: '62154d1c-9705-4343-99c8-d1180315f603', name: 'Расчет спецификации 2', product: 'PT BlackBox', sum: '367 485,00', isSelected: false},
    { id: 'a70ead1c-0517-4b63-be1a-ab2bb3c73389', name: 'Расчет спецификации 3', product: 'NGFW', sum: '9 985,00', isSelected: false},
  ]

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return "9 815 687,57";
  }

  owners = new FormControl('');

  ownerList: string[] = [
    'Ответственный 1',
    'Ответственный 2',
    'Ответственный 3',
    'Ответственный 4',
    'Ответственный 5',
  ];
}

export interface SummaryParams {
  sale: string,
  product: string,
  oldSum: string,
  sum: string
}

export interface SpecCalc {
  id: string,
  name: string,
  product: string,
  sum: string,
  isSelected: boolean
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
