import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ContatoComponent } from './contato/contato.component';
import { PortaAntiComponent } from './porta-anti/porta-anti.component';
import { JanelaAntiComponent } from './janela-anti/janela-anti.component';
import { PersianaComponent } from './persiana/persiana.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresaComponent,
    ProdutosComponent,
    ContatoComponent,
    PortaAntiComponent,
    JanelaAntiComponent,
    PersianaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
