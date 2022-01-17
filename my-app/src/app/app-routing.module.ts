import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostPreviewComponent } from './cost-preview/cost-preview.component';

const routes: Routes = [
  { path: 'cost-preview', component: CostPreviewComponent, data: { title: 'Cost Preview' }, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
