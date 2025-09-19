import { Component } from '@angular/core';

@Component({
    selector: 'ns-forms',
    template: `
        <StackLayout>
            <Label text="Formulario de ejemplo" class="h1"></Label>
            <TextField [(ngModel)]="name" hint="Ingresa tu nombre"></TextField>
            <Button text="Enviar" (tap)="submit()"></Button>
            <Label [text]="'Hola, ' + name"></Label>
        </StackLayout>
    `
})
export class FormsComponent {
    name: string = '';

    submit() {
        console.log('Nombre ingresado:', this.name);
        // Aquí podrías mostrar un toast o guardar el valor en AppSettings
    }
}
