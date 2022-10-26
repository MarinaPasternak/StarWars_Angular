import { Component, OnInit } from '@angular/core';
import { StarWarsPeopleService } from 'src/app/services/star-wars-people.service';

@Component({
  selector: 'app-star-wars-page',
  templateUrl: './star-wars-page.component.html',
  styleUrls: ['./star-wars-page.component.scss']
})
export class StarWarsPageComponent implements OnInit {
  starWarsPeople: any;
  displayedColumns: string[] = ['name', 'gender', 'birth_year', 'mass', 'height'];

  constructor(private starWarsPeopleService: StarWarsPeopleService) { }

  ngOnInit(): void {
    this.starWarsPeopleService.getStarWarsPeople().subscribe(
        (response) => { this.starWarsPeople = response.results; }
      );
  };
}
