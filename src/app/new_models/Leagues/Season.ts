import { Coverage } from "./Coverage";

export interface Season {
    year: number;
    start: string;
    end: String;
    current: Boolean;
    coverage: Coverage;
}