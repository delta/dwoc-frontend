import React from 'react';

// Subcomponent import
import SelectedProjCard from "./SelectedProjCard/SelectedProjCard";

//Spinner
import RingLoader from 'react-spinners/RingLoader';
import { css } from '@emotion/core';

// Style imports
import WebFont from 'webfontloader';
import { header2, header3, orgs, gridContainer } from './../../DwocStyles';

// Material UI
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Relay
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
const environment = require('../../Environment').environment;

WebFont.load({
  google: {
    families: [header2.fontFamily, header3.fontFamily]
  }
});

const useStyles = makeStyles(theme => ({
  gridContainer: gridContainer,
  header2: header2,
  header3: header3,
  orgs: orgs
}));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function SelectedProjCards(prop) {
  const classes = useStyles();
  const role=prop.role;
  const orgslug=prop.orgSlug;
  console.log("ORGSLUG="+orgslug);
  return (
     <QueryRenderer
      environment={environment}
      query={graphql`
    
      query SelectedProjCardsQuery($orgSlug: ProposalWhereInput) {
        selectedProposals(where: $orgSlug) {
          id
          user {
            firstName
            githubHandle
          }
          organization {
            orgName
          }
          propDesc
          mentor {
            user {
              firstName
            }
          }
        }
      }
     
        `}
     variables={{ orgSlug: {isAccepted: true, organization: { orgSlug: orgslug }}}} 
      render={({ error, props }) => {
        if (error) {
          console.log(`${error} <= error Relay OrgCards`);
          return <div>Error!</div>;
        }
        if (!props) {
          return (
            <div>
              <RingLoader css={override} color={'#5CDB95'} />
            </div>
          );
        }
        //console.log("SELECTED_PROPS="+JSON.stringify(props.selectedProposals));
        let name;
        if (prop)
        return (
          <div className={classes.orgs} id="orgs">
             {props.selectedProposals.length>0 && (<h2 className={classes.header2}>Selected Proposals</h2>)}
            <Grid container className={classes.gridContainer} spacing={3}>
                {props.selectedProposals.map(proposal => (
                <SelectedProjCard 
                    pr_name={proposal.user.firstName}
                    pr_gname={proposal.user.githubHandle} 
                    pr_desc={proposal.propDesc}
                    pr_mentor={proposal.mentor.user.firstName}
                />
             ))
             }
            </Grid>
            <div style={{ height: '50px' }}></div>
          </div>
        );
     }
    }
    />
  );
}
