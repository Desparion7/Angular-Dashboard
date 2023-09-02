import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private categoriesService: CategoriesService) {}

  onSubmit(formData: NgForm) {
    const categoryData = {
      category: formData.value.category,
    };
    this.categoriesService.saveData(categoryData);
  }
}
