declare function exampleValue(entity: any, op: any, paramName: string, placeholder: string): string;
declare function projectPath(suffix?: string): string;
declare function formatJSONSrc(jsonsrc: string): string;
declare function formatJson(obj: any, flags?: {
    line?: boolean;
    margin?: number;
}): string;
declare function clean(o: any): any;
export { clean, formatJSONSrc, formatJson, projectPath, exampleValue, };
