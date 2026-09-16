import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Due } from '../LearnworldsTypes';
declare class DueEntity extends LearnworldsEntityBase<Due> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: DueEntity): DueEntity;
}
export { DueEntity };
