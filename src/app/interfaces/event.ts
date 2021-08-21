export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  campus: string;
  eventSite: EventSite;
  participants: Object[];
  comments: Comment[];
}

interface EventSite {
  city: City;
  name: string;
  address: string;
}

interface City {
  name: string;
  department: string;
  country: string;
}

export interface Comment{
  userName: string;
  comment: string;
}

export interface Participant{
  userName: string;
  fullName: string;
}
