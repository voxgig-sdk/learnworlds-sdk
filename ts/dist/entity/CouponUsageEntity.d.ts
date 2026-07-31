import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { CouponUsage, CouponUsageListMatch } from '../LearnworldsTypes';
declare class CouponUsageEntity extends LearnworldsEntityBase<CouponUsage> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CouponUsageEntity): CouponUsageEntity;
    list(this: any, reqmatch?: CouponUsageListMatch, ctrl?: Control): Promise<CouponUsage[]>;
}
export { CouponUsageEntity };
