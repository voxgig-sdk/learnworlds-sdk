import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Bundle, BundleLoadMatch, BundleListMatch } from '../LearnworldsTypes';
declare class BundleEntity extends LearnworldsEntityBase<Bundle> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: BundleEntity): BundleEntity;
    load(this: any, reqmatch?: BundleLoadMatch, ctrl?: Control): Promise<BundleEntity>;
    list(this: any, reqmatch?: BundleListMatch, ctrl?: Control): Promise<BundleEntity[]>;
}
export { BundleEntity };
