import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './constants';
import { IApiResponses, IEvent } from '../view-model/getBookingInterface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  protected allEvent = Constants.apiEndPoints.getAllEvent
  protected eventId = Constants.apiEndPoints.getEventById
  protected organizer = Constants.apiEndPoints.getOrganizerId
  

  getAllEventBooking() {

    return this.http.get<IApiResponses>(Constants.apiEndPoints.getEventDetailsApi + this.allEvent)
  }

  getEvent(id: any) {
    
    return this.http.get<IEvent>(Constants.apiEndPoints.getEventDetailsApi+this.eventId(id)).pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }

  getOrganizerId(organizerId: any) {
    
    return this.http.get<IEvent>(Constants.apiEndPoints.getEventDetailsApi+this.organizer(organizerId)).pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }

}
