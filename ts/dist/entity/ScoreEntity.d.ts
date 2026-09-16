import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Score } from '../LearnworldsTypes';
declare class ScoreEntity extends LearnworldsEntityBase<Score> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: ScoreEntity): ScoreEntity;
}
export { ScoreEntity };
