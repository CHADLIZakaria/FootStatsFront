import { Goals } from "../Goals/Goals";

export interface Score {
    halftime: Goals;
    fulltime: Goals;
    extratime: Goals;
    penalty: Goals;
}
