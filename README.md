# Automação de testes com Cypress: OrangeHRM

[![Testes Cypress](https://github.com/jefsantana/aula-cypress-mentoria/actions/workflows/cypress.yml/badge.svg)](https://github.com/jefsantana/aula-cypress-mentoria/actions/workflows/cypress.yml)

Projeto de automação de testes **E2E (interface)** e de **API REST** com Cypress, usando o [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com) como sistema sob teste.

## O que é testado

| Suíte | Cenários |
| --- | --- |
| `login.cy.js` | Login válido, credenciais inválidas, campos obrigatórios, logout |
| `navegacao.cy.js` | Busca no menu lateral, menu sem resultados, listagem de funcionários (PIM) |
| `api.cy.js` | `GET /api/v2/pim/employees`: 401 sem sessão, 200 com paginação e contrato dos campos |

## Boas práticas aplicadas

- **Page Objects** (`cypress/pages`): seletores e ações em um só lugar, testes legíveis
- **`cy.session`**: login feito uma vez e reaproveitado, suíte mais rápida e estável
- **Massa de dados em fixtures** (`cypress/fixtures/userData.json`)
- **Testes de API** com `cy.request`, validando status, paginação e contrato da resposta
- **Novas tentativas automáticas** no modo CI para reduzir falsos negativos de ambiente
- **Relatório HTML** com gráficos e prints das falhas (mochawesome)
- **CI no GitHub Actions**: roda a cada push, pull request e toda segunda-feira

## Como rodar

```bash
npm install
npm test          # roda todos os testes em modo headless
npm run test:open # abre a interface do Cypress
```

O relatório fica em `cypress/reports/index.html`.

## Stack

Cypress · JavaScript · Mochawesome · GitHub Actions

---

Feito por **Jeferson Santana Machado**, QA Engineer · [LinkedIn](https://www.linkedin.com/in/jeferson-santana-machado)
