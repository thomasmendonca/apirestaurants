// Arquivo: restaurants.js

const admin = require('firebase-admin');
const serviceAccount = require('./apirestaurants-4f53b-firebase-adminsdk-iv5l4-512933d7e5.json');

// Inicializa o Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://apirestaurants-4f53b.firebaseio.com'
});

const db = admin.firestore(); // Inicializa o Firestore

// Dicionário de restaurantes
const restaurants = [
    { "name": "Sakura Zen", "rating": 4.6, "type": "Japonesa", "distance": 4.1, "description": "Uma experiência gastronômica com sushi de alta qualidade.", "image": "https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg" },
    { "name": "Tokyo Delight", "rating": 4.5, "type": "Japonesa", "distance": 3.0, "description": "Sashimis frescos e ambiente aconchegante.", "image": "https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg" },
    { "name": "Banzai Grill", "rating": 4.7, "type": "Japonesa", "distance": 3.6, "description": "Os melhores sushis e robatas da cidade.", "image": "https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg" },
    { "name": "Burger Kingdom", "rating": 4.1, "type": "Hamburgueria", "distance": 2.7, "description": "Hambúrgueres suculentos e bebidas artesanais.", "image": "https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg" },
    { "name": "Cheesy Bites", "rating": 4.3, "type": "Hamburgueria", "distance": 2.5, "description": "Cheeseburgers irresistíveis para os amantes de queijo.", "image": "https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg" },
    { "name": "Grill'n'Burger", "rating": 4.5, "type": "Hamburgueria", "distance": 1.9, "description": "Combinação perfeita de hambúrgueres e grelhados.", "image": "https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg" },
    { "name": "La Dolce Vita", "rating": 4.8, "type": "Italiana", "distance": 1.3, "description": "Sabores italianos em um ambiente elegante.", "image": "https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg" },
    { "name": "Osteria Romana", "rating": 4.4, "type": "Italiana", "distance": 1.1, "description": "Autêntica culinária romana com massas frescas.", "image": "https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg" },
    { "name": "Bella Toscana", "rating": 4.6, "type": "Italiana", "distance": 2.2, "description": "A melhor experiência toscana da cidade.", "image": "https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg" },
    { "name": "Fresh Greens", "rating": 4.2, "type": "Saladas", "distance": 2.1, "description": "Opções de saladas frescas e saborosas.", "image": "https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg" },
    { "name": "Healthy Choice", "rating": 4.5, "type": "Saladas", "distance": 2.0, "description": "Deliciosas saladas e sucos naturais.", "image": "https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg" },
    { "name": "Green Bowl", "rating": 4.7, "type": "Saladas", "distance": 1.5, "description": "Saladas com ingredientes orgânicos e frescos.", "image": "https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg" },
    { "name": "Sweet Indulgence", "rating": 4.8, "type": "Sobremesas", "distance": 2.9, "description": "Sobremesas que vão encantar seu paladar.", "image": "https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg" },
    { "name": "Heavenly Delights", "rating": 4.9, "type": "Sobremesas", "distance": 2.6, "description": "Doces artesanais e sobremesas refinadas.", "image": "https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg" },
    { "name": "Cake Heaven", "rating": 4.5, "type": "Sobremesas", "distance": 3.1, "description": "Bolos deliciosos e sobremesas feitas na hora.", "image": "https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg" },
    { "name": "Cantina Mexicana", "rating": 4.4, "type": "Mexicana", "distance": 2.5, "description": "Sabores autênticos do México com muito tempero.", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s" },
    { "name": "Azteca's Grill", "rating": 4.6, "type": "Mexicana", "distance": 3.0, "description": "Comida mexicana tradicional com um toque moderno.", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s" },
    { "name": "Viva México", "rating": 4.5, "type": "Mexicana", "distance": 2.8, "description": "Tacos e burritos que vão surpreender seu paladar.", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s" },
    { "name": "Boulangerie de Provence", "rating": 4.8, "type": "Francesa", "distance": 1.9, "description": "Pães e doces franceses feitos diariamente.", "image": "https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812" },
    { "name": "Maison Fleurie", "rating": 4.6, "type": "Francesa", "distance": 1.7, "description": "Culinária francesa refinada com ingredientes frescos.", "image": "https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812" },
    { "name": "Le Petit Café", "rating": 4.7, "type": "Francesa", "distance": 2.3, "description": "Sofisticação francesa em cada prato.", "image": "https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812" },
    { "name": "Thai Garden", "rating": 4.7, "type": "Tailandesa", "distance": 3.3, "description": "Pratos tailandeses autênticos com ingredientes frescos.", "image": "https://www.baressp.com.br/bares/fotos/seupimenta1.jpg" },
    { "name": "Bangkok Bites", "rating": 4.5, "type": "Tailandesa", "distance": 2.9, "description": "Sabores tailandeses com um toque picante.", "image": "https://www.baressp.com.br/bares/fotos/seupimenta1.jpg" },
    { "name": "Spice Route", "rating": 4.8, "type": "Tailandesa", "distance": 2.7, "description": "Experiência culinária com sabores intensos da Tailândia.", "image": "https://www.baressp.com.br/bares/fotos/seupimenta1.jpg" },
    { "name": "Pasta Paradiso", "rating": 4.6, "type": "Italiana", "distance": 1.6, "description": "Receitas tradicionais italianas e massas artesanais.", "image": "https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg" },
    { "name": "Trattoria del Mare", "rating": 4.7, "type": "Italiana", "distance": 1.8, "description": "Massas e frutos do mar preparados com excelência.", "image": "https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg" },
    { "name": "Dolce Sapore", "rating": 4.9, "type": "Italiana", "distance": 1.4, "description": "Sabores italianos em pratos únicos e deliciosos.", "image": "https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg" },
    { "name": "Burger Spot", "rating": 4.4, "type": "Hamburgueria", "distance": 2.2, "description": "Hambúrgueres artesanais e molhos especiais.", "image": "https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg" },
    { "name": "Urban Burger", "rating": 4.6, "type": "Hamburgueria", "distance": 2.4, "description": "Hambúrgueres criativos e saborosos no centro da cidade.", "image": "https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg" },
    { "name": "Burger Joint", "rating": 4.2, "type": "Hamburgueria", "distance": 3.0, "description": "Ambiente descontraído e hambúrgueres saborosos.", "image": "https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg" }
];

// Função para carregar os restaurantes no Firestore
async function loadRestaurants() {
    try {
        for (const restaurant of restaurants) {
            await db.collection('restaurants').add(restaurant);
        }
        console.log('Restaurantes adicionados com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar restaurantes: ', error);
    }
}

// Carrega os restaurantes no Firestore quando o script for executado
loadRestaurants();

module.exports = restaurants;
