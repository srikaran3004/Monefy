import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {
  expenseForm: any;
  selectedMonth: string;
  expenses: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1800 },
    { month: 'April', expenseAmount: 1500 },
    { month: 'May', expenseAmount: 2000 },
    { month: 'June', expenseAmount: 1800 },
    { month: 'July', expenseAmount: 1500 },
    { month: 'August', expenseAmount: 2000 },
    { month: 'September', expenseAmount: 1800 },
    { month: 'October', expenseAmount: 1500 },
    { month: 'November', expenseAmount: 2000 },
    { month: 'December', expenseAmount: 1800 }
  ];
  monthSelected: boolean = false;
  januaryExpense: any[] = [
    { expenseType: 'Food', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  februaryExpense: any[] = [
    { expenseType: 'Travel', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 }
  ];
  marchExpense: any[] = [
    { expenseType: 'Food', expenseAmount: 1100 },
    { expenseType: 'Travel', expenseAmount: 250 }
  ];
  aprilExpense: any[] = [
    { expenseType: 'Food', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  mayExpense: any[] = [
    { expenseType: 'Travel', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 }
  ];
  juneExpense: any[] = [
    { expenseType: 'Food', expenseAmount: 1100 },
    { expenseType: 'Travel', expenseAmount: 250 }
  ];
  julyExpense: any[] = [
    { expenseType: 'Food', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  augustExpense: any[] = [
    { expenseType: 'Travel', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 }
  ];
  septemberExpense: any[] = [
    { expenseType: 'Food', expenseAmount: 1100 },
    { expenseType: 'Travel', expenseAmount: 250 }
  ];
  octoberExpense: any[] = [
    { expenseType: 'Food', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  novemberExpense: any[] = [
    { expenseType: 'Travel', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 }
  ];
  decemberExpense: any[] = [
    { expenseType: 'Food', expenseAmount: 1100 },
    { expenseType: 'Travel', expenseAmount: 250 }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.selectedMonth = new Date().toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }

  onSubmitExpense() {
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      this.getFilteredExpenses().push(newExpense);
      this.expenseForm.reset();
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
    if (this.expenseForm.valid) {
      this.expenseForm.reset({ month: this.selectedMonth });
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
