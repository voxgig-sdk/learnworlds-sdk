import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { BySegment } from '../LearnworldsTypes';
declare class BySegmentEntity extends LearnworldsEntityBase<BySegment> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: BySegmentEntity): BySegmentEntity;
}
export { BySegmentEntity };
