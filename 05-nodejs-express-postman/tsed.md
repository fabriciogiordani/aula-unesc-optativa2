# [TS.ED](https://tsed.io/)

## [Download Sample](sample.zip)

1 - Descompactar o sample.zip

2 - Dentro do diretório sample executar ```npm install``` para instalar as dependências.

3 - Executar ```npm start``` para executar o servidor

4 - Abrir no browser a url para exibir a documentação da API:
```
http://127.0.0.1:8080/api-docs
```

## Controllers

Representam a camada de controle de API

```js
@Controller("/calendars")
export class CalendarCtrl {

    @Get("/:id")
    public get(
        @PathParams("id") id: string
    ): Promise<Calendar> {

        return new Promise<Calendar>((resolve: Function, reject: Function) => {
            resolve({
                id,
                name: "test"
            });
        });

    }
    // or
    @Get("/:id")
    async get(
        @PathParams("id") id: string

    ): Promise<Calendar> {

        return {
            id,
            name: "test"
        };
    }
}
```

@Controller - configura a classe como um controlador. A engine vai ler e publicar automaticamente.

@Get, @Post, @Put, @Delete - Configuram o tipo de requisição que vai executar a função.

@Get("/:id") - :id representa o parâmetro de url e é passado para a função por parametro utilizando ```@PathParams("id")``` seguido pela declaração da variável, conforme exemplo acima.

## Services
 
```js
@Service()
export class CalendarsService {

  constructor(private memoryStorage: MemoryStorage) {
    // ...
  }

  async find(id: string): Promise<Calendar> {
    // ...
  }

  async create(name: string) {
    // ...
  }
}
```

@Service - configura a classe como um serviço de aplicação, onde a lógica de negócio deve ser posicionadas.

Os serviços são passados para os controladores via construtor:

```js
@Controller("/calendars", EventsCtrl)
export class CalendarsCtrl {

  constructor(private calendarsService: CalendarsService) {
  }

  // ...
}
```

No caso acima a variável calendarsService ficará disponível para utilização na classe. A mesma coisa acontece entre serviços, onde outros serviços podem ser recebidos no construtor.

