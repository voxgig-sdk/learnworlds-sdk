import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Calendar, CalendarListMatch } from '../LearnworldsTypes';
declare class CalendarEntity extends LearnworldsEntityBase<Calendar> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CalendarEntity): CalendarEntity;
    list(this: any, reqmatch?: CalendarListMatch, ctrl?: Control): Promise<CalendarEntity[]>;
}
export { CalendarEntity };
