import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Segment } from '../LearnworldsTypes';
declare class SegmentEntity extends LearnworldsEntityBase<Segment> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: SegmentEntity): SegmentEntity;
}
export { SegmentEntity };
