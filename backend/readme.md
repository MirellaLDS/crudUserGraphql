\# Graphql {.page-title}
==========

\# Graphql

Temos 3 métodos para comunicação:

-   query/mutation/subscription
    -   subscription - Quando se quer trabalhar com real time

-   Numa única requisição conseguimos executar várias desses métodos
    citados anteriormente

-   Front-ends independentes, podem ser responsáveis por seus próprios
    filtros.

-   Exemplo

``` {#3e0b2aa9-6edf-4262-89ee-396439fcd999 .code}
{ 
    mutation updateUser {
        updateUser(id: 1){
            nome: "Diego"
        }
    }

    query users {
        users({per_page: 20, page: 2, filter: {"starts_with": "Diego"}}) {
            id
            name
        }
    }
}
```

-   Um dos Benefício é evitar o overfat (trafego de informações inúteis)

-   Cria a documentação de forma automática, por existe um arquivo
    arquivo chamado schema (o schema ele guarda a tipagem das nossas
    rotas, o retorno delas, os parametros e outras coisas)

-   Sintaxe:

``` {#225e6e69-7ba5-4b71-8eb3-49ea7489d046 .code}
type User {
    id:ID!
    name: String!
    email: String! # No modelo a interrogação significa campo obrigatório.
}

type Query {
    users: [User!]! # A interrocação que dizer que é obrigatório, a interna me diz que por 
        # obrigação tenho que ter um user e a externa que obrigatóriamente vou retornar um array de usuários.
}
```

-   Run project:
    node src/server.js
    http://localhost:4000/

