import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SideNavComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  todoForm: any;
  selectedMonth: string;
  expenses: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1800 }
  ];
  monthSelected: boolean = false;
  januaryExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1000 },
    { expenseType: 'Light Bills', expenseAmount: 500 },
  ];

  februaryExpense: any[] = [
    { expenseType: 'Essentials', expenseAmount: 200 },
    { expenseType: 'Light Bills', expenseAmount: 400 }
  ];

  marchExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1100 },
    { expenseType: 'Essentials', expenseAmount: 250 }
  ];

  aprilExpense: any[] = [
    { expenseType: 'Groceries', expenseAmount: 600 },
    { expenseType: 'Internet', expenseAmount: 300 }
  ];

  mayExpense: any[] = [
    { expenseType: 'Dining Out', expenseAmount: 800 },
    { expenseType: 'Transportation', expenseAmount: 200 }
  ];

  juneExpense: any[] = [
    { expenseType: 'Entertainment', expenseAmount: 500 },
    { expenseType: 'Utilities', expenseAmount: 350 }
  ];

  julyExpense: any[] = [
    { expenseType: 'Shopping', expenseAmount: 1200 },
    { expenseType: 'Healthcare', expenseAmount: 150 }
  ];

  augustExpense: any[] = [
    { expenseType: 'Travel', expenseAmount: 1500 },
    { expenseType: 'Clothing', expenseAmount: 400 }
  ];

  septemberExpense: any[] = [
    { expenseType: 'Insurance', expenseAmount: 700 },
    { expenseType: 'Education', expenseAmount: 600 }
  ];

  octoberExpense: any[] = [
    { expenseType: 'Utilities', expenseAmount: 450 },
    { expenseType: 'Groceries', expenseAmount: 550 }
  ];

  novemberExpense: any[] = [
    { expenseType: 'Entertainment', expenseAmount: 750 },
    { expenseType: 'Miscellaneous', expenseAmount: 200 }
  ];

  decemberExpense: any[] = [
    { expenseType: 'Gifts', expenseAmount: 1000 },
    { expenseType: 'Charity', expenseAmount: 300 }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.selectedMonth = new Date().toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }

  onSubmitExpense() {
    if (this.todoForm.valid) {
      const newExpense = this.todoForm.value;
      this.getFilteredExpenses().push(newExpense);
      this.todoForm.reset();
    }
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredExpenses();
  }

  getFilteredExpenses() {
    switch (this.selectedMonth) {
      case 'January':
        return this.januaryExpense;
      case 'February':
        return this.februaryExpense;
      case 'March':
        return this.marchExpense;
      case 'April':
        return this.aprilExpense;
      case 'May':
        return this.mayExpense;
      case 'June':
        return this.juneExpense;
      case 'July':
        return this.julyExpense;
      case 'August':
        return this.augustExpense;
      case 'September':
        return this.septemberExpense;
      case 'October':
        return this.octoberExpense;
      case 'November':
        return this.novemberExpense;
      case 'December':
        return this.decemberExpense;
      default:
        return [];
    }
  }

  calculateTotalExpense(month: string): number {
    return this.getFilteredExpenses().reduce((acc, curr) => acc + curr.expenseAmount, 0);
  }

  onSave() {
    if (this.todoForm.valid) {
      this.todoForm.reset({ month: this.selectedMonth });
      this.getFilteredExpenses();
    }
  }

  saveForm() {
    console.log("Form saved!");
  }

  onBack() {
    this.router.navigate(['/monefy/dashboard']);
  }
}
