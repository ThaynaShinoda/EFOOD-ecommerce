import sushi from '../assets/images/sushi.png';
import pasta from '../assets/images/pasta.png';
import curry from '../assets/images/curry.png';
import feijoada from '../assets/images/feijoada.png';
import burger from '../assets/images/burger.png';
import tacos from '../assets/images/tacos.png';

import sushis from '../assets/images/menu/sushis.jpg'
import tempura from '../assets/images/menu/tempura.jpg'
import yakisoba from '../assets/images/menu/yakisoba.jpg'

import pizza from '../assets/images/menu/pizza.jpg'
import carbonara from '../assets/images/menu/carbonara.jpg'
import risoto from '../assets/images/menu/risoto.jpg'

import burrito from '../assets/images/menu/burrito.jpg'
import taco from '../assets/images/menu/taco.jpg'
import nachos from '../assets/images/menu/nachos.jpg'

import naan from '../assets/images/menu/naan.jpg'
import chanaMasala from '../assets/images/menu/chanaMasala.jpg'
import frangoTikka from '../assets/images/menu/frangoTikka.jpg'

import comboBurger from '../assets/images/menu/comboBurger.jpg'
import batataFrita from '../assets/images/menu/batataFrita.jpg'
import cheseeburger from '../assets/images/menu/cheseeburger.jpg'

import escondidinho from '../assets/images/menu/escondidinho.jpg'
import moqueca from '../assets/images/menu/moqueca.jpg'
import feijoadaCompleta from '../assets/images/menu/feijoadaCompleta.jpg'


import { Restaurant } from '../models/Restaurant';

export const restaurants: Restaurant[] = [
  {
    id: 1,
    restaurantName: 'Hioki Sushi',
    starsNum: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    menu: [
      {
        id: 1.1,
        name: 'Combo Sushi 20 peças',
        description: 'Salmão, atum, kani, uramaki e hot roll.',
        price: 49.9,
        image: sushis

      },
      {
        id: 1.2,
        name: 'Tempurá de Camarão',
        description: 'Camarões empanados crocantes servidos com molho tare.',
        price: 32.9,
        image: tempura
      },
      {
        id: 1.3,
        name: 'Yakissoba Tradicional',
        description: 'Macarrão oriental com legumes e carne bovina.',
        price: 39.9,
        image: yakisoba
      }
    ]
  },
  {
    id: 2,
    restaurantName: 'La Dolce Vita Trattoria',
    starsNum: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    infos: ['Italiana'],
    menu: [
      {
        id: 2.1,
        name: 'Spaghetti alla Carbonara',
        description: 'Massa com molho cremoso, bacon crocante e parmesão.',
        price: 42.0,
        image: carbonara
      },
      {
        id: 2.2,
        name: 'Risotto de Funghi',
        description: 'Arroz arbório com cogumelos frescos e vinho branco.',
        price: 46.5,
        image: risoto
      },
      {
        id: 2.3,
        name: 'Pizza Margherita',
        description: 'Molho de tomate, muçarela de búfala e manjericão.',
        price: 38.0,
        image: pizza
      }
    ]
  },
  {
    id: 3,
    restaurantName: 'El Mariachi Taquería',
    starsNum: '4.8',
    description:
      'Descubra os sabores vibrantes do México com a El Mariachi Taquería! Tacos autênticos, burritos generosos e nachos crocantes, tudo preparado com ingredientes frescos. Sinta o tempero mexicano no conforto da sua casa!',
    image: tacos,
    infos: ['Mexicana'],
    menu: [
      {
        id: 3.1,
        name: 'Taco Al Pastor',
        description: 'Carne suína marinada, abacaxi grelhado e coentro.',
        price: 24.9,
        image: taco
      },
      {
        id: 3.2,
        name: 'Burrito de Carne',
        description: 'Feijão, arroz, carne bovina, queijo e molho picante.',
        price: 35.0,
        image: burrito
      },
      {
        id: 3.3,
        name: 'Nachos com Guacamole',
        description: 'Nachos crocantes com guacamole fresco e queijo.',
        price: 22.5,
        image: nachos
      }
    ]
  },
  {
    id: 4,
    restaurantName: 'Bombay Sabor Indiano',
    starsNum: '4.7',
    description:
      'Viaje pela Índia com os pratos exóticos do Bombay Sabor Indiano. Curries aromáticos, naan macio e especiarias marcantes em cada mordida. Comida quente, embalada com carinho e entrega rápida. Experimente já!',
    image: curry,
    infos: ['Indiana', 'Vegana'],
    menu: [
      {
        id: 4.1,
        name: 'Chana Masala',
        description: 'Grão-de-bico cozido com molho de tomate e especiarias.',
        price: 27.0,
        image: chanaMasala
      },
      {
        id: 4.2,
        name: 'Frango Tikka Masala',
        description: 'Cubos de frango ao molho cremoso levemente apimentado.',
        price: 34.5,
        image: frangoTikka
      },
      {
        id: 4.3,
        name: 'Naan com Alho',
        description: 'Pão indiano assado com manteiga e alho.',
        price: 12.0,
        image: naan
      }
    ]
  },
  {
    id: 5,
    restaurantName: 'Burger & Co.',
    starsNum: '4.5',
    description:
      'Clássicos irresistíveis com um toque moderno! Hambúrgueres suculentos, batatas crocantes e molhos exclusivos esperam por você no Burger & Co. Monte seu combo ideal e receba em casa com rapidez e qualidade!',
    image: burger,
    infos: ['Americana', 'Lanches'],
    menu: [
      {
        id: 5.1,
        name: 'Cheeseburger Clássico',
        description: 'Hambúrguer 180g, queijo cheddar, alface e tomate.',
        price: 29.9,
        image: cheseeburger
      },
      {
        id: 5.2,
        name: 'Combo Burger & Batata',
        description: 'Hambúrguer + batata frita + refrigerante.',
        price: 39.9,
        image: comboBurger
      },
      {
        id: 5.3,
        name: 'Batata Frita com Cheddar e Bacon',
        description: 'Porção crocante com cobertura cremosa.',
        price: 19.9,
        image: batataFrita
      }
    ]
  },
  {
    id: 6,
    restaurantName: 'Sabores do Brasil',
    starsNum: '4.9',
    description:
      'Comida brasileira com gostinho de casa! Feijoada, moqueca, escondidinho e muito mais, preparados com amor e ingredientes fresquinhos. Tradição e sabor direto para a sua mesa. Peça agora!',
    image: feijoada,
    infos: ['Destaque da semana', 'Brasileira'],
    menu: [
      {
        id: 6.1,
        name: 'Feijoada Completa',
        description: 'Feijão preto com carnes, arroz, farofa e couve.',
        price: 44.0,
        image: feijoadaCompleta
      },
      {
        id: 6.2,
        name: 'Escondidinho de Carne Seca',
        description: 'Purê de mandioca com recheio de carne seca desfiada.',
        price: 35.0,
        image: escondidinho
      },
      {
        id: 6.3,
        name: 'Moqueca de Peixe',
        description: 'Peixe ao leite de coco com pimentões e dendê.',
        price: 47.9,
        image: moqueca
      }
    ]
  },
];
