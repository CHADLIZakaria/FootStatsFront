import { Stats } from "./Stats";
import { Team } from "./Team";

export interface Standing {
    rank: Number;
    team: Team;
    points: String;
    goalsDiff: String;
    group: String;
    form: String;
    status: String;
    description: String;
    all: Stats;
    home: Stats;
    away: Stats;
    update: String;
}
