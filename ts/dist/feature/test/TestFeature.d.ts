import type { Context, FeatureOptions } from '../../types';
import type { LearnworldsSDK } from '../../LearnworldsSDK';
import { BaseFeature } from '../base/BaseFeature';
declare class TestFeature extends BaseFeature {
    version: string;
    name: string;
    active: boolean;
    _client?: LearnworldsSDK;
    _options?: any;
    init(ctx: Context, options: FeatureOptions): void | Promise<any>;
    makeNetsim(this: any, net: any, inner: any): (ctx: any, url: string, fetchdef: any) => Promise<any>;
    buildArgs(ctx: any, op: any, args: any): any;
}
export { TestFeature };
