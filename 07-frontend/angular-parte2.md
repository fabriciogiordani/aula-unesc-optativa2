# Frontend

## Angular Router

### <base href>
Deve ser adicionada a tag <base> no index.html dentro do <head>.

```html
<base href="/">
```

### Router imports

Os serviços de rotas devem ser importados na aplicação: src/app/app.module.ts

```
import { RouterModule, Routes } from '@angular/router';
```

### Configuração de rotas

O exemplo abaixo cria 5 rotas configuradas pelo método RouterModule.forRoot() e adiciona a aplicação: src/app/app.module.ts (excerpt)

```js
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
```



