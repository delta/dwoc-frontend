import React, { useState } from 'react';


import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const environment = require("../../../Environment").environment1;

export default function ProposalMessage(props) {
    const userId = props.userId;
    let length = 0, message;

    return (
        <div>
            <QueryRenderer
                environment={environment}
                query={graphql`
				query ProposalMessageQuery($userId: ProposalWhereInput) {
					userProposals(where:$userId) {
						id
					}
				}
			`}
                variables={{ userId: { user: { id: userId } } }}
                render={({ error, props }) => {
                    if (error) {
                        console.log(`${error} <= Relay error ProposalMessagejs(query userProfile)`);
                        return;
                    }
                    if (props) {
                        length = props.userProposals.length;
                    }
                    if (!length) {
                        message = "You can have a maximum of 3 submissions";
                    }
                    else {
                        if (length < 3)
                            message = `You can submit ${3 - length} more proposals`;
                        else
                            message = "Sorry! You've reached the maximum submission limit!";
                    }
                    return <div style={{ display: "flex", justifyContent: "center" }}>{message}</div>;
                }}
            />
        </div>
    )
}
