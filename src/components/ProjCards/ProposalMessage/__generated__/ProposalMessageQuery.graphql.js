/**
 * @flow
 * @relayHash 260b54bb2ae6deb2f26194e403a46552
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
export type ProposalMessageQueryVariables = {|
  userId?: ?ProposalWhereInput
|};
export type ProposalMessageQueryResponse = {|
  +userProposals: $ReadOnlyArray<?{|
    +id: string
  |}>
|};
export type ProposalMessageQuery = {|
  variables: ProposalMessageQueryVariables,
  response: ProposalMessageQueryResponse,
|};
*/


/*
query ProposalMessageQuery(
  $userId: ProposalWhereInput
) {
  userProposals(where: $userId) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ProposalWhereInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "userProposals",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "userId"
      }
    ],
    "concreteType": "Proposal",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "ProposalMessageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProposalMessageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProposalMessageQuery",
    "id": null,
    "text": "query ProposalMessageQuery(\n  $userId: ProposalWhereInput\n) {\n  userProposals(where: $userId) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f51e7976119337b8a851d6d435ffb877';
module.exports = node;
