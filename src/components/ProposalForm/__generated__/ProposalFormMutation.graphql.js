/**
 * @flow
 * @relayHash d2c8bf11f4268ac000e4384bc7f0c91b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProposalFormMutationVariables = {|
  file: any
|};
export type ProposalFormMutationResponse = {|
  +uploadFile: {|
    +fileName: string,
    +filePath: string,
  |}
|};
export type ProposalFormMutation = {|
  variables: ProposalFormMutationVariables,
  response: ProposalFormMutationResponse,
|};
*/


/*
mutation ProposalFormMutation(
  $file: Upload!
) {
  uploadFile(data: $file) {
    fileName
    filePath
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "file",
    "type": "Upload!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "data",
    "variableName": "file"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fileName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "filePath",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProposalFormMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "uploadFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "File",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProposalFormMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "uploadFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "File",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProposalFormMutation",
    "id": null,
    "text": "mutation ProposalFormMutation(\n  $file: Upload!\n) {\n  uploadFile(data: $file) {\n    fileName\n    filePath\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '67c098a0b60572e20fb6645ad2884af1';
module.exports = node;
