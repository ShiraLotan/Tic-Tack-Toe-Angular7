import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AddPlayersComponent } from './comps/add-players/add-players.component';
import { BoardComponent } from './comps/board/board.component';
import { SignPipe } from './pipes/sign.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayersComponent,
    BoardComponent,
    SignPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
