import React from "react";
import OrgCard from "./OrgCard";
import { Grid } from '@material-ui/core';
import { useQuery } from "graphql-hooks";
import { makeStyles } from "@material-ui/core/styles";

const ORGANIZATIONS_QUERY = `query{
  organizations{
   id
  }
}`;

const useStyles = makeStyles({
    root: {
        alignItems: 'stretch'
    }
})

function OrgCards({ ids }) {
    const classes = useStyles();
  const { loading, error, data } = useQuery(ORGANIZATIONS_QUERY, {
    variables: {}
  });
    if (loading){
        return(<>Loading...</>)
    }
    if(error){
        console.log(error + "error");
        
    }
    console.log(`${JSON.stringify(data)} <= data in OrgCards`);
  return (
      <Grid container className={classes.root} spacing={1}>
       {data.organizations.map(({ id }) => (
        <OrgCard key={id} id={id}/>
        // <div>{id}</div>
      ))}
    </Grid>
  );
}

export default OrgCards;
