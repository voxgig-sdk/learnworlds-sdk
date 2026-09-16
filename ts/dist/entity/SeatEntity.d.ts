import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Seat, SeatLoadMatch, SeatCreateData, SeatUpdateData } from '../LearnworldsTypes';
declare class SeatEntity extends LearnworldsEntityBase<Seat> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: SeatEntity): SeatEntity;
    load(this: any, reqmatch?: SeatLoadMatch, ctrl?: Control): Promise<SeatEntity>;
    create(this: any, reqdata?: SeatCreateData, ctrl?: Control): Promise<SeatEntity>;
    update(this: any, reqdata?: SeatUpdateData, ctrl?: Control): Promise<SeatEntity>;
}
export { SeatEntity };
