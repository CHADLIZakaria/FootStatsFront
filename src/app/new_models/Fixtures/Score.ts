import { Goals } from "./Goals";

export interface Score {
    halftime: Goals;
    fulltime: Goals;
    extratime: Goals;
    penalty: Goals;
}