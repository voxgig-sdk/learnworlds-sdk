import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Installment, InstallmentListMatch } from '../LearnworldsTypes';
declare class InstallmentEntity extends LearnworldsEntityBase<Installment> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: InstallmentEntity): InstallmentEntity;
    list(this: any, reqmatch?: InstallmentListMatch, ctrl?: Control): Promise<Installment[]>;
}
export { InstallmentEntity };
