import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  base_url: string = 'http://localhost:3000/api'

  constructor( private http: HttpClient) { }

  crearUsuario( formData: RegisterForm){
     
    return this.http.post( `${this.base_url}/usuarios`, formData )

  }

}
