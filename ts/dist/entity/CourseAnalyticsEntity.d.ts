import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { CourseAnalytics, CourseAnalyticsLoadMatch } from '../LearnworldsTypes';
declare class CourseAnalyticsEntity extends LearnworldsEntityBase<CourseAnalytics> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CourseAnalyticsEntity): CourseAnalyticsEntity;
    load(this: any, reqmatch?: CourseAnalyticsLoadMatch, ctrl?: Control): Promise<CourseAnalyticsEntity>;
}
export { CourseAnalyticsEntity };
