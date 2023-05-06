import { Fixtures } from "./Fixtures";

export interface Coverage {
    fixtures: Fixtures;
    standings: Boolean;
    players: Boolean;
    top_scorers: Boolean;
    top_assists: Boolean;
    top_cards: Boolean;
    injuries: Boolean;
    predictions: Boolean;    
    odds: Boolean;
}