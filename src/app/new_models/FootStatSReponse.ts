import { Paging } from "./Paging"

export interface FootStatsReponse<T> {
    get: string
    parameters: Object,
    errors: Array<Object>,
    results: number,
    paging: Paging,
    response: Array<T>
}