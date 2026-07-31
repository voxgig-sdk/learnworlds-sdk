import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Course, CourseLoadMatch, CourseListMatch, CourseCreateData, CourseUpdateData } from '../LearnworldsTypes';
declare class CourseEntity extends LearnworldsEntityBase<Course> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CourseEntity): CourseEntity;
    load(this: any, reqmatch?: CourseLoadMatch, ctrl?: Control): Promise<Course>;
    list(this: any, reqmatch?: CourseListMatch, ctrl?: Control): Promise<Course[]>;
    create(this: any, reqdata?: CourseCreateData, ctrl?: Control): Promise<Course>;
    update(this: any, reqdata?: CourseUpdateData, ctrl?: Control): Promise<Course>;
}
export { CourseEntity };
