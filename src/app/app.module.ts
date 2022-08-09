import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';

import { MatDividerModule } from '@angular/material/divider';

import { AddAbillerComponent } from './add-abiller/add-abiller.component';

import { MatSelectModule } from '@angular/material/select'

import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({

  declarations: [
    AppComponent,
    AddAbillerComponent,
  ],

  imports: [

    BrowserModule,

    FormsModule,

    ReactiveFormsModule,

    AppRoutingModule,

    HttpClientModule,

    BrowserAnimationsModule,

    MatToolbarModule,

    MatSidenavModule,

    MatIconModule,

    MatButtonModule,

    MatDividerModule,

    MatInputModule,

    MatSelectModule,
    MatNativeDateModule,
    MatCardModule

  ],
  // exports: [

  //   MatCardModule
  // ],

  providers: [HttpClientModule, ],

  bootstrap: [AppComponent]

})
// export class MaterialModule {}

export class AppModule { }