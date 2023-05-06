import { Fixture } from "./Fixture/Fixture";
import { Goals } from "./Goals/Goals";
import { League } from "./League/League";
import { Lineup } from "./Lineups/Lineup";
import { Players } from "./Players/Players";
import { Score } from "./Score/Score";
import { Statistics } from "./Statitics/Statistics";
import { Teams } from "./Teams/Teams";

export interface FixtureResponse {
    fixture: Fixture;
    league: League;
    teams: Teams;
    goals: Goals;
    score: Score;
    events: Event[];
    lineups: Lineup[];
    statistics: Statistics[];
    players: Players[];
}