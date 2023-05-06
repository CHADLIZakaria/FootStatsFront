import { Player } from "./Player";
import { Transfers } from "./Transfers";

export interface PlayerTransferResponse {
    player: Player;
    update: String;
    transfers: Array<Transfers>;
}
