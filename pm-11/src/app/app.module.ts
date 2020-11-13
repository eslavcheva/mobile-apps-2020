import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: 'products', component: ProductListComponent},
                          { path: 'product/:id', component: ProductDetailComponent},
                          { path: 'welcome', component: WelcomeComponent },
                          { path: '', redirectTo: 'welcome', pathMatch: 'full'},
                          { path: '**', redirectTo: 'welcome', pathMatch: 'full'} ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }