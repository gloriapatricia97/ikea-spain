var config = {
    style: 'mapbox://styles/gloriapatricia97/cmirqf6t8000s01paddf13n7v',
    accessToken: 'pk.eyJ1IjoiZ2xvcmlhcGF0cmljaWE5NyIsImEiOiJjbWlybzZ5d2UwYjk5M2RxdGg1emFmYTVzIn0.o18_g6y9xCRiH6-0lRnp1g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Historia de IKEA en España',
    subtitle: 'Desde la primera tienda hasta la actualidad',
    byline: 'By Gloria Labrador',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'barcelona',
            alignment: 'left',
            hidden: false,
            title: 'La primera tienda IKEA en España',
            image: './assets/1996.jpg',
            description: 'El 15 de mayo de 1996 abrió la primera tienda de IKEA en España, 33 años después de que se abriese la primera tienda fuera de Suecia. Fue en Barcelona - Badalona.',
            location: {
                center: [2.25988, 41.85652],
                zoom: 8,
                pitch: 41,
                bearing: 44
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'madrid',
            alignment: 'right',
            hidden: false,
            //title: 'Bilbao',
            image: './assets/IKEA-alcorcon.png',
            description: 'Poco después le siguió la tienda de Alcorcón en Madrid, que abrió sus puertas el 25 de septiembre de ese mismo año.',
            location: {
                center: [-3.82775, 40.35777],
                zoom: 9.5,
                pitch: 52.70,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ultima',
            alignment: 'left',
            hidden: false,
            //title: 'Vitoria-Gasteiz',
            image: './assets/ikea3.jpg',
            description: 'Una de las últimas en abrir fue la de Tarragona, en 2020.',
            location: {
                center: [1.24756, 41.12198],
                zoom: 7.88,
                pitch: 51,
                bearing: 15.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mapa-completo',
            title: 'Todas las tiendas por año',
            description: 'Aquí puedes explorar todas las tiendas IKEA en España según su año de apertura usando el slider.',
            alignment: 'top-left',
            location: {
                center: [ -3.7, 40.4 ],
                zoom: 5,
                bearing: 0,
                pitch: 0
            },
            onChapterEnter: [],
            onChapterExit: [],
            callback: 'initYearFilter'
        }
    ]
};
