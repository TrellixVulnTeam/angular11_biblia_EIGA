import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //https://jsonplaceholder.typicode.com/guide/

  baseUrl: string;
  constructor( private httClient: HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }


  getAll(): Promise<any[]>{
    /**
     * el get devuelve un Observer y lo transormaos a promesa, ya que,
     * esta es mas flexible porque nos permite trabajar on async , await y con try-catch
     *
     * @Promise <any[]>
     * Al transformar el observer a promesa, hay que devolver una Promise<any[]>, ya que, baseUrl,
     * devuelve un array de objetos JSON. También el get se ha de especificar que resuelve el get,
     * en este caso igual quel a promesa .get<any[]>
     */


    //return this.httClient.get(this.baseUrl).toPromise(); //sin promesa
    return this.httClient.get<any[]>(this.baseUrl).toPromise();
  }
}
