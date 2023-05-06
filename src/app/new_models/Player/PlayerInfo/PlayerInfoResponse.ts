import { Player } from "./Player";
import { Statistics } from "./Statistics";

export interface  PlayerInfoResponse {
    player: Player;
    statistics: Array<Statistics>;
}
