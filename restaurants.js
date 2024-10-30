// Arquivo: restaurants.js

const restaurants = [
    { id: '1', name: 'La Bella Italia', rating: 4.5, type: 'Italiana', distance: 1.2, description: 'Autêntica comida italiana com um ambiente acolhedor.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '2', name: 'Sushi World', rating: 4.8, type: 'Japonesa', distance: 3.5, description: 'Sushi fresco e pratos tradicionais japoneses.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '3', name: 'Burger Haven', rating: 4.2, type: 'Hamburgueria', distance: 2.0, description: 'Hambúrgueres gourmet e batatas fritas irresistíveis.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '4', name: 'Pasta Palace', rating: 4.7, type: 'Italiana', distance: 0.9, description: 'Massas artesanais com receitas familiares.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '5', name: 'Salad Express', rating: 4.3, type: 'Saladas', distance: 1.8, description: 'Saladas frescas e opções saudáveis para qualquer hora do dia.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '6', name: 'Sweet Treats', rating: 4.6, type: 'Sobremesas', distance: 2.5, description: 'Deliciosas sobremesas e bolos caseiros.', image: 'https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg' },
    { id: '7', name: 'Taco Fiesta', rating: 4.4, type: 'Mexicana', distance: 2.3, description: 'Tacos autênticos e pratos mexicanos tradicionais.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s' },
    { id: '8', name: 'Café de Paris', rating: 4.6, type: 'Francesa', distance: 1.5, description: 'Delícias da culinária francesa com um toque sofisticado.', image: 'https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812' },
    { id: '9', name: 'Spicy Thai', rating: 4.7, type: 'Tailandesa', distance: 2.8, description: 'Pratos tailandeses picantes e saborosos.', image: 'https://www.baressp.com.br/bares/fotos/seupimenta1.jpg' },
    { id: '10', name: 'Romeo’s Pasta', rating: 4.3, type: 'Italiana', distance: 1.0, description: 'A melhor pasta italiana da cidade.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '11', name: 'Tempura Time', rating: 4.9, type: 'Japonesa', distance: 3.2, description: 'Pratos japoneses autênticos em um ambiente moderno.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '12', name: 'Grill King', rating: 4.1, type: 'Hamburgueria', distance: 2.6, description: 'Burgers e grelhados de dar água na boca.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '13', name: 'Green Delight', rating: 4.0, type: 'Saladas', distance: 1.7, description: 'Saladas frescas com ingredientes de alta qualidade.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '14', name: 'Dolce Desserts', rating: 4.8, type: 'Sobremesas', distance: 2.1, description: 'Sobremesas deliciosas e doces irresistíveis.', image: 'https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg' },
    { id: '15', name: 'Burrito Bros', rating: 4.5, type: 'Mexicana', distance: 2.9, description: 'Burritos e pratos mexicanos tradicionais.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s' },
    { id: '16', name: 'Parisian Delight', rating: 4.6, type: 'Francesa', distance: 1.6, description: 'Culinária francesa de alto nível em um ambiente elegante.', image: 'https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812' },
    { id: '17', name: 'Thai Twist', rating: 4.5, type: 'Tailandesa', distance: 3.0, description: 'Comida tailandesa cheia de sabor e autenticidade.', image: 'https://www.baressp.com.br/bares/fotos/seupimenta1.jpg' },
    { id: '18', name: 'Pasta Magic', rating: 4.4, type: 'Italiana', distance: 1.4, description: 'Receitas de massas que encantam a todos.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '19', name: 'Sakura Sushi', rating: 4.7, type: 'Japonesa', distance: 3.8, description: 'Peixes frescos e sushi de alta qualidade.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '20', name: 'Green Bowl', rating: 4.2, type: 'Saladas', distance: 1.9, description: 'Uma explosão de sabores saudáveis e frescos.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '21', name: 'The Italian Affair', rating: 4.5, type: 'Italiana', distance: 1.3, description: 'Clássicos italianos com um toque contemporâneo.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '22', name: 'Tokyo Nights', rating: 4.6, type: 'Japonesa', distance: 3.9, description: 'Ambiente japonês autêntico e sashimi fresco.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '23', name: 'Burger Binge', rating: 4.0, type: 'Hamburgueria', distance: 2.4, description: 'Uma experiência incrível de burger artesanal.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '24', name: 'Nature’s Greens', rating: 4.4, type: 'Saladas', distance: 1.5, description: 'Saúde e frescor em cada prato de salada.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '25', name: 'Sweet Heaven', rating: 4.9, type: 'Sobremesas', distance: 2.7, description: 'Doces divinos e bolos incríveis.', image: 'https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg' },
    { id: '26', name: 'El Mexicano', rating: 4.3, type: 'Mexicana', distance: 2.6, description: 'Uma viagem ao México em cada prato.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s' },
    { id: '27', name: 'Bistro Paris', rating: 4.5, type: 'Francesa', distance: 1.8, description: 'Gastronomia francesa em um ambiente charmoso.', image: 'https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812' },
    { id: '28', name: 'Bangkok Spice', rating: 4.6, type: 'Tailandesa', distance: 3.1, description: 'Especiarias tailandesas e sabores autênticos.', image: 'https://www.baressp.com.br/bares/fotos/seupimenta1.jpg' },
    { id: '29', name: 'Mama’s Kitchen', rating: 4.7, type: 'Italiana', distance: 1.1, description: 'Receitas italianas de família que aquecem o coração.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '30', name: 'Zen Sushi', rating: 4.8, type: 'Japonesa', distance: 3.4, description: 'Experiência tranquila com sushi de alta qualidade.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '31', name: 'Trattoria Deliziosa', rating: 4.6, type: 'Italiana', distance: 1.6, description: 'Sabor italiano com ingredientes autênticos.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '32', name: 'Samurai Sushi', rating: 4.5, type: 'Japonesa', distance: 3.0, description: 'Sushi criativo em um ambiente contemporâneo.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '33', name: 'Urban Grill', rating: 4.3, type: 'Hamburgueria', distance: 2.2, description: 'Hambúrgueres artesanais no estilo urbano.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '34', name: 'Fresh & Fit', rating: 4.2, type: 'Saladas', distance: 1.4, description: 'Saladas nutritivas para um estilo de vida saudável.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '35', name: 'Sugar Bliss', rating: 4.9, type: 'Sobremesas', distance: 2.9, description: 'Delícias açucaradas que encantam todos os paladares.', image: 'https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg' },
    { id: '36', name: 'Cantina Mexicana', rating: 4.4, type: 'Mexicana', distance: 2.7, description: 'Comida mexicana autêntica e atmosfera divertida.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s' },
    { id: '37', name: 'Le Petit Café', rating: 4.7, type: 'Francesa', distance: 1.9, description: 'Clássicos franceses em um ambiente intimista.', image: 'https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812' },
    { id: '38', name: 'Thai Delight', rating: 4.8, type: 'Tailandesa', distance: 3.3, description: 'Pratos tailandeses autênticos e cheios de sabor.', image: 'https://www.baressp.com.br/bares/fotos/seupimenta1.jpg' },
    { id: '39', name: 'Il Forno', rating: 4.6, type: 'Italiana', distance: 1.2, description: 'Pizzas e massas italianas assadas no forno.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '40', name: 'Wasabi Wonders', rating: 4.7, type: 'Japonesa', distance: 3.6, description: 'Sabores japoneses intensos e autênticos.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '41', name: 'Bella Notte', rating: 4.4, type: 'Italiana', distance: 1.7, description: 'Comida italiana romântica e autêntica.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '42', name: 'Sushi Zen', rating: 4.6, type: 'Japonesa', distance: 3.3, description: 'Sushi de alta qualidade em um ambiente relaxante.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '43', name: 'Burger Spot', rating: 4.2, type: 'Hamburgueria', distance: 2.1, description: 'Os melhores hambúrgueres artesanais da cidade.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '44', name: 'Green Oasis', rating: 4.5, type: 'Saladas', distance: 1.6, description: 'Saladas frescas e saborosas para todos os gostos.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '45', name: 'Choco Loco', rating: 4.9, type: 'Sobremesas', distance: 2.4, description: 'Para os amantes de chocolate e doces finos.', image: 'https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg' },
    { id: '46', name: 'Casa Mexicana', rating: 4.3, type: 'Mexicana', distance: 2.5, description: 'Comida mexicana tradicional com um toque caseiro.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s' },
    { id: '47', name: 'French Bistro', rating: 4.6, type: 'Francesa', distance: 1.4, description: 'Culinária francesa sofisticada e deliciosa.', image: 'https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812' },
    { id: '48', name: 'Thai Express', rating: 4.5, type: 'Tailandesa', distance: 3.2, description: 'Pratos tailandeses rápidos e cheios de sabor.', image: 'https://www.baressp.com.br/bares/fotos/seupimenta1.jpg' },
    { id: '49', name: 'Mamma Mia', rating: 4.7, type: 'Italiana', distance: 1.3, description: 'Receitas italianas que passam de geração em geração.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '50', name: 'Sakura Garden', rating: 4.8, type: 'Japonesa', distance: 3.7, description: 'Sushi e pratos japoneses em um ambiente zen.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '51', name: 'Amore Mio', rating: 4.5, type: 'Italiana', distance: 1.5, description: 'Um pedacinho da Itália com pratos irresistíveis.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '52', name: 'Tokyo Express', rating: 4.7, type: 'Japonesa', distance: 3.4, description: 'Delícias japonesas prontas para levar.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '53', name: 'Burgerville', rating: 4.3, type: 'Hamburgueria', distance: 2.3, description: 'Hambúrgueres artesanais e batatas crocantes.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '54', name: 'Vital Greens', rating: 4.6, type: 'Saladas', distance: 1.9, description: 'Opções saudáveis para uma vida leve.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '55', name: 'Sweet Delight', rating: 4.8, type: 'Sobremesas', distance: 2.6, description: 'Doces irresistíveis e bolos caseiros.', image: 'https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg' },
    { id: '56', name: 'La Cantina', rating: 4.5, type: 'Mexicana', distance: 2.2, description: 'Culinária mexicana com sabor e tradição.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s' },
    { id: '57', name: 'Café Francês', rating: 4.7, type: 'Francesa', distance: 1.2, description: 'Comida francesa em um ambiente acolhedor.', image: 'https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812' },
    { id: '58', name: 'Spice of Thai', rating: 4.9, type: 'Tailandesa', distance: 3.5, description: 'Autênticos pratos tailandeses com sabores picantes.', image: 'https://www.baressp.com.br/bares/fotos/seupimenta1.jpg' },
    { id: '59', name: 'Giro Italia', rating: 4.4, type: 'Italiana', distance: 1.8, description: 'Tradição italiana em cada prato.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '60', name: 'Zen Garden', rating: 4.8, type: 'Japonesa', distance: 3.6, description: 'Experiência única de sushi e pratos japoneses.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '61', name: 'Burger Hub', rating: 4.1, type: 'Hamburgueria', distance: 2.0, description: 'Para os amantes de hambúrguer artesanal.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '62', name: 'Leafy Green', rating: 4.3, type: 'Saladas', distance: 1.4, description: 'Saladas frescas com ingredientes naturais.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '63', name: 'Sugar Heaven', rating: 4.7, type: 'Sobremesas', distance: 2.8, description: 'Doces variados para todos os gostos.', image: 'https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg' },
    { id: '64', name: 'El Rancho', rating: 4.6, type: 'Mexicana', distance: 2.4, description: 'Tacos e burritos autênticos e saborosos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s' },
    { id: '65', name: 'Brasserie Paris', rating: 4.5, type: 'Francesa', distance: 1.7, description: 'Elegância francesa com pratos deliciosos.', image: 'https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812' },
    { id: '66', name: 'Bangkok Breeze', rating: 4.7, type: 'Tailandesa', distance: 3.1, description: 'Pratos tailandeses que trazem uma explosão de sabores.', image: 'https://www.baressp.com.br/bares/fotos/seupimenta1.jpg' },
    { id: '67', name: 'Pasta Lovers', rating: 4.6, type: 'Italiana', distance: 1.3, description: 'Massas artesanais e molhos deliciosos.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '68', name: 'Sushi Lounge', rating: 4.8, type: 'Japonesa', distance: 3.7, description: 'Ambiente moderno com sushi de qualidade.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '69', name: 'Burger Factory', rating: 4.4, type: 'Hamburgueria', distance: 2.2, description: 'Hambúrgueres exclusivos e suculentos.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '70', name: 'Pure Greens', rating: 4.2, type: 'Saladas', distance: 1.6, description: 'Opções de saladas saudáveis para todos.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '71', name: 'La Dolce Vita', rating: 4.3, type: 'Italiana', distance: 5.5, description: 'Autêntica culinária italiana para momentos especiais.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '72', name: 'Sakura House', rating: 4.7, type: 'Japonesa', distance: 6.2, description: 'Experiência única de sushi a mais de 5 km.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '73', name: 'Big City Burgers', rating: 4.2, type: 'Hamburgueria', distance: 10.3, description: 'Hambúrgueres irresistíveis no estilo americano.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '74', name: 'Green Garden', rating: 4.5, type: 'Saladas', distance: 7.8, description: 'Saladas frescas e opções vegetarianas.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '75', name: 'Dreamy Desserts', rating: 4.9, type: 'Sobremesas', distance: 12.5, description: 'Doces e sobremesas a uma distância especial.', image: 'https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg' },
    { id: '76', name: 'La Cucaracha', rating: 4.4, type: 'Mexicana', distance: 8.1, description: 'Pratos mexicanos para os fãs de sabores intensos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s' },
    { id: '77', name: 'La Belle France', rating: 4.8, type: 'Francesa', distance: 11.3, description: 'Culinária francesa refinada para uma experiência única.', image: 'https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812' },
    { id: '78', name: 'Thai Paradise', rating: 4.7, type: 'Tailandesa', distance: 5.7, description: 'Sabores tailandeses autênticos a mais de 5 km.', image: 'https://www.baressp.com.br/bares/fotos/seupimenta1.jpg' },
    { id: '79', name: 'Pasta Bella', rating: 4.6, type: 'Italiana', distance: 9.5, description: 'Pastas e molhos italianos em um local especial.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '80', name: 'Sushi Dreams', rating: 4.5, type: 'Japonesa', distance: 10.7, description: 'Sushi premium a uma distância exclusiva.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '81', name: 'Grill Master', rating: 4.1, type: 'Hamburgueria', distance: 6.4, description: 'Hambúrgueres artesanais com sabor de grelhados.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '82', name: 'Eco Greens', rating: 4.3, type: 'Saladas', distance: 8.9, description: 'Opções de saladas frescas a 8 km.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },
    { id: '83', name: 'Sugar Fantasy', rating: 4.8, type: 'Sobremesas', distance: 11.9, description: 'Sobremesas criativas para um dia especial.', image: 'https://img.freepik.com/fotos-premium/doces-de-chocolate-fundo-comida-doce-com-varios-recheios_84485-1886.jpg' },
    { id: '84', name: 'Mexicali', rating: 4.6, type: 'Mexicana', distance: 12.2, description: 'Tacos e pratos tradicionais mexicanos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOdESBf_QDcF5L0DWuJMyO3hAHcF_c1rXYw&s' },
    { id: '85', name: 'Parisian Flavours', rating: 4.9, type: 'Francesa', distance: 9.8, description: 'Uma jornada à França sem sair da cidade.', image: 'https://baggiocafe.com.br/cdn/shop/articles/TSC_01.jpg?v=1706894812' },
    { id: '86', name: 'Spice Up Thai', rating: 4.6, type: 'Tailandesa', distance: 6.1, description: 'Pratos tailandeses com especiarias intensas.', image: 'https://www.baressp.com.br/bares/fotos/seupimenta1.jpg' },
    { id: '87', name: 'Cucina Italiana', rating: 4.5, type: 'Italiana', distance: 10.1, description: 'Massas italianas e vinhos selecionados.', image: 'https://restaurantecosi.com.br/wp-content/uploads/2024/01/restaurante-italiano-sp-1.jpg' },
    { id: '88', name: 'Samurai Table', rating: 4.7, type: 'Japonesa', distance: 11.5, description: 'Uma experiência japonesa a mais de 10 km.', image: 'https://veganbusiness.com.br/wp-content/uploads/2022/04/sanro-vegetariano.jpeg' },
    { id: '89', name: 'Big Bite Burgers', rating: 4.3, type: 'Hamburgueria', distance: 7.3, description: 'Hambúrgueres que valem a viagem.', image: 'https://cdn.abrahao.com.br/base/024/d2d/699/nomes-de-hamburguer-para-cardapio.jpg' },
    { id: '90', name: 'Fresh Roots', rating: 4.4, type: 'Saladas', distance: 12.7, description: 'Saladas saudáveis e frescas a mais de 10 km.', image: 'https://img.freepik.com/fotos-premium/salada-de-comida-em-restaurante-self-service_538646-6724.jpg' },


];


module.exports = restaurants;