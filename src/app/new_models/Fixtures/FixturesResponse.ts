import { League } from "./League"
import { LeagueFixtures } from "./LeagueFixtures"

export interface FixturesResponse {
    fixtures: LeagueFixtures[],
    league: League
}