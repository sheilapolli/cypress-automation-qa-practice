# language: pt

Funcionalidade: Autenticação na Loja Virtual
  Como um usuário do eCommerce do QA Practice
  Quero realizar a autenticação e a saída do sistema
  Para garantir a segurança do meu acesso e dos meus dados

  CT01 - Realizar login com sucesso
    Dado que o usuário está na página de autenticação do eCommerce 
    https://qa-practice.razvanvancea.ro/auth_ecommerce.html
    Quando o usuário preencher o campo de usuário com credenciais válidas
    E preencher o campo de senha com credenciais válidas
    E submeter o formulário de login
    Então o sistema deve permitir o acesso à conta
    E exibir a tela inicial logada com o título "SHOPPING CART"

  CT02 - Realizar logout com sucesso
    Dado que o usuário realizou o login com sucesso no sistema
    Quando o usuário clicar no botão de logout
    Então o sistema deve encerrar a sessão atual
    E exibir a tela de login com o título "Login - Shop"

  CT03 - Verificar msg de login com senha inválida
  CT04 - Verificar msg de login com usuário inválido
  CT05 - Verificar msg de login com espaços em branco
  CT06 - Verificar msg de login com campos vazios
    Dado que o usuário está na página de autenticação do eCommerce 
    https://qa-practice.razvanvancea.ro/auth_ecommerce.html
    Quando o usuário preencher o campo de usuário com "<usuario>"
    E preencher o campo de senha com "<senha>"
    E submeter o formulário de login
    Então o sistema não deve permitir o acesso
    E deve exibir a mensagem de erro "Bad credentials! Please try again! Make sure that you've registered."

    Massa de dados:
      | usuario         | senha            | motivo                                    |
      | usuario_valido  | senha_incorreta  | Apenas a senha está errada                |
      | usuario_errado  | senha_incorreta  | Ambos os campos com dados inválidos       |
      |                 |                  | Campos de usuário e senha vazios          |
      |                 |                  | Usuário e senha com espaços em branco     |
