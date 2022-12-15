import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()

export class PeliculaServices{
    peliculas: Pelicula[]; 
    hola(){
        return 'Hola desde PeliculaServices !!!';
    }

    getPeliculas(){
       return this.peliculas = [
            new Pelicula("Spiderman 4", 2020, 'https://enterateonline.files.wordpress.com/2015/01/spiderman-y-los-vengadores.jpg'),
            new Pelicula("Guardianes de la Galaxia", 2018, 'https://www.nacionflix.com/__export/1651528683331/sites/debate/img/2022/05/02/guardianes-de-la-galaxia_1.jpg_976912859.jpg'),
            new Pelicula("Avengers Infinity War", 2019, 'https://img.buzzfeed.com/buzzfeed-static/static/2018-04/26/13/asset/buzzfeed-prod-web-01/sub-buzz-2197-1524762686-7.jpg?downsize=600:*&output-format=auto&output-quality=auto'),
          ]
    }
}