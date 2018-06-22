import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DonarService } from 'src/app/donar.service';
import { ShowDonarComponent } from './show-donar/show-donar.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ShowDonarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [HttpClient, DonarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
