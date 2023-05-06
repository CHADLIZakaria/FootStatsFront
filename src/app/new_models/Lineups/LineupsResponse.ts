import { Coach } from "./Coach";
import { PlayerPosition } from "./PlayerPosition";
import { Team } from "./Team";

export interface LineupsResponse {
    team: Team;
    formation: string;
    startXI: PlayerPosition[];
    substitutes: PlayerPosition[];
    coach: Coach;
}