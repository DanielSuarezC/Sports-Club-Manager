import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { disableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Entrenador } from 'src/app/modelo/entrenador/entrenador';

@Component({
  selector: 'app-registro-entrenador',
  templateUrl: './registro-entrenador.component.html',
  styleUrls: ['./registro-entrenador.component.css']
})
export class RegistroEntrenadorComponent implements OnInit{
  datoMaestro: Entrenador = new Entrenador();
  form1: FormGroup;
  // @BlockUI() blockUI: NgBlockUI;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private route: Router, private changeDetectorRef: ChangeDetectorRef) {
    const navigation = this.route.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.datoMaestro = navigation.extras.state['entrenador'];
    }
  }
  // constructor(private fb: FormBuilder, private usuarioService: UsuariosService, private dialog: MatDialog, private route: Router, private changeDetectorRef: ChangeDetectorRef) {
  //   const navigation = this.route.getCurrentNavigation();
  //   if (navigation?.extras.state) {
  //     this.datoMaestro = navigation.extras.state['usuario'];
  //   }
  // }

  guardar(): void {
    // this.blockUI.start();
    // this.datoMaestro.idclub = this.form1.get('idclub')?.value;
    // this.datoMaestro.nombre = this.form1.get('nombre')?.value;
    // this.datoMaestro.ciudad = this.form1.get('ciudad')?.value;
    // this.datoMaestro.direccion = this.form1.get('direccion')?.value;
    // this.datoMaestro.telefono = this.form1.get('telefono')?.value;
    // this.datoMaestro.direccion = this.form1.get('direccion')?.value;

    // this.clubService.guardarClub(this.datoMaestro).pipe().subscribe({
    //   next: (response) => {
    //     console.log('Respuesta del servidor:', response);
    //     Swal.fire('Club guardado', 'Información guardada correctamente', 'success')
    //     // alert('Club registrado con éxito');
    //     this.form1.reset(); // Reiniciar el formulario
    //   },
    //   error: (err) => {
    //     console.error('Error al registrar el club:', err);
    //     this.dialog.open(MensajeComponent, {
    //       data: {
    //         titulo: 'Error',
    //         mensaje: 'Error al registrar club. ' + err, textoBoton: 'Aceptar'
    //       }
    //     });
    //   }
    // }
    // );
  }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      ent_cedula: [''],
      nombre: [''],
      email: [''],
      telefono:[''],
      titulo:[''],
      elo: [''],
      idclub: [''],
      estado:['']
    });

    this.consultarClubes();

    // if (this.datoMaestro.id) {
    //   this.form1.get('clave')?.disable();
    // }
  }

  consultarClubes(): void {
    // this.blockUI.start();
    
    const registroInicial = 0;
    const registrosPorPagina = 10;
  
    // this.club.consultarUsuarios("", "", "", "", "", registroInicial, registrosPorPagina)
    //   .subscribe((value: RespuestaGenerica) => {
    //     console.log(value);
    //     if (value.isError === 'N') {
    //       this.usuarios = value.datos;
    //       this.blockUI.stop();
    //     } else {
    //       //this.blockUI.stop();
    //       this.dialog.open(MensajeComponent, {data: {titulo: 'Error',
    //       mensaje: 'Error al mostrar usuarios. ' + value.message, textoBoton: 'Aceptar' }});
    //       // Swal.fire('Error','Error al mostrar los usuarios. '+ value.message,'error');
    //     }
    //     this.blockUI.stop();
    //   }, error => {
    //     this.blockUI.stop();
    //     this.dialog.open(MensajeComponent, {data: {titulo: 'Error', mensaje: error.error.message, textoBoton: 'Aceptar' }})
    //   });
  }
  

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.llenarCampos(this.datoMaestro);
    });
  }

  hasErrors(controlName: string, errorType: string) {
    return this.form1.get(controlName)?.hasError(errorType) && this.form1.get(controlName)?.touched

  }

  llenarCampos(row?: Entrenador) {
  
    this.form1.patchValue({
      ent_cedula: row?.ent_cedula  || '',
      nombre: row?.nombre  || '',
      email: row?.email  || '',
      telefono:row?.telefono  || '',
      titulo:row?.tituloFide  || '',
      Elo: row?.Elo  || '',
      idclub: row?.idclub  || '',
      estado:row?.estado  || ''
    });
  }

}
