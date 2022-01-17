import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostPreviewComponent } from './cost-preview/cost-preview.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CostPreviewComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
// 	return new TranslateHttpLoader(http);
// }
