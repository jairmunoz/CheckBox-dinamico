import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

/**
 * @title Basic checkboxes
 */
@Component({
  selector: 'checkbox-overview-example',
  templateUrl: 'checkbox-overview-example.html',
  styleUrls: ['checkbox-overview-example.css'],
})
export class CheckboxOverviewExample {
  selection = new SelectionModel<any>(true, []);

  tareas = [
    { id: 12, name: 'Primary', completed: false, color: 'primary' },
    { id: 13, name: 'Accent', completed: false, color: 'accent' },
    { id: 14, name: 'Warn', completed: false, color: 'warn' },
  ];
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
