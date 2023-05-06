import { Standing } from "./Standing";

export interface League {
    id: Number;
    name: String;
    country: String;
    logo: String;
    flag: String;
    season: Number;
    standings: Array<Array<Standing>>;
}
