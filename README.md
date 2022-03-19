
  

# Carrinho de Compras

  

<img  alt="JEST"  src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white">  </img><img  alt="NODE.JS"  src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">  </img><img  alt="JEST"  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">  </img><img  alt="NGINX"  src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">  </img><img  alt="JEST"  src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">  </img><img  alt="JEST"  src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white">  </img>

  

  

Este repositório consiste em um carrinho de compras seguindo as regras passadas para realização do desafio técnico da HASH. Para instalação e execução da API, basta seguir o passo a passo a seguir.

  

  

## Requisitos

  

- [NodeJS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-pt)

- [Docker](https://docs.docker.com/engine/install/ubuntu/)

- [Docker-compose](https://docs.docker.com/compose/install/)
  

  

## Clonar repositório

  

  

    git clone https://github.com/yuriileaoo/hash-challenge

  

Após o repositório ser clonado, entre no diretorio do projeto para continuar:

  

  

    cd ./hash-challenge

  
## Instalação de dependências
    yarn
  

## Configurar variáveis de ambiente

  

  

Para configurar as variáveis de ambiente basta criar um arquivo ".env" na raiz do projeto, com o seguinte conteúdo:

  

- .env

      PORT=3333

      PORT_GRPC=50051

      BLACK_FRIDAY='2022-11-26'

  

  

Para que os testes funcionem, será necessário configurar as variáveis de ambiente no arquivo de configuração do jest:

  

  

- .jest/setEnvVars.js

  

  

      process.env.BLACK_FRIDAY='2022-11-26'

      process.env.PORT=3333

      process.env.PORT_GRPC=50051

  

  

## Rodar testes

  

  

    yarn test

  

  

- [x] Validação de arquivo JSON

  

- [x] Validação de produto 'brinde' no arquivo

  

- [x] Contagem da quantidade de produtos válidos

  

- [x] Checagem de data da Black Friday

  

- [x] Cálculo de desconto

  

- [x] Validação de produtos repetidos, inexistentes e brindes

  

- [x] Cálculo de totais

  

- [ ] Contemplar todo o fluxo do envio para o carrinho de compras

  

- [ ] Integração com o banco

  

  

## Instalação e execução com Docker

  

  

A utilização de docker facilita o processo de instalação e execução deste projeto. Caso ja tenha o docker e o docker-compose instalados, basta digitar o seguinte comando no terminal:

  

  

    docker-compose up

  

ou

  

  

    docker-compose up -d

  

> Note que o segundo comando executará o projeto em segundo plano enquanto no primeiro, a aplicação ficará em execução no terminal, possibilitando a visualização de logs e possíveis erros.

  

  

## Versões

  

|Versão| Data |
|--|--|
| [v1.0.0](https://github.com/yuriileaoo/hash-challenge/releases/tag/v1.0.0) | 18-03-2022 |


  

  

## Possíveis melhorias

  

  

> Testes: é possível incluir mais casos de uso para validação dos testes

  

  

> Dados: utilização de um banco de dados para cadastro de produtos

  

  

> Histórico: criação de histórico de requisições(compras finalizadas, incompletas e canceladas)

  

  

> Observabilidade: configuração de ElasticSearch para checagem de disponibilidade do sistema, acompnhamento das rotas e das requisições no banco

  

  

>
