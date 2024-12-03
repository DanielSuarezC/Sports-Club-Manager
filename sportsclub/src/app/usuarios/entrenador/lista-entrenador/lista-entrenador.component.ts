import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Entrenador } from 'src/app/modelo/entrenador/entrenador';
import { EntrenadorService } from 'src/app/servicios/usuarios/entrenador/entrenador.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-entrenador',
  templateUrl: './lista-entrenador.component.html',
  styleUrls: ['./lista-entrenador.component.css']
})
export class ListaEntrenadorComponent implements OnInit {

  displayedColumns: string[] = ['nombres', 'cedula', 'email','telefono','titulo','elo','sueldo','club','estado','icon'];
  dataSource: MatTableDataSource<Entrenador> =  new MatTableDataSource();
  cantidadRegistros: number;
  
  form1: FormGroup;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  // constructor(private usuarioService: UsuariosService, private fb: FormBuilder, private dialog: MatDialog, private route: Router) { }
  constructor(private service: EntrenadorService,private fb: FormBuilder, private dialog: MatDialog, private route: Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.form1 = this.fb.group({
      cedula: [''],
      nombre: [''],
      titulo: [''],
      estado: ['']
    })
    this.consultarEntrenadores();
  }

  consultarEntrenadores(): void {
    // this.blockUI.start();

    if(this.form1.get('adm_cedula')?.value || this.form1.get('nombre')?.value || this.form1.get('cargo')?.value){
      // this.consultarClubesbyFilters();
    }else{
      this.service.consultarEntrenadores()
      .subscribe({
        next: (response) =>{
          this.dataSource.data = response.value; // Asigna los datos a dataSource
          // this.cantidadRegistros = response.value.length;
          console.log('Datos en dataSource:', this.dataSource.data); // Verifica que se guarden correctamente
        },
        error: (err) =>{
          console.log(err);
          // this.dialog.open(MensajeComponent, {data: {titulo: 'Error',
          //   mensaje: 'Error al mostrar clubes. ' + err, textoBoton: 'Aceptar' }});
            Swal.fire('Error','Error al mostrar los usuarios. '+ err.message,'error');
        }
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editar(row: Entrenador){
    const navigationExtras: NavigationExtras = {
      state: {
        entrenador: row
      }
    };
    this.route.navigate(['/registro-entrenador'], navigationExtras);
  }


}
