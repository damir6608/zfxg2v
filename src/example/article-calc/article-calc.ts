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

/**
 * @title Button toggle appearance
 */
@Component({
  selector: 'article-calc',
  templateUrl: 'article-calc.html',
  styleUrl: 'article-calc.css',
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCalc {
  
  specArticlesColumnsToDisplay = ['number', 'article', 'quantity', 'cost', 'tax', 'sum', 'platform', 'calculation'];
  specArticles: SpecArticle[] = [
    { number: '1', article: 'QWE-ASD-211', quantity: '12', cost: '3214,222', tax: '436432,222', sum: '5624354,400', platform: 'Площадка 1', calculation: 'Расчет 1' },
    { number: '2', article: 'JIA-FGH-432', quantity: '33', cost: '23425,222', tax: '785268,333', sum: '76543456,400', platform: 'Площадка 2', calculation: 'Расчет 2' },
    { number: '3', article: 'GFT-ZXC-875', quantity: '24', cost: '523,222', tax: '36297,555', sum: '45644,400', platform: 'Площадка 3', calculation: 'Расчет 3' },
  ];
}

export interface SpecArticle {
  number: string,
  article: string,
  quantity: string,
  cost: string,
  tax: string,
  sum: string,
  platform: string,
  calculation: string
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
