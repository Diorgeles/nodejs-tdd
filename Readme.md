# Descrição

## A ideia é estudar TDD no zero

## Escopo do projeto teste

- Tenho um projeto de criação de contatos telefonicos, bem proximo da ideia de uma 
  agenda e preciso garantir alguns pontos importantes

## Critério de aceite

- Todo contato precisa de um nome, telefone e email sendo nome e telefone obrigatórios
- O sistema precisa proteger contra duplicidade de email e telefone
- O sistema precisa proteger contra nomes muitos curtos
- Um usuário pode compartilhar sua lista de contatos para outros usuarios ou deixar a
  lista publica
- Cada contado cadastrado precisa estar vinculado a ao menos 1 usuário e 1 lista seja
  ela publica ou não
- Apenas usuários do tipo admin pode deletar listas publicas
- Ao deletar uma lista publica os contatos devem ser enviados para a "lixeira"
- Lixeira é uma lista global do proprio sistema
- Listas de usuarios tbm podem ser marcadas como lixeira


