import { Context } from './Context';
declare class LearnworldsError extends Error {
    isLearnworldsError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { LearnworldsError };
