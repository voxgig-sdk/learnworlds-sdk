import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { UserSubscription, UserSubscriptionListMatch } from '../LearnworldsTypes';
declare class UserSubscriptionEntity extends LearnworldsEntityBase<UserSubscription> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: UserSubscriptionEntity): UserSubscriptionEntity;
    list(this: any, reqmatch?: UserSubscriptionListMatch, ctrl?: Control): Promise<UserSubscription[]>;
}
export { UserSubscriptionEntity };
