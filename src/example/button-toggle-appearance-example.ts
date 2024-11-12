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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleAppearanceExample {
  owners = new FormControl('');

  ownerList: string[] = [
    'Ответственный 1',
    'Ответственный 2',
    'Ответственный 3',
    'Ответственный 4',
    'Ответственный 5',
  ];
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
