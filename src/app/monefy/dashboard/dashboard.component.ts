import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //Income
  lastMonthsIncome = ['January: $1000', 'February: $1500', 'March: $1200'];
  currentMonthIncome = '$13820';

  //Expense
  lastMonthsExpense = ['January: $800', 'February: $1000', 'March: $1200'];
  currentMonthExpense = '$1500';

  //Todo Trans
  todoTransactions = [
    { description: 'Pay electricity bill' },
    { description: 'Submit monthly report' },
    { description: 'Buy groceries' },
    { description: 'Call insurance company' }
  ];

  //Total
  totalCurrentMonthIncome = 13820;
  totalCurrentMonthExpense = 1500;
  constructor(public router: Router) { }

  onIncome() {
    this.router.navigate(['/monefy/income']);
  }
  onExpense() {
    this.router.navigate(['/monefy/expense']);
  }
  onTodo() {
    this.router.navigate(['/monefy/todo']);
  }

  //Calculate Total
  get currentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }

}
