# Frontend

## [Angular Material](https://material.angular.io/)

### 1 - Instalando o Angular Material

```
npm install --save @angular/material @angular/cdk @angular/animations
```

### 2 - Configure as animações

Uma vez que as animaçõe já estão instaladas, basta importar ```BrowserAnimationsModule``` dentro da application.

```js
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class AppModule { }
```

Alternativamente, as animações podem ser desabilitadas importando ```NoopAnimationsModule```.

```js
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [NoopAnimationsModule],
  ...
})
export class AppModule { }
```

### 3 - Importando os componentes

Cada componentes que será utilizado deve ser importado individualmente:

```js
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule, MatCheckboxModule],
  ...
})
export class AppModule { }
```

### 6 - (opcional) Adicionando [Material Icons](https://material.io/tools/icons)

Para adicionar o suporte para a lib de ícones do Google Material basta adicionar o link abaixo para que eles sejam carregados no ```index.html```.

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

