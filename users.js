// Arquivo: users.js

const admin = require('firebase-admin');
const serviceAccount = require('./CREDENCIAL');

// Inicializa o Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://apirestaurants-4f53b.firebaseio.com'
});

const db = admin.firestore(); // Inicializa o Firestore

// Dicionário de usuários
const users = [
    { username: 'user1', password: 'senha1' },
    { username: 'user2', password: 'senha2' },
    { username: 'user3', password: 'senha3' },
    { username: 'admin', password: 'admin123' }
];

// Função para carregar os usuários no Firestore
async function loadUsers() {
    try {
        for (const user of users) {
            await db.collection('users').add(user);
        }
        console.log('Usuários adicionados com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar usuários: ', error);
    }
}

// Carrega os usuários no Firestore quando o script for executado
loadUsers();

module.exports = users;
