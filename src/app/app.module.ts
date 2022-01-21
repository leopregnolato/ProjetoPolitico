import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { BodyComponent } from './navegacao/body/body.component';
import { PoliticoComponent } from './pessoa/politico/politico.component';
import { ProjetoleiComponent } from './pessoa/projetolei/projetolei.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { PoliticoService } from './politico/politico.service';
import { ListaPoliticoComponent } from './politico/lista-politico/lista-politico.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    BodyComponent,
    PoliticoComponent,
    ProjetoleiComponent,
    ListaPoliticoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    PoliticoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
