import { Component } from '@angular/core';

@Component({
    selector: 'ns-extras',
    template: `
        <StackLayout>
            <Label text="Extras" class="h1" />
            <Button text="Mostrar Acción" (tap)="showAction()"></Button>
        </StackLayout>
    `
})
export class ExtrasComponent {
    showAction() {
        console.log("Acción ejecutada en Extras!");
        // Aquí podrías abrir un diálogo de acción o mostrar un toast
    }
}
