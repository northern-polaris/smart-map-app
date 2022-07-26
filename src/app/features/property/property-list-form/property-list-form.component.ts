import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-property-list-form',
  templateUrl: './property-list-form.component.html',
  styleUrls: ['./property-list-form.component.scss'],
})
export class PropertyListFormComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigateByUrl('details/id');
  }
}
