import { Cards } from "./Cards";
import { Dribbles } from "./Dribbles";
import { Duels } from "./Duels";
import { Fouls } from "./Fouls";
import { Games } from "./Games";
import { Goals } from "./Goals";
import { League } from "./League";
import { Passes } from "./Passes";
import { Penalty } from "./Penalty";
import { Shots } from "./Shots";
import { Substitutes } from "./Substitutes";
import { Tackles } from "./Tackles";
import { Team } from "./Team";

export interface Statistics {
    team:Team;
    league: League;
    games: Games;
    substitutes: Substitutes;
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
