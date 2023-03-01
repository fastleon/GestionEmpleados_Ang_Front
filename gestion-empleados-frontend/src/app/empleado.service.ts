import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //URL del servidor de la base de datos
  baseURL:string;

  constructor(private httpClient:HttpClient) { 
    this.baseURL = "http://localhost:8080/api/v1/empleados";
  }

  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`)
  }

  registrarEmpleado(empleado:Empleado):Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, empleado)
  }

  eliminarEmpleado(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  actualizarEmpleado(id:number, empleado:Empleado):Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`)
  }

}
 