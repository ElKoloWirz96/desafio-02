import { Component } from '@angular/core';

interface Student {
  nombre: string;
  aprobado: boolean;
}

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})

export class StudentsPageComponent {

  // Booleano para cambiar el color de los alumnos

  hasError = true;

  isDisabled = false;

  // Array de alumnos

  students: Student[] = [
    { nombre: 'Franco', aprobado: true },
    { nombre: 'Agustin', aprobado: false },
    { nombre: 'Pablo', aprobado: true },
    { nombre: 'Maxi', aprobado: false },
  ];

  // Propiedades

  mostrarLista: boolean = false;
  student: any;
  nuevoAlumnoNombre: string = '';

  // Funciones
  // Funcion para mostar lista

  toggleMostrarLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  // Funcion para el selector de aprobado y desaprobado

  onSelectChange(event: Event, student: Student) {
    const selectElement = event.target as HTMLSelectElement;
    const newValue = selectElement.value === 'true';
    student.aprobado = newValue;
  }

  // Funcion para agregar un nuevo alumno a la lista

  agregarAlumno () {
    if ( this.nuevoAlumnoNombre.trim() !== '' ) {
      const nuevoAlumno: Student = {
        nombre: this.nuevoAlumnoNombre, aprobado: false
      };
      this.students.push(nuevoAlumno);
      this.nuevoAlumnoNombre = '';
    }
  }

}