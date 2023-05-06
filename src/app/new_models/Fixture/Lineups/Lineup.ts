import { Coach } from "./Coach";
import { LineupPlayer } from "./LineupPlayer";
import { LineupTeam } from "./LineupTeam";

export interface Lineup {
    team: LineupTeam;
    formation: String;
    coach: Coach;
    startXI: LineupPlayer[];
    substitutes: LineupPlayer[];
}