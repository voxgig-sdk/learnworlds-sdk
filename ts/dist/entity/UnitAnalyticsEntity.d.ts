import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { UnitAnalytics, UnitAnalyticsLoadMatch } from '../LearnworldsTypes';
declare class UnitAnalyticsEntity extends LearnworldsEntityBase<UnitAnalytics> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: UnitAnalyticsEntity): UnitAnalyticsEntity;
    load(this: any, reqmatch?: UnitAnalyticsLoadMatch, ctrl?: Control): Promise<UnitAnalyticsEntity>;
}
export { UnitAnalyticsEntity };
