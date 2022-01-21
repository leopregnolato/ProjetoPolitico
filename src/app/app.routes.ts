import { Routes } from "@angular/router";
import { BodyComponent } from './navegacao/body/body.component'
import { PoliticoComponent } from "./pessoa/politico/politico.component";
import { ProjetoleiComponent } from "./pessoa/projetolei/projetolei.component";
import { ListaPoliticoComponent } from "./politico/lista-politico/lista-politico.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/body', pathMatch: 'full'},
    { path: 'body', component: BodyComponent },
    { path: 'politico', component: PoliticoComponent },
    { path: 'projetolei', component: ProjetoleiComponent },
    { path: 'lista-politico', component:ListaPoliticoComponent }


];