import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Reporting, ReportingListMatch } from '../LearnworldsTypes';
declare class ReportingEntity extends LearnworldsEntityBase<Reporting> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: ReportingEntity): ReportingEntity;
    list(this: any, reqmatch?: ReportingListMatch, ctrl?: Control): Promise<ReportingEntity[]>;
}
export { ReportingEntity };
