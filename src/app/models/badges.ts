import { Courses } from './courses';

export class Badges {
  id: number;
  name: string;
  url: string;
  icon_url: string;
  earned_date: string;
  courses: Array<Courses>;
}
