# Carrinho de Compras
<img alt="JEST" src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"> </img><img alt="NODE.JS" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"> </img><img alt="JEST" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> </img><img alt="NGINX" src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"> </img><img alt="JEST" src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"> </img><img alt="JEST" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"> </img>

Este repositório consiste em um carrinho de compras seguindo as regras passadas para realização do desafio técnico da HASH. Para instalação e execução da API, basta seguir o passo a passo a seguir.
Como se trata de um carrinho, que visa converter o maior número de compras, alguns erros são tratados e/ou omitidos(tentativa de incluir um produto de brinde, tentativa de comprar um produto que não existe, etc) para que o usuário consiga
finalizar a compra

## Clonar repositório

    git clone https://github.com/yuriileaoo/hash-challenge
    
Após o repositório ser clonado, entre no diretorio do projeto para continuar:

    cd ./hash-challenge

## Configurar variáveis de ambiente

Para configurar as variáveis de ambiente basta criar um arquivo ".env" na raiz do projeto, com o seguinte conteúdo:

    PORT=3333 
    PORT_GRPC=50051
    BLACK_FRIDAY='2022-11-26'

## Instalação e execução com Docker

A utilização de docker facilita o processo de instalação e execução deste projeto. Caso ja tenha o [docker e o docker-compose](https://docs.docker.com/compose/install/) instalados, basta digitar o seguinte comando no terminal:

    docker-compose up
ou

    docker-compose up -d
    
> Note que o segundo comando executará o projeto em segundo plano enquanto no primeiro, a aplicação ficará em execução no terminal, possibilitando a visualização de logs e possíveis erros.


## Rodar testes

    yarn test


## Versões

| Versão | Data  |
|--|--|
| [v1.0]() | - |

## Possíveis melhorias

> Testes: é possível incluir mais casos de uso para validação dos testes

> Dados: utilização de um bando de dados para CRUD de produtos

> Histórico: criação de histórico de requisições(compras finalizadas, incompletas e canceladas)

