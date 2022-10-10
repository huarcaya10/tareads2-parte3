import { Component,TemplateRef } from '@angular/core';
import{BsModalRef,BsModalService}from'ngx-bootstrap/modal';
import { Product } from './model/producto.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
  posicionActualizar:number = 0;
  posicionVer:number =0;
  open(template: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template);
    this.posicionActualizar=position;
    this.d_descripcion=this.products[this.posicionActualizar].description;
    this.d_ruta=this.products[this.posicionActualizar].image;
    this.d_nombre=this.products[this.posicionActualizar].name;
    this.d_porcentaje=this.products[this.posicionActualizar].porcentaje;
    this.d_estado=this.products[this.posicionActualizar].estado;
  }
  open1(template1: TemplateRef<any>,position :number) {
    this.modalRef = this.modalService.show(template1);
    this.posicionVer=position;
    this.d_descripcion=this.products[this.posicionVer].description;
    this.d_ruta=this.products[this.posicionVer].image;
    this.d_nombre=this.products[this.posicionVer].name;
    this.d_porcentaje=this.products[this.posicionVer].porcentaje;
    this.d_estado=this.products[this.posicionVer].estado;
    this.d_price=this.products[this.posicionVer].price;
  }
  d_descripcion: string="";
  d_ruta: string ="";
  d_nombre: string ="";
  d_porcentaje: string ="";
  d_estado: string ="";
  d_price: number = 0;
  products: Product[] = [{
    name: "",
    price: 280,
    image: "assets/juegosala.jpg",
    description: "17892322623",
    porcentaje: "Sala 7 cuerpos",
    estado: "Sala para solteros"
  },
  {
    name: "",
    price: 345,
    image: "assets/lamina.jpg",
    description: "1245652826",
    porcentaje: "acabdos en madera-lamina",
    estado: "Juego de sala perfecta para 6"
  }
];

  actComprobante(): void{
    
    const replace: any ={
      name: this.d_nombre,
      price: 689,
      image: this.d_ruta,
      description: this.d_descripcion,
      porcentaje: this.d_porcentaje,
      estado: this.d_estado
    }
    this.products.splice(this.posicionActualizar,1,replace);
    this.d_descripcion="";
    this.d_ruta="";
    this.d_nombre="";
    this.d_porcentaje="";
    this.d_estado="";
    console.log(this.d_descripcion)
    console.log(this.products);
  }
  eliminarProduct(posicion: number): void {
      this.products.splice(posicion, 1);
     }




}

