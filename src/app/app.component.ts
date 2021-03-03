import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 


  nombre2:string = 'jeSuS hURtAdo'
  nombre:string = 'Capitan América'
  arreglo:Array<number> = [1,2,3,4,5,6,7,8,9]
  PI:number = Math.PI
  porcentaje:number = 0.234
  salario:number = 1234.5
  fecha:Date = new Date()
  url:string = "https://www.youtube.com/embed/S1cwGg8f1Ts"
  idioma:string = 'es'

  activo:boolean = true
  
  promesa = new Promise<string>((res)=>{
    setTimeout(()=>{
      res('Data enviada')
    },4500)
   
  })



  heroe = {
    nombre:'Ryan Reynolds',
    clave:'Deadpool',
    direccion:{
      calle:'Avenida del condor',
      casa:'casa x'
    }
  }


  cambiarEs(){
    this.idioma = 'es'
  }
  cambiarEn(){
    this.idioma = 'en'
  }
  cambiarFr(){
    this.idioma = 'fr'
  }

  cambiarActivo(algo:boolean){
    if(algo ===true){
      this.activo = false
    }
    else if(algo ==false){
      this.activo = true
    }
    return this.activo
  }
}
