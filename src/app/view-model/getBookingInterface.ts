export interface IApiResponses {
    "message": string;
    "result": boolean;
    "data": any;
}

export interface IEvent {
    eventId: number
    eventName: string
    startDate: string
    startTime: string
    endDate: string
    organizerId: string
    userId: number
    price: number
    location: string
    imageUrl: string,
    describe :string,
  }
  