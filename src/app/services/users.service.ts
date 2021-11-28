import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = "https:/jsonplaceholder.typicode.com/users"
  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Promise<User[]>{
    return lastValueFrom(this.httpClient.get<User[]>(this.baseUrl))
  }
}
