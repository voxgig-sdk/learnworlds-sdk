import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { UserProgress, UserProgressListMatch } from '../LearnworldsTypes';
declare class UserProgressEntity extends LearnworldsEntityBase<UserProgress> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: UserProgressEntity): UserProgressEntity;
    list(this: any, reqmatch?: UserProgressListMatch, ctrl?: Control): Promise<UserProgress[]>;
}
export { UserProgressEntity };
