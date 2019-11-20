import { IModelType, Instance, _NotCustomized, ISimpleType } from "mobx-state-tree";
declare const ModelAInferred: IModelType<{
    foo: ISimpleType<string>;
}, {}, _NotCustomized, _NotCustomized>;
declare type ModelAFactoryType = typeof ModelAInferred;
interface ModelAFactoryInterface extends ModelAFactoryType {
}
export declare const ModelA: ModelAFactoryInterface;
export interface IModelAStore extends Instance<ModelAFactoryInterface> {
}
declare const ModelBInferred: IModelType<{
    a: ModelAFactoryInterface;
}, {}, _NotCustomized, _NotCustomized>;
declare type ModelBFactoryType = typeof ModelBInferred;
interface ModelBFactoryInterface extends ModelBFactoryType {
}
export declare const ModelB: ModelBFactoryInterface;
export interface IModelBStore extends Instance<ModelBFactoryInterface> {
}
declare const ModelCInferred: IModelType<{
    b: ModelBFactoryInterface;
}, {}, _NotCustomized, _NotCustomized>;
declare type ModelCFactoryType = typeof ModelCInferred;
interface ModelCFactoryInterface extends ModelCFactoryType {
}
export declare const ModelC: ModelCFactoryInterface;
export interface IModelCStore extends Instance<ModelCFactoryInterface> {
}
export {};
