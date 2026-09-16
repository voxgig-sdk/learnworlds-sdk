import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { UserGroup, UserGroupLoadMatch, UserGroupListMatch, UserGroupCreateData, UserGroupUpdateData } from '../LearnworldsTypes';
declare class UserGroupEntity extends LearnworldsEntityBase<UserGroup> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: UserGroupEntity): UserGroupEntity;
    load(this: any, reqmatch?: UserGroupLoadMatch, ctrl?: Control): Promise<UserGroupEntity>;
    list(this: any, reqmatch?: UserGroupListMatch, ctrl?: Control): Promise<UserGroupEntity[]>;
    create(this: any, reqdata?: UserGroupCreateData, ctrl?: Control): Promise<UserGroupEntity>;
    update(this: any, reqdata?: UserGroupUpdateData, ctrl?: Control): Promise<UserGroupEntity>;
}
export { UserGroupEntity };
