import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { JanelaAntiComponent } from './janela-anti/janela-anti.component';
import { PersianaComponent } from './persiana/persiana.component';
import { PortaAntiComponent } from './porta-anti/porta-anti.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'portaAnti', component: PortaAntiComponent},
  {path: 'janelaAnti', component: JanelaAntiComponent},
  {path: 'persiana', component:  PersianaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
