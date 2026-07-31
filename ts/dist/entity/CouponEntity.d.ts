import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Coupon, CouponCreateData } from '../LearnworldsTypes';
declare class CouponEntity extends LearnworldsEntityBase<Coupon> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CouponEntity): CouponEntity;
    create(this: any, reqdata?: CouponCreateData, ctrl?: Control): Promise<Coupon>;
}
export { CouponEntity };
