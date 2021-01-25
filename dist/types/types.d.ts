import ZONES from './zones';
/**
 * @additionalProperties true
 */
export declare type NodeData = Record<string, any>;
export interface Node {
    readonly nodeType: string;
    data: NodeData;
}
export interface Zone extends Node {
    nodeType: ZONES;
    content: Array<Zone | Text>;
}
export interface Text extends Node {
    nodeType: 'Text';
    value: string;
    entries: Mark[];
}
export interface Mark {
    type: string;
}
//# sourceMappingURL=types.d.ts.map