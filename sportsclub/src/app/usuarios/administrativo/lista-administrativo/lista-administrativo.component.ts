import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Administrativo } from 'src/app/modelo/administrativo/administrativo';
import { ClubService } from 'src/app/servicios/club/club.service';
import { AdministrativoService } from 'src/app/servicios/usuarios/administrativo/administrativo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-administrativo',
  templateUrl: './lista-administrativo.component.html',
  styleUrls: ['./lista-administrativo.component.css']
})
export class ListaAdministrativoComponent implements OnInit{
  displayedColumns: string[] = ['nombre','adm_cedula', 'email','telefono','cargo','sueldo','club','estado','icon'];
  dataSource: MatTableDataSource<Administrativo> =  new MatTableDataSource();
  cantidadRegistros: number;
  
  form1: FormGroup;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: AdministrativoService, private clubService: ClubService,private fb: FormBuilder, private dialog: MatDialog, private route: Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.form1 = this.fb.group({
      adm_cedula: [''],
      nombre: [''],
      cargo: [''],
      estado: ['']
    })
    this.consultarAdministrativos();
  }

  consultarAdministrativos(): void {
    // this.blockUI.start();

    if(this.form1.get('adm_cedula')?.value || this.form1.get('nombre')?.value || this.form1.get('cargo')?.value){
      // this.consultarClubesbyFilters();
    }else{
      this.service.consultarAdministrativos()
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

      this.consultarClubes();
    }
  }

  consultarClubes(): any {
    // this.blockUI.start();
      this.clubService.consultarClubes()
      .subscribe({
        next: (response) =>{
          return response.value;
        },
        error: (err) =>{
          console.log(err);
          // this.dialog.open(MensajeComponent, {data: {titulo: 'Error',
          //   mensaje: 'Error al mostrar clubes. ' + err, textoBoton: 'Aceptar' }});
            Swal.fire('Error','Error al mostrar los usuarios. '+ err.message,'error');
        }
      });
    }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editar(row: Administrativo){
    const navigationExtras: NavigationExtras = {
      state: {
        administrativo: row
      }
    };
    this.route.navigate(['/registro-administrativo'], navigationExtras);
  }

}
