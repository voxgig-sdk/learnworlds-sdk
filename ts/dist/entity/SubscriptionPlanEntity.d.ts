import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { SubscriptionPlan, SubscriptionPlanLoadMatch, SubscriptionPlanListMatch } from '../LearnworldsTypes';
declare class SubscriptionPlanEntity extends LearnworldsEntityBase<SubscriptionPlan> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: SubscriptionPlanEntity): SubscriptionPlanEntity;
    load(this: any, reqmatch?: SubscriptionPlanLoadMatch, ctrl?: Control): Promise<SubscriptionPlanEntity>;
    list(this: any, reqmatch?: SubscriptionPlanListMatch, ctrl?: Control): Promise<SubscriptionPlanEntity[]>;
}
export { SubscriptionPlanEntity };
