# language: pt

@ecommerce @login
Funcionalidade: Autenticação na Loja Virtual

  Como um usuário do eCommerce QA Practice
  Quero realizar login e logout no sistema
  Para garantir segurança no acesso à minha conta


  @CT01
  Cenário: CT01 - Realizar login com sucesso

    Dado que o usuário está na página de autenticação do eCommerce
    E acessa a URL "https://qa-practice.razvanvancea.ro/auth_ecommerce.html"
    Quando preencher o campo usuário com credenciais válidas
    E preencher o campo senha com credenciais válidas
    E submeter o formulário de login
    Então o sistema deve permitir o acesso à conta
    E exibir a tela inicial logada com o título "SHOPPING CART"


  @CT02
  Cenário: CT02 - Realizar logout com sucesso

    Dado que o usuário realizou login com sucesso no sistema
    Quando clicar no botão de logout
    Então o sistema deve encerrar a sessão atual
    E exibir a tela de login com o título "Login - Shop"


  @CT03
  Esquema do Cenário: Verificar mensagem de login com senha inválida

    Dado que o usuário está na página de autenticação do eCommerce
    E acessa a URL "https://qa-practice.razvanvancea.ro/auth_ecommerce.html"
    Quando preencher o campo usuário com "<usuario>"
    E preencher o campo senha com "<senha>"
    E submeter o formulário de login
    Então o sistema não deve permitir o acesso
    E deve exibir a mensagem de erro "Bad credentials! Please try again! Make sure that you've registered."

    Exemplos:

      | usuario        | senha            | motivo                     |
      | usuario_valido | senha_incorreta  | Senha informada é inválida |


  @CT04
  Esquema do Cenário: Verificar mensagem de login com usuário inválido

    Dado que o usuário está na página de autenticação do eCommerce
    Quando preencher o campo usuário com "<usuario>"
    E preencher o campo senha com "<senha>"
    E submeter o formulário de login
    Então o sistema não deve permitir o acesso
    E deve exibir a mensagem de erro "Bad credentials! Please try again! Make sure that you've registered."

    Exemplos:

      | usuario       | senha            | motivo                              |
      | usuario_fake  | senha_incorreta  | Usuário e senha não cadastrados     |


  @CT05
  Cenário: CT05 - Verificar mensagem de login com espaços em branco

    Dado que o usuário está na página de autenticação do eCommerce
    Quando preencher o campo usuário com espaços em branco
    E preencher o campo senha com espaços em branco
    E submeter o formulário de login
    Então o sistema não deve permitir o acesso
    E deve exibir mensagem de validação dos campos obrigatórios


  @CT06
  Cenário: CT06 - Verificar mensagem de login com campos vazios

    Dado que o usuário está na página de autenticação do eCommerce
    Quando submeter o formulário de login sem preencher usuário e senha
    Então o sistema não deve permitir o acesso
    E deve exibir mensagem de validação dos campos obrigatórios



@checkout @compra
Funcionalidade: Finalização de compra na Loja Virtual

  Como um usuário autenticado no eCommerce QA Practice
  Quero finalizar uma compra informando meus dados corretamente
  Para concluir meu pedido com sucesso


  @CT07
  Cenário: CT07 - Realizar compra com sucesso preenchendo todos os campos

    Dado que o usuário realizou login com sucesso
    E adicionou um produto ao carrinho
    Quando acessar a tela de checkout
    E preencher todos os campos obrigatórios com dados válidos
    E confirmar a compra
    Então o sistema deve finalizar o pedido com sucesso
    E exibir a confirmação da compra


  @CT08
  Cenário: CT08 - Impedir finalização da compra com todos os campos vazios

    Dado que o usuário está na tela de checkout
    Quando tentar finalizar a compra sem preencher nenhum campo obrigatório
    Então o sistema não deve permitir a finalização do pedido
    E deve apresentar mensagens de validação dos campos obrigatórios


  @CT09
  Cenário: CT09 - Impedir finalização da compra com campo Phone Number vazio

    Dado que o usuário está na tela de checkout
    E preencher todos os campos obrigatórios exceto o campo Phone Number
    Quando tentar finalizar a compra
    Então o sistema não deve permitir a finalização do pedido
    E deve informar que o campo Phone Number é obrigatório


  @CT10
  Cenário: CT10 - Impedir finalização da compra com campo Street vazio

    Dado que o usuário está na tela de checkout
    E preencher todos os campos obrigatórios exceto o campo Street
    Quando tentar finalizar a compra
    Então o sistema não deve permitir a finalização do pedido
    E deve informar que o campo Street é obrigatório


  @CT11
  Cenário: CT11 - Impedir finalização da compra com campo City vazio

    Dado que o usuário está na tela de checkout
    E preencher todos os campos obrigatórios exceto o campo City
    Quando tentar finalizar a compra
    Então o sistema não deve permitir a finalização do pedido
    E deve informar que o campo City é obrigatório


  @CT12
  Cenário: CT12 - Impedir finalização da compra com campo Country vazio

    Dado que o usuário está na tela de checkout
    E preencher todos os campos obrigatórios exceto o campo Country
    Quando tentar finalizar a compra
    Então o sistema não deve permitir a finalização do pedido
    E deve informar que o campo Country é obrigatório