import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebBodyComponent } from '@app/webBody/webBody.component';

const routes: Routes = [
  { path: '', redirectTo: '/web/1', pathMatch: 'full' },
  { path: 'web/:data', component: WebBodyComponent },
  { path: '**', redirectTo: '/web/1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
