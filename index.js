const express = require('express');
const cors = require('cors');
const users = require('./users');
const restaurants = require('./restaurants');

const app = express();
app.use(express.json());
app.use(cors());

// Rota para validação de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).send({ error: 'Credenciais inválidas' });
    }

    res.json({ message: 'Login bem-sucedido' });
});

// Rota para obter todos os restaurantes
app.get('/restaurants', (req, res) => {
    const type = req.query.type;
    if (type) {
        const filteredRestaurants = restaurants.filter(r => r.type.toLowerCase() === type.toLowerCase());
        return res.json(filteredRestaurants);
    }
    res.json(restaurants);
});

// Rota para obter um restaurante por ID
app.get('/restaurants/:id', (req, res) => {
    const restaurant = restaurants.find(r => r.id === req.params.id);
    if (!restaurant) return res.status(404).send({ error: 'Restaurante não encontrado' });
    res.json(restaurant);
});

// Rota para criar um novo restaurante
app.post('/restaurants', (req, res) => {
    const newRestaurant = { id: String(restaurants.length + 1), ...req.body };
    restaurants.push(newRestaurant);
    res.status(201).json(newRestaurant);
});

// Rota para atualizar um restaurante
app.put('/restaurants/:id', (req, res) => {
    const index = restaurants.findIndex(r => r.id === req.params.id);
    if (index === -1) return res.status(404).send({ error: 'Restaurante não encontrado' });
    restaurants[index] = { ...restaurants[index], ...req.body };
    res.json(restaurants[index]);
});

// Rota para deletar um restaurante
app.delete('/restaurants/:id', (req, res) => {
    const index = restaurants.findIndex(r => r.id === req.params.id);
    if (index === -1) return res.status(404).send({ error: 'Restaurante não encontrado' });
    const deletedRestaurant = restaurants.splice(index, 1);
    res.json({ message: 'Restaurante removido com sucesso', restaurant: deletedRestaurant });
});

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
