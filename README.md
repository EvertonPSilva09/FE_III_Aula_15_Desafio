# DESAFIO FRONT-END 3 - REACT ROUTER DOM E CRUD HTTP 


<h2> Neste desafio você deverá criar um projeto React ao qual deverá possuir navegação entre páginas e requisições HTTP.</h2>
No projeto deverá conter:

* As bibliotecas Axios (para realizar as requisições) e a React Router Dom (para implementar a navegação entre as páginas do sistema).
* O sistema deverá possuir duas páginas, sendo elas "Home" e "Formulário".

# HOME
* Na tela "Home", deverá existir um link ou um botão para o usuário navegar para a tela de "Formulário".
* Na página Home, deverá ser implementada uma listagem de alunos recebidos via comunicação com o Backend, cuja rota está apresentada na imagem abaixo:

  - GET ALL
https://api-aluno.vercel.app/aluno
![image](https://user-images.githubusercontent.com/93167615/227790700-3205a117-985e-4bb5-b769-722a3fd326dc.png)
* Para cada usuário da listagem, deverá existir um botão de "editar" a fim de realizar a navegação do usuário para a tela de "Formulário", nessa navegação o id do usuário deverá ser passado via parâmetro para que o mesmo possa ser usado na tela de destino.
* Para cada usuário da listagem, deverá existir um botão de "apagar" a fim de excluir o usuário da listagem, cuja rota está representada pela imagem abaixo:

 - DELETE
https://api-aluno.vercel.app/aluno/641a40b589671400084456c0
![image](https://user-images.githubusercontent.com/93167615/227790902-56aed58b-8578-41cd-a710-a39221de2762.png)

# FORMULÁRIO
* Na tela de "Formulário" deverá existir um form, ao qual o usuário poderá cadastrar ou editar um aluno.
* Para criar um aluno, você poderá implementar uma requisição na rota apresentada pela imagem abaixo:
  - POST
https://api-aluno.vercel.app/aluno
![image](https://user-images.githubusercontent.com/93167615/227790927-4fb067d2-afbf-4e98-bb24-dd2188d892f6.png)

* Para editar um aluno, você poderá implementar uma requisição na rota apresentada pela imagem abaixo:

  - UPDATE
https://api-aluno.vercel.app/aluno/641a40b589671400084456c0
![image](https://user-images.githubusercontent.com/93167615/227790960-244d146f-5cc1-4061-a90b-fc5f634cfdc7.png)

# OBSERVAÇÃO:

* Para obter todos os dados do(a) aluno(a) com a finalidade de preencher o formulário para edição, você deverá ter passado (via parâmetro da rota) um id quando ocorrer a navegação entre a página "Home" para a página "Formulário". De posse desse Id, você deverá fazer uma requisição ao servidor, para pegar todos os dados do(a) aluno(a)  e assim preencher os campos do formulário. Essa requisição pode ser implementada com base nas informações da imagem abaixo:

  - GET BY ID
https://api-aluno.vercel.app/aluno/641a44978af7bf0008b0eec4
![image](https://user-images.githubusercontent.com/93167615/227790968-9db52b9f-4f95-4a6c-bb3e-3787892058a9.png)

