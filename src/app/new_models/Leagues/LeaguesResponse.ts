import { Country } from "./Country";
import { League } from "./League";
import { Season } from "./Season";

export interface LeaguesResponse {
    league: League;
    country: Country;
    seasons: Array<Season>;
}