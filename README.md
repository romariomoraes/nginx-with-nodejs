
- n�o consegui fazer funcionar a aplica��o com o dockerize, esta comentado no docker-composer a linha abaixo: # entrypoint: dockerize -wait tcp://mysql:3306 -timeout 20s docker-entrypoint.sh

- nao conseguia conectar ao banco e o container n�o subia at� estourar o timeout, at� pedi ajuda para o chatGPT gerar os fontes para da aplica��o, ainda sim tive algumas dificuldades para rodar a aplica��o, alguns ajustes se fizeram necess�rio, abaixo encontra-se os logs que ocorria ao subir a aplica��o com dockerize:

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