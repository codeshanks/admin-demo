import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CompanyListComponent } from './components/company/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company/company-detail/company-detail.component';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { DocumentDetailComponent } from './components/document/document-detail/document-detail.component';
import { DocumentContainerComponent } from './components/document/document-container/document-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/company', pathMatch: 'full' },
  { path: 'company', component: CompanyListComponent },
  { path: 'documents', component: DocumentContainerComponent },
  { path: 'company/:id/:name', component: CompanyDetailComponent }
  //{ path: 'company/:name', component: CompanyDetailComponent }
  //loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
