export class Constants {

    public static appName = 'Event Booking'

    public static apiEndPoints = {
        getEventDetailsApi : 'https://freeapi.miniprojectideas.com/api/EventBooking/',
        getAllEvent : 'GetAllEvents',
        getEventById(id:any){
            return `/GetEventById?id=${id}`
        },
        getOrganizerId (id:any){
            return `/GetEventsByOrganizer?organizerId=${id}`
        }
    }

    public static images = {
        imagesNotAvailable : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
    }

}
