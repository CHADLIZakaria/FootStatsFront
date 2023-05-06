import { Periods } from "./Periods"
import { Status } from "./Status"
import { Venue } from "./Venue"

export interface Fixture {
    id: number,
    referee: string,
    timezone: string
    date: string
    timestamp: number,
    periods: Periods,
    venue: Venue,
    status: Status
}