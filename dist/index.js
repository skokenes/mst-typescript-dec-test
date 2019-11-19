"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_state_tree_1 = require("mobx-state-tree");
exports.ModelA = mobx_state_tree_1.types.model({
    foo: mobx_state_tree_1.types.string
});
// Typical MST usage with inferred type
exports.ModelB = mobx_state_tree_1.types.model({
    a: exports.ModelA
});
exports.ModelC = mobx_state_tree_1.types.model({
    a: exports.ModelA
});
//# sourceMappingURL=index.js.map