import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Active } from '../LearnworldsTypes';
declare class ActiveEntity extends LearnworldsEntityBase<Active> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: ActiveEntity): ActiveEntity;
}
export { ActiveEntity };
