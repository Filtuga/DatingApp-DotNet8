import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'lists', component: ListsComponent},
    {path: 'members', component: MembersListComponent},
    {path: 'members/:id', component: MemberDetailComponent},
    {path: 'messages', component: MessagesComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full'},
];
