import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WebService } from './web.service';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatFormFieldModule,
} from '@angular/material';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CategoriesComponent } from './categories/categories.component';
import { FaqComponent } from './faq/faq.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    HeroComponent,
    HowItWorksComponent,
    CategoriesComponent,
    FaqComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    AdminDashboardComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule, HttpModule,
    AppRoutingModule, BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatFormFieldModule, FormsModule, ReactiveFormsModule
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
