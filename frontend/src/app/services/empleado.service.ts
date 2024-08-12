import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmpleado: Empleado;
  empleados : Empleado[];
  readonly URL_API = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {
    this.selectedEmpleado = new Empleado();
     this.empleados = [];
   }

  getEmpleados(){
    return this.http.get(this.URL_API);
  }

  PostEmpleado(Empleado:Empleado){
    return this.http.post(this.URL_API, Empleado);
  }

  putEmpleado(Empleado:Empleado){
    return this.http.put(this.URL_API +  `/${Empleado._id}`, Empleado);// se utiliza la version de ecmascript, debemos darle el id del empleado
  }

  deleteEmpleado(_id: string) { // Solo necesito el id, no todo lo del empleado
    return this.http.delete(this.URL_API + `/${_id}`);// utilizamos el metodo delete
  }

}

