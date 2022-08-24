import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba-Curso-Angular';
  tareas:any[]=[];

  crear(tarea: string, $event: any){
    $event.preventDefault(); //para prevenir reloading
    //agregamos una tarea en el array
    this.tareas.push(
    {
      id: Date.now(), //generamos un id en base al momento actual
      texto: tarea
    }
    );
    console.log(this.tareas);
    let miForm = document.getElementById("miForm");
    (<HTMLFormElement>miForm).reset();
};
  eliminarTarea(id:number){
    console.log(id);
    this.tareas= this.tareas.filter(tarea => tarea.id !== id);
  }
}
