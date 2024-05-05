import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';//Importamos by

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports:[HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  //prueba de la existencia del botón generar pdf
  it('Existe botón Generar PDF', () => {
    const button = fixture.debugElement.query(By.css('ion-button'));
    expect(button).toBeTruthy();//Comprobamos que exista un botón
    expect(button.nativeElement.textContent.trim()).toEqual('Generar PDF');// Comprobamos que el texto del botón sea GENERAR PDF
  });

  //Prueba de la existencia del la seccion Dashboard
  it('Existe seccion dashboard', () => {
    const section = fixture.debugElement.query(By.css('.seccion.header h1'));
    expect(section).toBeTruthy();//Comprobamos que exista una seccion header con etiqueta h1
    expect(section.nativeElement.textContent.trim()).toEqual('Dashboard');//Comprobamos el texto sea Dashboard
  });

  //Simulamos un clic en el botón "Generar PDF" y verificamos si el método generarPDF() fue llamado correctamente.
  it('Llamamos a generar pdf cuando damos a click', () => {
    spyOn(component, 'generarPDF'); // Espiamos el método generarPDF() del componente 
    const button = fixture.debugElement.query(By.css('ion-button'));
    button.nativeElement.click(); // Simulamos un clic en el botón "Generar PDF"
    expect(component.generarPDF).toHaveBeenCalled(); // Verificamos si el método generarPDF() fue llamado
  });

  //Ejecutar la lógica que el método cargarCategoria() del servicio de API se llama correctamente durante la inicialización del componente.
  it('Se carga el método cargar categoría ', () => {
    spyOn(component.gestionServiceApi, 'cargarCategoria').and.callThrough();
    component.ngOnInit();
    expect(component.gestionServiceApi.cargarCategoria).toHaveBeenCalled();
  });
});
