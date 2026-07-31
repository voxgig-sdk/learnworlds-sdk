import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { User, UserLoadMatch, UserListMatch, UserCreateData, UserUpdateData, UserRemoveMatch } from '../LearnworldsTypes';
declare class UserEntity extends LearnworldsEntityBase<User> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    load(this: any, reqmatch?: UserLoadMatch, ctrl?: Control): Promise<User>;
    list(this: any, reqmatch?: UserListMatch, ctrl?: Control): Promise<User[]>;
    create(this: any, reqdata?: UserCreateData, ctrl?: Control): Promise<User>;
    update(this: any, reqdata?: UserUpdateData, ctrl?: Control): Promise<User>;
    remove(this: any, reqmatch?: UserRemoveMatch, ctrl?: Control): Promise<User>;
}
export { UserEntity };
