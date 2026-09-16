import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { ByProduct } from '../LearnworldsTypes';
declare class ByProductEntity extends LearnworldsEntityBase<ByProduct> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: ByProductEntity): ByProductEntity;
}
export { ByProductEntity };
