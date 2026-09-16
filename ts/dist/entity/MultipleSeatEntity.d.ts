import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { MultipleSeat, MultipleSeatListMatch, MultipleSeatCreateData, MultipleSeatRemoveMatch } from '../LearnworldsTypes';
declare class MultipleSeatEntity extends LearnworldsEntityBase<MultipleSeat> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: MultipleSeatEntity): MultipleSeatEntity;
    list(this: any, reqmatch?: MultipleSeatListMatch, ctrl?: Control): Promise<MultipleSeatEntity[]>;
    create(this: any, reqdata?: MultipleSeatCreateData, ctrl?: Control): Promise<MultipleSeatEntity>;
    remove(this: any, reqmatch?: MultipleSeatRemoveMatch, ctrl?: Control): Promise<MultipleSeatEntity>;
}
export { MultipleSeatEntity };
