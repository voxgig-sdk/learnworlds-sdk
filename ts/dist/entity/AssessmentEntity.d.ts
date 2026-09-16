import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Assessment, AssessmentListMatch } from '../LearnworldsTypes';
declare class AssessmentEntity extends LearnworldsEntityBase<Assessment> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: AssessmentEntity): AssessmentEntity;
    list(this: any, reqmatch?: AssessmentListMatch, ctrl?: Control): Promise<AssessmentEntity[]>;
}
export { AssessmentEntity };
