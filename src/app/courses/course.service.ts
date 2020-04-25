import { Course } from './course';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CourseService{

    retriveAll(): Course[]{
        return COURSES;
    }

}

var COURSES: Course[] = [

    {
        id: 1,
        name: 'Angular: CLI',
        imageUrl: '/assets/imagens/forms.png',
        price: 19.99,
        code: 'xps-1222',
        duration: 120,
        rating: 3,
        releaseDate: 'Maio, 24, 2020',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.'
     },
    {
     id: 2,
     name: 'Angular: Forms',
     imageUrl: '/assets/imagens/forms.png',
     price: 24.99,
     code: 'xps-8796',
     duration: 120,
     rating: 4.5,
     releaseDate: 'Maio, 24, 2020',
     description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.'
  },
  {
    id: 3,
    name: 'Angular: HTTP',
    imageUrl: '/assets/imagens/http.png',
    price: 36.99,
    code: 'lkl-8796',
    duration: 80,
    rating: 4,
    releaseDate: 'Maio, 24, 2020',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.'
 },
 {
    id: 4,
    name: 'Angular: Router',
    imageUrl: '/assets/imagens/http.png',
    price: 46.99,
    code: 'ohp-1096',
    duration: 80,
    rating: 4,
    releaseDate: 'Maio, 24, 2020',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.'
 },
 {
    id: 5,
    name: 'Angular: Animations',
    imageUrl: '/assets/imagens/http.png',
    price: 56.99,
    code: 'phw-9391',
    duration: 80,
    rating: 4,
    releaseDate: 'Maio, 25, 2020',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.'
 }
 
]
