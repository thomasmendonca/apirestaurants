# 🍽️ API de Restaurantes e Usuários - Documentação

Bem-vindo à documentação da API de restaurantes e usuários! Abaixo você encontrará informações detalhadas sobre como usar os endpoints GET e POST para interagir com os dados de restaurantes e usuários. 🚀

---

## 📌 Visão Geral

### **Base URL**: `http://localhost:5000`
# API - Configuração de Credenciais

## Credenciais

As credenciais necessárias para o uso desta API serão enviadas através do Microsoft Teams. Após recebê-las, siga os passos abaixo para configurar corretamente o acesso:

1. **Inclua o arquivo JSON das credenciais**:
   Coloque o arquivo JSON das credenciais dentro da pasta principal da API.

2. **Modifique o código nos arquivos `index.js`, `restaurants.js` e `users.js`**:
   Atualize o caminho do arquivo de credenciais nesses arquivos conforme descrito a seguir:

   - Substitua a linha:
     ```javascript
     const serviceAccount = require('./CREDENCIAL');
     ```

   - Por:
     ```javascript
     const serviceAccount = require('./CAMINHO_DO_ARQUIVO_JSON');
     ```

   Onde `CAMINHO_DO_ARQUIVO_JSON` deve ser substituído pelo caminho exato do arquivo JSON de credenciais.

   > **Nota**: Certifique-se de que o caminho esteja correto para evitar erros de autenticação ao iniciar a API.



---

## 🚀 Endpoints Principais

### **Restaurantes** 📍

#### 1. **GET** `/restaurants`
   - **Descrição**: Retorna todos os restaurantes disponíveis com detalhes como nome, tipo, avaliação, distância, e imagem.
   - **Resposta**:
     ```json
     [
       {
         "id": "1",
         "name": "La Bella Italia",
         "rating": 4.5,
         "type": "Italiana",
         "distance": 1.2,
         "description": "Autêntica comida italiana com um ambiente acolhedor.",
         "image": "https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg"
       }
     ]
     ```

#### 2. **POST** `/restaurants`
   - **Descrição**: Adiciona um novo restaurante à lista.
   - **Body**:
     ```json
     {
       "name": "Novo Restaurante",
       "rating": 4.5,
       "type": "Mexicana",
       "distance": 2.0,
       "description": "Descrição do restaurante",
       "image": "URL da imagem"
     }
     ```

#### 3. **GET** `/restaurants/:id`
   - **Descrição**: Retorna os detalhes de um restaurante específico pelo `ID`.
   - **Resposta**:
     ```json
     {
       "id": "1",
       "name": "La Bella Italia",
       "rating": 4.5,
       "type": "Italiana",
       "distance": 1.2,
       "description": "Autêntica comida italiana com um ambiente acolhedor.",
       "image": "https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg"
     }
     ```

### **Usuários** 👥

#### 1. **GET** `/users`
   - **Descrição**: Retorna a lista de todos os usuários cadastrados.
   - **Resposta**:
     ```json
     [
       {
         "username": "user1",
         "password": "senha1"
       },
       {
         "username": "admin",
         "password": "admin123"
       }
     ]
     ```

#### 2. **POST** `/users`
   - **Descrição**: Adiciona um novo usuário ao sistema.
   - **Body**:
     ```json
     {
       "username": "novo_usuario",
       "password": "nova_senha"
     }
     ```

---

## ⚙️ Configurações

- Clone o projeto e instale as dependências:
  ```bash
  git clone https://github.com/thomasmendonca/apirestaurants/
  cd api
  npm install
