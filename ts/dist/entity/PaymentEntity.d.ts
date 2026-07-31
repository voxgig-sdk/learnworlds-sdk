import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Payment, PaymentLoadMatch, PaymentListMatch } from '../LearnworldsTypes';
declare class PaymentEntity extends LearnworldsEntityBase<Payment> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: PaymentEntity): PaymentEntity;
    load(this: any, reqmatch?: PaymentLoadMatch, ctrl?: Control): Promise<Payment>;
    list(this: any, reqmatch?: PaymentListMatch, ctrl?: Control): Promise<Payment[]>;
}
export { PaymentEntity };
