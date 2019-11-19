import {
  types as t,
  IModelType,
  Instance,
  _NotCustomized,
  ISimpleType
} from "mobx-state-tree";

export const ModelA = t.model({
  foo: t.string
});

export type ModelAStoreType = Instance<typeof ModelA>;
export interface IModelAStore extends ModelAStoreType {}

// Typical MST usage with inferred type
export const ModelB = t.model({
  a: ModelA
});

export type ModelBStoreType = Instance<typeof ModelB>;
export interface IModelBStore extends ModelBStoreType {}

// Hardcode the typing to reuse the ModelA type
type HardCodedModelType = IModelType<
  {
    a: typeof ModelA;
  },
  {},
  _NotCustomized,
  _NotCustomized
>;

export const ModelC: HardCodedModelType = t.model({
  a: ModelA
});

export type ModelCStoreType = Instance<typeof ModelC>;
export interface IModelCStore extends ModelCStoreType {}
