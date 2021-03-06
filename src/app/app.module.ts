import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { PageBlockComponent } from './home/page-block/page-block.component';
import { SecondLineComponent } from './home/second-line/second-line.component';
import { PictureContainerComponent } from './home/picture-container/picture-container.component';
import { PerfectComponent } from './home/perfect/perfect.component';
import { PerfectToolboxComponent } from './home/perfect-toolbox/perfect-toolbox.component';
import { YoutubePartComponent } from './home/youtube-part/youtube-part.component';
import { Form1Component } from './home/form1/form1.component';
import { FormComponent } from './home/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PageBlockComponent,
    SecondLineComponent,
    PictureContainerComponent,
    PerfectComponent,
    PerfectToolboxComponent,
    YoutubePartComponent,
    Form1Component,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
        path: 'form',
        component: FormComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
},
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
