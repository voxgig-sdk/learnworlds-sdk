import { LearnworldsEntityBase } from '../LearnworldsEntityBase';
import type { LearnworldsSDK } from '../LearnworldsSDK';
import type { Control } from '../types';
import type { Certificate, CertificateListMatch, CertificateUpdateData, CertificateRemoveMatch } from '../LearnworldsTypes';
declare class CertificateEntity extends LearnworldsEntityBase<Certificate> {
    constructor(client: LearnworldsSDK, entopts: any);
    make(this: CertificateEntity): CertificateEntity;
    list(this: any, reqmatch?: CertificateListMatch, ctrl?: Control): Promise<CertificateEntity[]>;
    update(this: any, reqdata?: CertificateUpdateData, ctrl?: Control): Promise<CertificateEntity>;
    remove(this: any, reqmatch?: CertificateRemoveMatch, ctrl?: Control): Promise<CertificateEntity>;
}
export { CertificateEntity };
