import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todoForm: any;
  selectedMonth: any;
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
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    this.selectedMonth = currentMonth;
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
      switch (this.selectedMonth) {
        case 'January':
          this.januaryExpense.push(newExpense);
          break;
        case 'February':
          this.februaryExpense.push(newExpense);
          break;
        case 'March':
          this.marchExpense.push(newExpense);
          break;
        case 'April':
          this.aprilExpense.push(newExpense);
          break;
        case 'May':
          this.mayExpense.push(newExpense);
          break;
        case 'June':
          this.juneExpense.push(newExpense);
          break;
        case 'July':
          this.julyExpense.push(newExpense);
          break;
        case 'August':
          this.augustExpense.push(newExpense);
          break;
        case 'September':
          this.septemberExpense.push(newExpense);
          break;
        case 'October':
          this.octoberExpense.push(newExpense);
          break;
        case 'November':
          this.novemberExpense.push(newExpense);
          break;
        case 'December':
          this.decemberExpense.push(newExpense);
          break;
        default:
          break;
      }
      this.todoForm.reset();
      this.todoForm.patchValue({ month: '', expenseType: '', expenseAmount: '' });
    }
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredExpenses();
  }

  getFilteredExpenses() {
    let filteredExpense: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredExpense = [...this.januaryExpense];
        break;
      case 'February':
        filteredExpense = [...this.februaryExpense];
        break;
      case 'March':
        filteredExpense = [...this.marchExpense];
        break;
      case 'April':
        filteredExpense = [...this.aprilExpense];
        break;
      case 'May':
        filteredExpense = [...this.mayExpense];
        break;
      case 'June':
        filteredExpense = [...this.juneExpense];
        break;
      case 'July':
        filteredExpense = [...this.julyExpense];
        break;
      case 'August':
        filteredExpense = [...this.augustExpense];
        break;
      case 'September':
        filteredExpense = [...this.septemberExpense];
        break;
      case 'October':
        filteredExpense = [...this.octoberExpense];
        break;
      case 'November':
        filteredExpense = [...this.novemberExpense];
        break;
      case 'December':
        filteredExpense = [...this.decemberExpense];
        break;
      default:
        break;
    }
    return filteredExpense;
  }

  calculateTotalExpense(month: string): number {
    let totalExpense = 0;
    for (const income of this.gettodoFormonth(month)) {
      totalExpense += income.expenseAmount;
    }
    return totalExpense;
  }

  gettodoFormonth(month: string): any[] {
    switch (month) {
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

  onSave() {
    if (this.todoForm.valid) {
      const incomeData = this.todoForm.value;
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

  toggleSelection(expense: any) {
    expense.selected = !expense.selected;
  }
}
