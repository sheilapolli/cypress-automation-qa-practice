# Projeto de Testes Automatizados - QA Practice 

Este projeto contém cenários de testes automatizados para a funcionalidade de Login e Logout do site QA Practice eCommerce, utilizando o framework **Cypress** com o padrão de arquitetura **Page Objects / Actions**.

## 🎥 Demonstração

![Execução dos Testes Automatizados](test_cases/cypress-login-logout.gif)

---

## 🧪 Cenários de Testes Cobertos

A suíte de testes valida os seguintes fluxos da tela de login:
* **CT01 - Realizar login com sucesso:** Acesso utilizando credenciais válidas.
* **CT02 - Realizar logout com sucesso:** Validação da saída do sistema após um login válido.
* **CT03 - Verificar msg de login com senha inválida:** Validação de erro ao inserir o usuário correto mas com senha incorreta.
* **CT04 - Verificar msg de login com usuário inválido:** Validação de erro com usuário e senha incorretos.
* **CT05 - Verificar msg de login com espaços em branco:** Validação de erro ao preencher os campos apenas com espaços.
* **CT06 - Verificar msg de login com campos vazios:** Validação de erro ao tentar submeter o formulário sem preenchimento.

![BDD contendo os cenários dos Testes Automatizados](test_cases/bdd-login-logout.md)

---

## 🛠️ Tecnologias Utilizadas

* **[Cypress](https://cypress.io):** Framework de testes ponta a ponta (E2E).
* **JavaScript / Node.js:** Linguagem base e ambiente de execução.
* **Page Objects / Actions Pattern:** Padrão de projeto utilizado para melhor reuso e manutenção do código.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* [Node.js](https://nodejs.org) (versão LTS recomendada)
* [Git](https://git-scm.com)

### Passo 1: Instalar as Dependências
```bash
npm install
```

### Passo 2: Executar os Testes

**Para rodar os testes no modo Interativo (Interface Gráfica do Cypress):**
```bash
npx cypress open
```

**Para rodar os testes no modo Headless (Via Linha de Comando no Terminal):**
```bash
npx cypress run
```

---

## 📁 Estrutura do Projeto

O projeto segue a seguinte organização de pastas para os testes de login:
* `cypress/fixtures/login.json`: Armazena as massas de dados utilizadas nos testes.
* `cypress/e2e/pages/LoginPage.js`: Mapeamento de elementos visuais da tela.
* `cypress/e2e/actions/LoginActions.js`: Funções de interações e asserções (validações).
* `cypress/e2e/auth/login-logout.cy.js`: O arquivo de especificação que contém a suíte descrita acima.