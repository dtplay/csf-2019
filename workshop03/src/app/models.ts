
export interface RSVP {
  name: string;
  phone: string;
  attendingDay: number;
  vegetarian: boolean;
  guest?: number;
  allergies?: string[];
  comments?: string;
}
