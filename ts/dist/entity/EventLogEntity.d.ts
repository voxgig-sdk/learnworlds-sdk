import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { EventLog, EventLogListMatch } from '../LearnworldsTypes';
declare class EventLogEntity extends LearnworldsEntityBase<EventLog> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: EventLogEntity): EventLogEntity;
    list(this: any, reqmatch?: EventLogListMatch, ctrl?: Control): Promise<EventLog[]>;
}
export { EventLogEntity };
