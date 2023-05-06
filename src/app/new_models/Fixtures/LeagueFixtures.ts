import { Fixture } from "./Fixture"
import { Goals } from "./Goals"
import { League } from "./League"
import { Score } from "./Score"
import { Teams } from "./Teams"

export interface LeagueFixtures {
    fixture: Fixture,
    league: League,
    teams: Teams,
    goals: Goals,
    score: Score
}