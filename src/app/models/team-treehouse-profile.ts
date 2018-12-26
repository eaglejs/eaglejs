import { Badges } from './badges';
import { Points } from './points';

export class TeamTreeHouseProfile {
  name: string;
  profile_name: string;
  profile_url: string;
  gravatar_url: string;
  gravatar_hash: string;
  badges: Array<Badges>;
  points: Points;
}
