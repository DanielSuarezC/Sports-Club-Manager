import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Torneo } from 'src/app/modelo/torneo/torneo';
import { TorneoService } from 'src/app/servicios/torneo/torneo.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-torneo',
  templateUrl: './lista-torneo.component.html',
  styleUrls: ['./lista-torneo.component.css']
})
export class ListaTorneoComponent implements OnInit{
  displayedColumns: string[] = ['idtorneo','nombre','fecha','modalidad','estado', 'detalles','icon'];
  dataSource: MatTableDataSource<Torneo> =  new MatTableDataSource();
  cantidadRegistros: number;
  
  form1: FormGroup;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: TorneoService,private fb: FormBuilder, private dialog: MatDialog, private route: Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.form1 = this.fb.group({
      idtorneo: [''],
      fecha: [''],
      nombre: [''],
      modalidad: [''],
      estado: ['']
    })
    this.consultarTorneos();
  }

  consultarTorneos(): void {
    // this.blockUI.start();

    if(this.form1.get('adm_cedula')?.value || this.form1.get('nombre')?.value || this.form1.get('cargo')?.value){
      // this.consultarClubesbyFilters();
    }else{
      this.service.consultarTorneos()
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
            Swal.fire('Error','Error al mostrar los torneos. '+ err,'error');
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

  editar(row: Torneo){
    const navigationExtras: NavigationExtras = {
      state: {
        torneo: row
      }
    };
    this.route.navigate(['/registro-torneo'], navigationExtras);
  }

  detalles(row: Torneo){
    const navigationExtras: NavigationExtras = {
      state: {
        torneo: row
      }
    };
    this.route.navigate(['/detalles-torneo'], navigationExtras);
  }


}
