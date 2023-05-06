import { StatisticPlayers } from "./StatisticPlayers";
import { Team } from "./Team";

export interface Players {
    team: Team;
    players: StatisticPlayers[];
}
