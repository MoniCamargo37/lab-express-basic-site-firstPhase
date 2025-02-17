const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static('public'));// Require Express
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');


const paintingsObject= {
    paintings: [
    {
      name: 'Carnaval em Madureira',
      year: '1923',
      image: '/img/carnaval-em-madureira.jpg',
      alt: 'Carnaval em Madureira',
      description: 'In the work A Negra, Tarsila shows the figure of a woman with well-marked features, large hands and feet and a small head. In addition, the artist explores cubist elements in the background.'
    },
    {
      name: 'A Cuca',
      year: '1924',
      image: '/img/Acuca1924.jpg',
      alt: 'A Cuca',
      description: 'The painting "A Cuca" brings a figure present in Brazilian folklore and in the imagination of the population. According to legend, the cuca was a wicked witch with the body of an alligator who kidnapped disobedient children.'
    },
    {
      name: 'Abaporu',
      year: '1928',
      image: '/img/amaral-do-tarsila-abaporu.jpg',
      alt: 'Abaporu',
      description: 'One of Tarsila`s best known works is, without doubt, Abaporu. The name is a combination of the Tupis words aba (man), pora (people) and ú (eat), meaning man who eats people, or anthropophagous.'
    }
  ]
};

//home route
app.get('/', (req, res, next) => {res.status(200).render('home')
});

// about Route:
app.get('/about', (request, response, next) =>{response.status(200).render('about')});
//gallery route:
app.get('/gallery', (request, response, next) => {response.status(200).render('gallery')});
//contact Route
app.get('/contact', (request, response, next) => {response.status(200).render('contact')
});

//work route:
app.get('/work', (request, response, next) => {
    response.status(200).render('work', paintingsObject)
  });


// Server Started
app.listen(3005, () => {console.log('My first app listening on port 3001 about a brazilian painter')});

