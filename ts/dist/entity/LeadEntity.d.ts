import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Lead, LeadListMatch } from '../LearnworldsTypes';
declare class LeadEntity extends LearnworldsEntityBase<Lead> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: LeadEntity): LeadEntity;
    list(this: any, reqmatch?: LeadListMatch, ctrl?: Control): Promise<LeadEntity[]>;
}
export { LeadEntity };
