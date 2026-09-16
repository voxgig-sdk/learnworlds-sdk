import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Form } from '../LearnworldsTypes';
declare class FormEntity extends LearnworldsEntityBase<Form> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: FormEntity): FormEntity;
}
export { FormEntity };
