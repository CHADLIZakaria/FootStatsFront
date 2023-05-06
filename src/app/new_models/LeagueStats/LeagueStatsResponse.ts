import { Player } from "../Player/PlayerInfo/Player";
import { Statistics } from "../Player/PlayerInfo/Statistics";

export interface LeagueStatsResponse {
    player: Player;
    statistics: Array<Statistics>;
}
