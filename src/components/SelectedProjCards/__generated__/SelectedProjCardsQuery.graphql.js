/**
 * @flow
 * @relayHash 6247ed6491b821bb1158831ecb69d904
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type roles = "Admin" | "Dev" | "Mentor" | "%future added value";
export type ProposalWhereInput = {|
  id?: ?string,
  user?: ?UserWhereInput,
  organization?: ?OrganizationWhereInput,
  isAccepted?: ?boolean,
  propUrl?: ?string,
  file?: ?FileWhereInput,
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
  profileImage?: ?string,
|};
export type OrganizationWhereInput = {|
  id?: ?string,
  orgName?: ?string,
  orgSlug?: ?string,
  orgDesc?: ?string,
  orgMaxDesc?: ?string,
  githubUrl?: ?string,
  communicationChannel?: ?string,
|};
export type FileWhereInput = {|
  fileName?: ?string,
  filePath?: ?string,
|};
export type SelectedProjCardsQueryVariables = {|
  orgSlug?: ?ProposalWhereInput
|};
export type SelectedProjCardsQueryResponse = {|
  +selectedProposals: ?$ReadOnlyArray<?{|
    +id: string,
    +user: {|
      +firstName: string,
      +githubHandle: string,
    |},
    +organization: {|
      +orgName: string
    |},
    +propDesc: string,
    +mentor: ?{|
      +user: {|
        +firstName: string
      |}
    |},
  |}>
|};
export type SelectedProjCardsQuery = {|
  variables: SelectedProjCardsQueryVariables,
  response: SelectedProjCardsQueryResponse,
|};
*/


/*
query SelectedProjCardsQuery(
  $orgSlug: ProposalWhereInput
) {
  selectedProposals(where: $orgSlug) {
    id
    user {
      firstName
      githubHandle
      id
    }
    organization {
      orgName
      id
    }
    propDesc
    mentor {
      user {
        firstName
        id
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "orgSlug",
    "type": "ProposalWhereInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "orgSlug"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "githubHandle",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "orgName",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "propDesc",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SelectedProjCardsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "selectedProposals",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Proposal",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
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
              (v5/*: any*/)
            ]
          },
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "mentor",
            "storageKey": null,
            "args": null,
            "concreteType": "Mentor",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SelectedProjCardsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "selectedProposals",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Proposal",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v2/*: any*/)
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
              (v5/*: any*/),
              (v2/*: any*/)
            ]
          },
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "mentor",
            "storageKey": null,
            "args": null,
            "concreteType": "Mentor",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SelectedProjCardsQuery",
    "id": null,
    "text": "query SelectedProjCardsQuery(\n  $orgSlug: ProposalWhereInput\n) {\n  selectedProposals(where: $orgSlug) {\n    id\n    user {\n      firstName\n      githubHandle\n      id\n    }\n    organization {\n      orgName\n      id\n    }\n    propDesc\n    mentor {\n      user {\n        firstName\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a2bee73cf9136e060f74a7cf3b687c93';
module.exports = node;
