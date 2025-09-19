import { Component } from '@angular/core';

@Component({
    selector: 'ns-search',
    template: `
        <StackLayout>
            <Label text="Página de Búsqueda" class="h1" />
            <TextField [(ngModel)]="searchQuery" hint="Ingresa tu búsqueda"></TextField>
            <Button text="Buscar" (tap)="onSearch()"></Button>
        </StackLayout>
    `
})
export class SearchComponent {
    searchQuery: string = '';

    onSearch() {
        console.log("Buscando:", this.searchQuery);
        // Aquí podrías llamar a tu Service para buscar en tu API
    }
}
