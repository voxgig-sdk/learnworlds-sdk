import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Event } from '../LearnworldsTypes';
declare class EventEntity extends LearnworldsEntityBase<Event> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: EventEntity): EventEntity;
}
export { EventEntity };
