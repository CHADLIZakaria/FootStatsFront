import { EventAssist } from "./EventAssist";
import { EventPlayer } from "./EventPlayer";
import { EventTeam } from "./EventTeam";
import { Time } from "./Time";

export interface Event {
    time: Time;
    team: EventTeam;
    player: EventPlayer;
    assist: EventAssist;
    type: String;
    detail: String;
    comments: String;
}
