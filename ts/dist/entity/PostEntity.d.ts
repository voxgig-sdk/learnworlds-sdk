import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Post } from '../LearnworldsTypes';
declare class PostEntity extends LearnworldsEntityBase<Post> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: PostEntity): PostEntity;
}
export { PostEntity };
