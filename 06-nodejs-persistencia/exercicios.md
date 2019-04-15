# Exercícios

## Exercício 1 - Criar ums api para um CRUD de pessoas

Modelo

```json
{
    "nome": "Maria da Silva",
    "tipo": "PESSOA_FISICA",
    "documento": "000.000.000-00", // CPF para pessoa física e CNPJ para pessoa jurídica
}
```
* tipo - PESSOA_FISICA ou PESSOA_JURIDICA
* documento - CPF para pessoa física e CNPJ para pessoa jurídica

```json
POST /api/pessoas
GET /api/pessoas
GET /api/pessoas/:id
PUT /api/pessoas/:id
DELETE /api/pessoas/:id
```

Para o campo documento validar CPF ou CNPJ dependendo do tipo de pessoa.

## Exercício 2 - Criar uma api para um CRUD de contas (despesas ou receitas)

Modelo

```json
{
    "descricao": "Gastos com alimentação",
    "pessoa": {...}, // Dados da Pessoa - para quem foi pago ou de quem foi recebido o valor
    "tipo": "DESPESA", // DESPESA | RECEITA
    "valor": 15.5,
}
```

``` json
POST /api/contas
GET /api/contas
GET /api/contas/:id
PUT /api/contas/:id
DELETE /api/contas/:id
```

Os dados devem ser persistidos com o NeDB.