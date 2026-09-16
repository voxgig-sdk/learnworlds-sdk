import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Unit } from '../LearnworldsTypes';
declare class UnitEntity extends LearnworldsEntityBase<Unit> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: UnitEntity): UnitEntity;
}
export { UnitEntity };
