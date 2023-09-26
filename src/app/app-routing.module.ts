import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamesOfAllahComponent } from './Islam/names-of-allah/names-of-allah.component';

const routes: Routes = [
  { path: '', redirectTo: '/NamesOfAllah', pathMatch: 'full' },
  {path:'NamesOfAllah',component:NamesOfAllahComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
