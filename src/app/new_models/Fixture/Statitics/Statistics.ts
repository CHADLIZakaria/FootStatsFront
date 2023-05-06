import { Statistic } from "./Statistic";
import { TeamStatistics } from "./TeamStatistics";

export interface Statistics {
    team: TeamStatistics;
    statistics: Statistic[];
}
