import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Upcoming } from '../LearnworldsTypes';
declare class UpcomingEntity extends LearnworldsEntityBase<Upcoming> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: UpcomingEntity): UpcomingEntity;
}
export { UpcomingEntity };
