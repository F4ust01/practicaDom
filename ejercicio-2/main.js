const cardContainer = document.querySelector('.card-container');


const cards = [
    {
        title: 'I brought you my bullets, you brought me your love.',
        description: 'Publicado el 23 de julio de 2002, es el álbum debut de la banda estadounidense de rock My Chemical Romance. El disco fue producido por Geoff Rickly, el cantante de la banda Thursday, que trabajaba por aquel entonces en la discográfica Eyeball Records.',
        image: './img/bullets.jpg'
    },
    {
        title: 'Three cheers for sweet revenge',
        description: 'es el segundo álbum de estudio de la banda estadounidense de rock My Chemical Romance. Se publicó en 2004 y fue su primer disco bajo el sello Reprise Records.',
        image: './img/revenge.png'
    },
    {
        title: 'The Black Parade',
        description: 'The Black Parade es el tercer álbum de estudio de la banda estadounidense de rock My Chemical Romance. Publicado el 23 de octubre de 2006 por la discográfica Reprise Records, sus canciones están asociadas a los géneros rock alternativo, emo, pop punk, ópera rock y power ballad.',
        image: './img/parade.png'
    },
    {
        title: 'Danger days: the true lives of the Fabulous Killjoys',
        description: 'Danger days: the true lives of the Fabulous Killjoys es el cuarto álbum de estudio de la banda estadounidense de rock My Chemical Romance, y el último de su primera etapa.​',
        image: './img/danger.jpg'
    },
    {
        title: 'Conventional weapons',
        description: 'Conventional weapons es un álbum de estudio de descartes de la banda estadounidense de rock My Chemical Romance, publicado entre 2012 y 2013. Esta colección está formada por diez canciones que fueron grabadas en 2009 para el cuarto álbum de la banda, pero que no fueron incluidas en su edición final.',
        image: './img/weapons.jpg'
    },
    {
        title: 'The Black Parade is dead!',
        description: 'The Black Parade is dead! es el segundo videoálbum de CD-DVD del grupo My Chemical Romance; se publicó el 1 de julio de 2008 en Estados Unidos, y unos días después en algunos países hispanohablantes.',
        image: './img/bpid.jpg'
    },
    
]


const createCards = () => {  
    cards.map(card => {

        const cardElement = document.createElement('article');
        cardElement.classList.add('card','shadow', 'card-custom', 'm-3');
        cardElement.innerHTML += `
        <img class="card-img-top card-img" src="${card.image}" alt="${card.title}">
        <div class="card-body">
            <h5 class="card-title text-center">${card.title}</h5>
            <p class="card-text text-truncate">${card.description}</p>
            <a href="#" class="btn btn-primary col-12">Ver más</a>
        </div>
        `;
        cardContainer.appendChild(cardElement);
    });
}

createCards();