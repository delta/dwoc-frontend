/**
 * @flow
 * @relayHash 4a3a8c96d3267405ab30567dcff781f6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type roles = "Admin" | "Dev" | "Mentor" | "%future added value";
export type ProposalWhereInput = {|
  id?: ?string,
  user?: ?UserWhereInput,
  project?: ?ProjectWhereInput,
  isAccepted?: ?boolean,
  propUrl?: ?string,
|};
export type UserWhereInput = {|
  id?: ?string,
  firstName?: ?string,
  lastName?: ?string,
  role?: ?roles,
  email?: ?string,
  mobileNumber?: ?string,
  githubHandle?: ?string,
  password?: ?string,
  isVerified?: ?boolean,
  session?: ?string,
|};
export type ProjectWhereInput = {|
  id?: ?string,
  organization?: ?OrganizationWhereInput,
  projName?: ?string,
  projSlug?: ?string,
  projDesc?: ?string,
  githubUrl?: ?string,
|};
export type OrganizationWhereInput = {|
  id?: ?string,
  orgName?: ?string,
  orgSlug?: ?string,
  orgDesc?: ?string,
  githubUrl?: ?string,
|};
export type ProposalTableQueryVariables = {|
  cond?: ?ProposalWhereInput
|};
export type ProposalTableQueryResponse = {|
  +proposals: $ReadOnlyArray<?{|
    +id: string,
    +user: {|
      +id: string,
      +firstName: string,
      +githubHandle: string,
    |},
    +organization: {|
      +id: string
    |},
    +isAccepted: boolean,
    +propUrl: string,
  |}>
|};
export type ProposalTableQuery = {|
  variables: ProposalTableQueryVariables,
  response: ProposalTableQueryResponse,
|};
*/


/*
query ProposalTableQuery(
  $cond: ProposalWhereInput
) {
  proposals(where: $cond) {
    id
    user {
      id
      firstName
      githubHandle
    }
    organization {
      id
    }
    isAccepted
    propUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "cond",
    "type": "ProposalWhereInput",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "proposals",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "cond"
      }
    ],
    "concreteType": "Proposal",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "githubHandle",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organization",
        "storageKey": null,
        "args": null,
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "isAccepted",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "propUrl",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProposalTableQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProposalTableQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProposalTableQuery",
    "id": null,
    "text": "query ProposalTableQuery(\n  $cond: ProposalWhereInput\n) {\n  proposals(where: $cond) {\n    id\n    user {\n      id\n      firstName\n      githubHandle\n    }\n    organization {\n      id\n    }\n    isAccepted\n    propUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b54ba3d284f7aede0cd0aeabcee1efc8';
module.exports = node;
