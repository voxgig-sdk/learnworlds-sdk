import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Promotion, PromotionLoadMatch, PromotionListMatch, PromotionCreateData } from '../LearnworldsTypes';
declare class PromotionEntity extends LearnworldsEntityBase<Promotion> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: PromotionEntity): PromotionEntity;
    load(this: any, reqmatch?: PromotionLoadMatch, ctrl?: Control): Promise<Promotion>;
    list(this: any, reqmatch?: PromotionListMatch, ctrl?: Control): Promise<Promotion[]>;
    create(this: any, reqdata?: PromotionCreateData, ctrl?: Control): Promise<Promotion>;
}
export { PromotionEntity };
