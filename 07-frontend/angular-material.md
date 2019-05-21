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

### 3 - Importando tema

Adicionar o linha abaixo no arquivo style.css:

```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

### 4 - Importando os componentes

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

### 5 - (opcional) Adicionando [Material Icons](https://material.io/tools/icons)

Para adicionar o suporte para a lib de ícones do Google Material basta adicionar o link abaixo para que eles sejam carregados no ```index.html```.

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

### [Componentes do Angular Material](https://material.angular.io/components)

```html
<mat-form-field class="example-full-width">
   <input matInput placeholder="Favorite food" value="Sushi">
</mat-form-field>

<mat-form-field class="example-full-width">
   <textarea matInput placeholder="Leave a comment"></textarea>
</mat-form-field>
```

```html
<mat-form-field>
  <mat-label>Favorite food</mat-label>
  <mat-select>
    <mat-option *ngFor="let food of foods" [value]="food.value">
      {{food.viewValue}}
    </mat-option>
  </mat-select>
</mat-form-field>
```

```html
<mat-radio-group aria-label="Select an option">
  <mat-radio-button value="1">Option 1</mat-radio-button>
  <mat-radio-button value="2">Option 2</mat-radio-button>
</mat-radio-group>
```

```html
<mat-card>Simple card</mat-card>
```

```html
<mat-accordion>
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        Personal data
      </mat-panel-title>
      <mat-panel-description>
        Type your name and age
      </mat-panel-description>
    </mat-expansion-panel-header>

    <mat-form-field>
      <input matInput placeholder="First name">
    </mat-form-field>

    <mat-form-field>
      <input matInput placeholder="Age">
    </mat-form-field>
  </mat-expansion-panel>
  <mat-expansion-panel (opened)="panelOpenState = true"
                       (closed)="panelOpenState = false">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Self aware panel
      </mat-panel-title>
      <mat-panel-description>
        Currently I am {{panelOpenState ? 'open' : 'closed'}}
      </mat-panel-description>
    </mat-expansion-panel-header>
    <p>I'm visible because I am open</p>
  </mat-expansion-panel>
</mat-accordion>
```

```html
<mat-list role="list">
  <mat-list-item role="listitem">Item 1</mat-list-item>
  <mat-list-item role="listitem">Item 2</mat-list-item>
  <mat-list-item role="listitem">Item 3</mat-list-item>
</mat-list>
```

```html
<mat-tab-group>
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
```

```html
<button mat-raised-button>Basic</button>
<button mat-raised-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
<button mat-raised-button color="warn">Warn</button>
<button mat-raised-button disabled>Disabled</button>
<a mat-raised-button routerLink=".">Link</a>
```

```html
<p>
  <span matBadge="4" matBadgeOverlap="false">Text with a badge</span>
</p>

<p>
  Button with a badge on the left
  <button mat-raised-button color="primary"
      matBadge="8" matBadgePosition="before" matBadgeColor="accent">
    Action
  </button>
</p>
```

```html
<mat-icon>home</mat-icon>
```


