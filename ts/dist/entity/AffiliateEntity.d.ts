import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Affiliate, AffiliateListMatch, AffiliateCreateData } from '../LearnworldsTypes';
declare class AffiliateEntity extends LearnworldsEntityBase<Affiliate> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: AffiliateEntity): AffiliateEntity;
    list(this: any, reqmatch?: AffiliateListMatch, ctrl?: Control): Promise<Affiliate[]>;
    create(this: any, reqdata?: AffiliateCreateData, ctrl?: Control): Promise<Affiliate>;
}
export { AffiliateEntity };
