import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-property-list-item',
  templateUrl: './property-list-item.component.html',
  styleUrls: ['./property-list-item.component.scss'],
})
export class PropertyListItemComponent implements OnInit {
  @Input() name: string = '';
  @Input() streetAddress: string = '';
  @Input() city: string = '';
  @Input() management: string = '';
  @Input() photo: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigateByUrl('details/id');
  }
}
