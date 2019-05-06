# Frontend

## [MVC Frameworks and Libraries](https://github.com/sorrycc/awesome-javascript)

Frontend

- [ReactJS](https://reactjs.org)
- [VueJS](https://vuejs.org)
- [AngularJS](https://angular.io)

## Angular

### V1 - [AngularJS](https://angularjs.org)

### V2 ou superior - [Angular](https://angular.io)

- Mudanças arquiteturais (escopo, componentes, diretivas, ...)
- Mudanças em estratégias de versionamento

### Passo 1 - Instalação do Angular CLI

Utilizado principalmente para criação de projetos, geração de artefatos e empacotamento.

Instalação do cliente globamente.

```js
npm install -g @angular/cli
```

### Passo 2: Criando a aplicação

Para criar um novo projeto:

```js
ng new my-app
```

O Angular CLI vai instalar todas as dependências, isso pode demorar alguns minutos.

### Passo 3: Executando a aplicação

O angular inclui um servidor para execução do sistema em ambiente de desenvolvimento.

Dentro do diretório criado no projeto:

```js
ng serve --open
```

No browser será aberta automáticamente a url http://localhost:4200

[Exemplo de aplicação](https://stackblitz.com/edit/angular-ocyefh)

### [Tutorial do Angular](https://angular.io/tutorial)

### [Criando Artefatos no projeto com Angular Cli](https://angular.io/cli)

```js
ng g <schematic> [options]
```

Cada artefato tem [opções](https://angular.io/cli/generate)

### Elementos do tutorial do Angular

Criando artefatos

```js
ng generate component heroes
```

Vai criar um novo diretório, src/app/heroes/, e vai gerar 4 arquivos para o  HeroesComponent.

O arquivo de componente HeroesComponent app/heroes/heroes.component.ts:

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}
```

Template do componente heroes.component.html.

```js
{{hero}}
```

Mostrando o componente da página principal do sistema src/app/app.component.html:

```js
<h1>{{title}}</h1>
<app-heroes></app-heroes>
```

Criação de classe para o modelo src/app/hero.ts

```js
export class Hero {
  id: number;
  name: string;
}
```

Revisando o componente HeroesComponent src/app/heroes/heroes.component.ts

```js
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
```

### Utilizando o modelo no template do componente heroes.component.html.

```
<h2>{{hero.name}} Details</h2>
<div><span>id: </span>{{hero.id}}</div>
<div><span>name: </span>{{hero.name}}</div>
```

### Utilizando pipe (UppercasePipe):

```js
<h2>{{hero.name | uppercase}} Details</h2>
```

Utilizando inputs e fazendo binding:

Two-way binding em src/app/heroes/heroes.component.html:

```html
<div>
  <label>name:
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </label>
</div>
```

### Manipulando os dados

*ngFor

```js
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}
```

```html
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero }}
    </li>
  </ul>
```

*ngIf

```
<p *ngIf="heroes.length > 3">There are many heroes!</p>
```

Juntando no modelo

```html
<h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>
```

### [Requisições HTTP](https://angular.io/guide/http)

Configuração para utilização do HttpClient

```js
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

Utilizando o HttpClient nos componentes:

```js
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
```

Utilizando o HttpClient em serviços:

```js
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ModelService {

  url = 'http://backend/api/models';

  constructor(private http: HttpClient) {
  }

  async get(id: number) {
    return await this.http.get<any>(`${this.url}/${id}`, {}).toPromise();
  }

  async delete(id: number) {
    await this.http.delete<any>(`${this.url}/${id}`, {}).toPromise();
  }

  async save(bean: any) {
    return await this.http.post<any>(`${this.url}`, bean).toPromise();
  }

  async update(bean: any) {
    return await this.http.post<any>(`${this.url}/${id}`, bean).toPromise();
  }
``` 




