
- não consegui fazer funcionar a aplicação com o dockerize, esta comentado no docker-composer a linha abaixo: # entrypoint: dockerize -wait tcp://mysql:3306 -timeout 20s docker-entrypoint.sh

- nao conseguia conectar ao banco e o container não subia até estourar o timeout, até pedi ajuda para o chatGPT gerar os fontes para da aplicação, ainda sim tive algumas dificuldades para rodar a aplicação, alguns ajustes se fizeram necessário, abaixo encontra-se os logs que ocorria ao subir a aplicação com dockerize:

- 2023/09/10 22:30:14 Waiting for: tcp://mysql:3306
- 2023/09/10 22:30:14 Problem with dial: dial tcp 172.22.0.2:3306: connect: connection refused. Sleeping 1s
- 2023/09/10 22:30:15 Problem with dial: dial tcp 172.22.0.2:3306: connect: connection refused. Sleeping 1s
- 2023/09/10 22:30:16 Problem with dial: dial tcp 172.22.0.2:3306: connect: connection refused. Sleeping 1s
- 2023/09/10 22:30:17 Problem with dial: dial tcp 172.22.0.2:3306: connect: connection refused. Sleeping 1s
- 2023/09/10 22:30:18 Problem with dial: dial tcp 172.22.0.2:3306: connect: connection refused. Sleeping 1s
- 2023/09/10 22:30:19 Problem with dial: dial tcp 172.22.0.2:3306: connect: connection refused. Sleeping 1s
- 2023/09/10 22:30:20 Problem with dial: dial tcp 172.22.0.2:3306: connect: connection refused. Sleeping 1s
- 2023/09/10 22:30:21 Problem with dial: dial tcp 172.22.0.2:3306: connect: connection refused. Sleeping 1s
- 2023/09/10 22:30:22 Connected to tcp://mysql:3306
- 2023/09/10 22:30:22 Command finished successfully.