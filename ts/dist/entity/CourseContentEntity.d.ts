import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { CourseContent, CourseContentListMatch, CourseContentCreateData } from '../LearnworldsTypes';
declare class CourseContentEntity extends LearnworldsEntityBase<CourseContent> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CourseContentEntity): CourseContentEntity;
    list(this: any, reqmatch?: CourseContentListMatch, ctrl?: Control): Promise<CourseContent[]>;
    create(this: any, reqdata?: CourseContentCreateData, ctrl?: Control): Promise<CourseContent>;
}
export { CourseContentEntity };
