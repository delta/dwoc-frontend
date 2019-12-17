/**
 * @flow
 * @relayHash 5a5ce56dfbbe39b485282142e0a9ba91
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type roles = "Admin" | "Dev" | "Mentor" | "%future added value";
export type ProposalCreateInput = {|
  id?: ?string,
  user: UserCreateOneInput,
  organization: OrganizationCreateOneInput,
  isAccepted?: ?boolean,
  propUrl: string,
  propDesc: string,
  mentor: MentorWhereInput,
|};
export type UserCreateOneInput = {|
  connect?: ?UserWhereUniqueInput
|};
export type UserWhereUniqueInput = {|
  id?: ?string,
  email?: ?string,
  mobileNumber?: ?string,
  githubHandle?: ?string,
|};
export type OrganizationCreateOneInput = {|
  create?: ?OrganizationCreateInput,
  connect?: ?OrganizationWhereUniqueInput,
|};
export type OrganizationCreateInput = {|
  id?: ?string,
  orgName: string,
  orgSlug: string,
  orgDesc?: ?string,
  orgMaxDesc?: ?string,
  githubUrl?: ?string,
  stack?: ?OrganizationCreatestackInput,
  contactUrl?: ?string,
  communicationChannel?: ?string,
|};
export type OrganizationCreatestackInput = {|
  set?: ?$ReadOnlyArray<string>
|};
export type OrganizationWhereUniqueInput = {|
  id?: ?string,
  orgSlug?: ?string,
  githubUrl?: ?string,
|};
export type MentorWhereInput = {|
  id?: ?string,
  user?: ?UserWhereInput,
  organization?: ?OrganizationWhereInput,
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
export type MutationRendererMutationVariables = {|
  proposal: ProposalCreateInput
|};
export type MutationRendererMutationResponse = {|
  +createProposal: {|
    +id: string,
    +propUrl: string,
  |}
|};
export type MutationRendererMutation = {|
  variables: MutationRendererMutationVariables,
  response: MutationRendererMutationResponse,
|};
*/


/*
mutation MutationRendererMutation(
  $proposal: ProposalCreateInput!
) {
  createProposal(data: $proposal) {
    id
    propUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "proposal",
    "type": "ProposalCreateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createProposal",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "proposal"
      }
    ],
    "concreteType": "Proposal",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "MutationRendererMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MutationRendererMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "MutationRendererMutation",
    "id": null,
    "text": "mutation MutationRendererMutation(\n  $proposal: ProposalCreateInput!\n) {\n  createProposal(data: $proposal) {\n    id\n    propUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1c1eb8f5d348b0c7d34cefbbc827e6c7';
module.exports = node;
