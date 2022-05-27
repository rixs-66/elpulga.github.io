document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: 'src/industrial/1.jpg' },
        { img: 'src/industrial/2.JPG' },
        { img: 'src/industrial/3.JPG' },
        { img: 'src/industrial/4.JPG' },
        { img: 'src/industrial/5.JPG' },
        { img: 'src/industrial/6.jpg' },
        { img: 'src/industrial/7.jpg' },
        { img: 'src/industrial/8.jpg' },
        { img: 'src/industrial/9.jpg' },
        { img: 'src/industrial/10.JPG'},
        { img: 'src/industrial/11.JPG'}

    ]

    let contador = 0;
    const contenedor = document.querySelector('.slideShow');
    const overlay = document.querySelector('.overlay');
    const img_galeria = document.querySelectorAll('.galeria img');
    const img_slideshow = document.querySelector('.slideShow img');

    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.left-arrow'),
            atras2 = contenedor.querySelector('.fa-arrow-left'),
            adelante = contenedor.querySelector('.right-arrow'),
            adelante2 = contenedor.querySelector('.fa-arrow-right'),
            img = contenedor.querySelector('img'),
            tgt = event.target;

        if (tgt == atras || tgt == atras2) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img;
                contador--;
            } else {
                img.src = imagenes[imagenes.length - 1].img;
                contador = imagenes.length - 1;
            }
        } else if (tgt == adelante || tgt == adelante2) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img;
                contador++;
            } else {
                img.src = imagenes[0].img;
                contador = 0;
            }
        }



    });

    Array.from(img_galeria).forEach(img => {
        img.addEventListener('click', event => {
            const img_selected = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[img_selected].img
            contador = img_selected;
            overlay.style.visibility = 'visible';
        })
    });

    document.querySelector('.btn-cerrar').addEventListener('click', () => {
        overlay.style.visibility= 'hidden';
    })


});
