import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyContactComponent } from './pages/study-contact/study-contact.component';
import { StudyListComponent } from './pages/study-list/study-list.component';

const routes: Routes = [
  { path: 'study-list', component: StudyListComponent },
  { path: 'study-contact', component: StudyContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
