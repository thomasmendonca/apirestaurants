const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./apirestaurants-4f53b-firebase-adminsdk-iv5l4-512933d7e5.json');

// Inicializa o Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://apirestaurants-4f53b.firebaseio.com'
});

const db = admin.firestore(); // Inicializa o Firestore
const app = express();
app.use(express.json());
app.use(cors());

// Rota para validação de login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const usersSnapshot = await db.collection('users').where('username', '==', username).where('password', '==', password).get();
        if (usersSnapshot.empty) {
            return res.status(401).send({ error: 'Credenciais inválidas' });
        }
        res.json({ message: 'Login bem-sucedido' });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao verificar credenciais' });
    }
});

// Rota para obter todos os restaurantes
app.get('/restaurants', async (req, res) => {
    const type = req.query.type;
    try {
        let query = db.collection('restaurants');
        if (type) {
            query = query.where('type', '==', type);
        }
        const snapshot = await query.get();
        const restaurants = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(restaurants);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao buscar restaurantes' });
    }
});

// Rota para obter um restaurante por ID
app.get('/restaurants/:id', async (req, res) => {
    try {
        const doc = await db.collection('restaurants').doc(req.params.id).get();
        if (!doc.exists) return res.status(404).send({ error: 'Restaurante não encontrado' });
        res.json({ id: doc.id, ...doc.data() });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao buscar restaurante' });
    }
});

// Rota para criar um novo restaurante
app.post('/restaurants', async (req, res) => {
    try {
        const newRestaurant = req.body;
        const docRef = await db.collection('restaurants').add(newRestaurant);
        res.status(201).json({ id: docRef.id, ...newRestaurant });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao criar restaurante' });
    }
});

// Rota para atualizar um restaurante
app.put('/restaurants/:id', async (req, res) => {
    try {
        const updates = req.body;
        const docRef = db.collection('restaurants').doc(req.params.id);
        await docRef.update(updates);
        res.json({ id: req.params.id, ...updates });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao atualizar restaurante' });
    }
});

// Rota para deletar um restaurante
app.delete('/restaurants/:id', async (req, res) => {
    try {
        await db.collection('restaurants').doc(req.params.id).delete();
        res.json({ message: 'Restaurante removido com sucesso' });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao deletar restaurante' });
    }
});

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

