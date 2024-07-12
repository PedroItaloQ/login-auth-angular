import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
import { FormsModule } from '@angular/forms'; // Para o Two-Way Data Binding
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Adiciona BrowserAnimationsModule
    FormsModule, // Adiciona FormsModule
    HttpClientModule,
    AppRoutingModule,
    MatCardModule, // Adiciona MatCardModule
    MatFormFieldModule, // Adiciona MatFormFieldModule
    MatInputModule, // Adiciona MatInputModule
    MatButtonModule // Adiciona MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
