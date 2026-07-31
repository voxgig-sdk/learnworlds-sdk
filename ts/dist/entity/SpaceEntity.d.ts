import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Space } from '../LearnworldsTypes';
declare class SpaceEntity extends LearnworldsEntityBase<Space> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: SpaceEntity): SpaceEntity;
}
export { SpaceEntity };
