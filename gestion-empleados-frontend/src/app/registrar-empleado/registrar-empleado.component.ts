import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {

  empleado:Empleado = new Empleado();
  
  constructor(private empleadoService:EmpleadoService,private router:Router){}

  ngOnInit(){

  }

  OnSubmit(){
    console.log(this.empleado);
    this.empleadoService.registrarEmpleado(this.empleado).subscribe(data => {
      console.log(data);
      this.router.navigate(['/empleados']);
    }, error => console.log(error))
  }

}
