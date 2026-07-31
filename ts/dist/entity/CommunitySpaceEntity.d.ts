import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { CommunitySpace, CommunitySpaceLoadMatch, CommunitySpaceCreateData, CommunitySpaceUpdateData } from '../LearnworldsTypes';
declare class CommunitySpaceEntity extends LearnworldsEntityBase<CommunitySpace> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CommunitySpaceEntity): CommunitySpaceEntity;
    load(this: any, reqmatch?: CommunitySpaceLoadMatch, ctrl?: Control): Promise<CommunitySpace>;
    create(this: any, reqdata?: CommunitySpaceCreateData, ctrl?: Control): Promise<CommunitySpace>;
    update(this: any, reqdata?: CommunitySpaceUpdateData, ctrl?: Control): Promise<CommunitySpace>;
}
export { CommunitySpaceEntity };
