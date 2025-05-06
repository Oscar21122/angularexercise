import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-boton',
    standalone: true,
    imports: [],
    templateUrl: './boton.component.html',
    styleUrls: ['./boton.component.css'], 
})
export class BotonComponent {
    @Input() texto = 'dale clic';
    @Input() color = 'black';
    @Output() onClick = new EventEmitter();
    clicked() {
        this.onClick.emit();
    }
}
