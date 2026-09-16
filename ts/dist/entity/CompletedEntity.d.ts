import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Completed } from '../LearnworldsTypes';
declare class CompletedEntity extends LearnworldsEntityBase<Completed> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CompletedEntity): CompletedEntity;
}
export { CompletedEntity };
