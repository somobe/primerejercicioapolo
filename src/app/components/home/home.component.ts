import { AgmInfoWindow } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  previous: AgmInfoWindow | undefined;
  lat: number;
  long: number;
  arrUsers: User[] = new Array();
  constructor(private usersService: UsersService) {
    this.lat = 40;
    this.long = -3;
  }

  async ngOnInit(): Promise<void> {
    this.arrUsers = await this.usersService.getAll();
    console.log(this.arrUsers);

    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude
      this.long = position.coords.longitude
    })

  }

  clickedMarker(infoWindow: AgmInfoWindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infoWindow;
  }

  onDragEnd($event: any) {
    console.log($event);
  }

}