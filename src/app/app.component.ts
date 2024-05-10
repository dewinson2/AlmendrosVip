import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NabvarComponent } from './nabvar/nabvar.component';
import { ServiciosComponent } from './servicios/servicios.component'; 
import { ContactosComponent } from './contactos/contactos.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NabvarComponent, ServiciosComponent, ContactosComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Almendros_Vip';
}
