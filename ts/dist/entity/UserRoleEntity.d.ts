import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { UserRole, UserRoleListMatch } from '../LearnworldsTypes';
declare class UserRoleEntity extends LearnworldsEntityBase<UserRole> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: UserRoleEntity): UserRoleEntity;
    list(this: any, reqmatch?: UserRoleListMatch, ctrl?: Control): Promise<UserRoleEntity[]>;
}
export { UserRoleEntity };
