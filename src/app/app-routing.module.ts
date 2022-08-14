import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'processo', pathMatch: 'full' },
  {
    path: 'autorizacao',
    loadChildren: () => import('./autorizacao/autorizacao.module').then(m => m.AutorizacaoModule),
  },
  {
    path: 'processo',
    loadChildren: () => import('./processo/processo.module').then(m => m.ProcessoModule)
  },
  {
    path: 'instituicao',
    loadChildren: () => import('./instituicao/instituicao.module').then(m => m.InstituicaoModule)
  },
  {
    path: 'professor',
    loadChildren: () => import('./professor/professor.module').then(m => m.ProfessorModule),
  },
  {
    path: 'nivelescolar',
    loadChildren: () => import('./nivel-escolar/nivel-escolar.module').then(m => m.NivelEscolarModule),
  },
  { path: '**', redirectTo: 'instituicao' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
