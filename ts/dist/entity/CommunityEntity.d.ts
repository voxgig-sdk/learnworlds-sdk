import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Community, CommunityListMatch, CommunityCreateData, CommunityRemoveMatch } from '../LearnworldsTypes';
declare class CommunityEntity extends LearnworldsEntityBase<Community> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CommunityEntity): CommunityEntity;
    list(this: any, reqmatch?: CommunityListMatch, ctrl?: Control): Promise<CommunityEntity[]>;
    create(this: any, reqdata?: CommunityCreateData, ctrl?: Control): Promise<CommunityEntity>;
    remove(this: any, reqmatch?: CommunityRemoveMatch, ctrl?: Control): Promise<CommunityEntity>;
}
export { CommunityEntity };
