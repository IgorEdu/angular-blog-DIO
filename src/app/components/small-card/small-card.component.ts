import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  Id:string = "0"

  @Input()
  photoCover:string = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";

  @Input()
  cardTitle:string = "Info padrão";
}
