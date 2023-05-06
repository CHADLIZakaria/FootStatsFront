import { Periods } from "./Periods";
import { Status } from "./Status";
import { Venue } from "./Venue";

export interface Fixture {
    id: number;
    referee: String;
    timezone: String;
    date: String;
    timestamp: number;
    periods: Periods;
    venue: Venue;
    status: Status;
}
