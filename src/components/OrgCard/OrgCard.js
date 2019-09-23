import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { useQuery } from "graphql-hooks";

const ORG_QUERY = orgID => `query{
  organization (where:{ id: "${orgID}" }){
    orgName
    orgDesc
      }
    }`;

const useStyles = makeStyles({
  card: {
    height: '100%'

  },
  title: {},
  description: {
    marginTop: 5,
    fontSize: 22
  },
  nProejct: {
    fontSize: 19,
    marginTop: 8,
    textAlign: "left"
  }
});

function OrgCard({ id }) {
  const classes = useStyles();
  console.log(`${id} <= orgID`);
  console.log(`${ORG_QUERY(id)} <= orgquery`);

  const { loading, error, data } = useQuery(ORG_QUERY(id), {
    variables: {}
  });
  if (loading) {
    return <>.'.'.".'.'."...</>;
  }
  if (error) {
    console.log(JSON.stringify(error) + "<== error");
  }
  
  console.log(`${JSON.stringify(data)} <= data in OrgCard`);
  return (
    <Grid item xs={6} md={4} >
      <Card className={classes.card} key={id}>
        <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          {data.organization.orgName}
        </Typography>
         <Typography
          className={classes.description}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {data.organization.orgDesc}
        </Typography>
        <Typography className={classes.nProejct} color="textSecondary">
          {data.organization.orgName} has 5 projects
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" variant="outlined">
          View projects
        </Button>
      </CardActions>
      </Card>
      </Grid>
  );

}

export default OrgCard;
