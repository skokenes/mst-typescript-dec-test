import { IModelType, Instance, _NotCustomized, ISimpleType } from "mobx-state-tree";
export declare const ModelA: IModelType<{
    foo: ISimpleType<string>;
}, {}, _NotCustomized, _NotCustomized>;
export declare type ModelAStoreType = Instance<typeof ModelA>;
export interface IModelAStore extends ModelAStoreType {
}
export declare const ModelB: IModelType<{
    a: IModelType<{
        foo: ISimpleType<string>;
    }, {}, _NotCustomized, _NotCustomized>;
}, {}, _NotCustomized, _NotCustomized>;
export declare type ModelBStoreType = Instance<typeof ModelB>;
export interface IModelBStore extends ModelBStoreType {
}
declare type HardCodedModelType = IModelType<{
    a: typeof ModelA;
}, {}, _NotCustomized, _NotCustomized>;
export declare const ModelC: HardCodedModelType;
export declare type ModelCStoreType = Instance<typeof ModelC>;
export interface IModelCStore extends ModelCStoreType {
}
export {};
