import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { UpdateUserProgress, UpdateUserProgressCreateData } from '../LearnworldsTypes';
declare class UpdateUserProgressEntity extends LearnworldsEntityBase<UpdateUserProgress> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: UpdateUserProgressEntity): UpdateUserProgressEntity;
    create(this: any, reqdata?: UpdateUserProgressCreateData, ctrl?: Control): Promise<UpdateUserProgressEntity>;
}
export { UpdateUserProgressEntity };
