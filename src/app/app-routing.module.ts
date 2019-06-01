import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './comps/board/board.component';
import { AddPlayersComponent } from './comps/add-players/add-players.component';

const routes: Routes = [
  {path: 'start' , component: AddPlayersComponent},
  {path: 'board' , component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
