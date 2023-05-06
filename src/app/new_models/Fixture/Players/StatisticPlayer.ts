import { Cards } from "./Cards";
import { Dribbles } from "./Dribbles";
import { Duels } from "./Duels";
import { Fouls } from "./Fouls";
import { Games } from "./Games";
import { Goals } from "./Goals";
import { Passes } from "./Passes";
import { Penalty } from "./Penalty";
import { Shots } from "./Shots";
import { Tackles } from "./Tackles";

export interface StatisticPlayer {
    games: Games;
    offsides: Number;
    shots: Shots;
    goals: Goals;
    passes: Passes;
    tackles: Tackles;
    duels: Duels;
    dribbles: Dribbles;
    fouls: Fouls;
    cards: Cards;
    penalty: Penalty;
}
