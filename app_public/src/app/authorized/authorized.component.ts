import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html'
})
export class AuthorizedComponent implements OnInit {

  images: Image[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getGates().subscribe(images => this.images = images);
    console.log(this.images);
  }

  getGates(): Observable<Image[]> {
    return this.http.get<Image[]>(`http://localhost:3000/api/images/authorized`);
  }

}
