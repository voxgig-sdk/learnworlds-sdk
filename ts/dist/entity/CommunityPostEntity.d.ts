import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { CommunityPost, CommunityPostLoadMatch } from '../LearnworldsTypes';
declare class CommunityPostEntity extends LearnworldsEntityBase<CommunityPost> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CommunityPostEntity): CommunityPostEntity;
    load(this: any, reqmatch?: CommunityPostLoadMatch, ctrl?: Control): Promise<CommunityPost>;
}
export { CommunityPostEntity };
