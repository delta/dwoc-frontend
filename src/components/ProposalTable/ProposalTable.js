import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
const environment = require('../../Environment').environment1;

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
   marginTop:50
  },
  table: {
    minWidth: 650,
  },
});

function createData(name,propsalURL,githubUrl) {
  console.log("pushed:"+name)
  return { name, propsalURL, githubUrl };
}

export default function SimpleTable(props) {
  let rows = [];
  const jsondata = {
    proposals: [
      {
        id: 'ck1v3q40s040g0847f9iqjbvg',
        propUrl: 'therila',
        user: {
          id: 'ck1v3q40003zc0847dz1ngpd8',
          firstName: 'Ram',
          lastName: 'topper',
          githubHandle: 'CPking'
        }
      },
      {
        id: 'ck1v3q40w040m0847g8v5kx5i',
        propUrl: 'therila',
        user: {
          id: 'ck1v3q40203zg0847b2yrjpjq',
          firstName: 'Chethan',
          lastName: 'Reddy',
          githubHandle: 'Chethan2k1'
        }
      }
    ]
  };
  const classes = useStyles();
  const projSlug=props.projSlug;
  const orgname=props.orgName;
  const orgId=props.orgId;
  let renderTable=true;
 console.log("orgname="+props.orgId)
 

  return (
    <div>
    <QueryRenderer
      environment={environment}
      query={graphql`
      query ProposalTableQuery($cond: ProposalWhereInput) {
        proposals(where: $cond){
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
            
          `}
          variables={{cond: {organization: {id: orgId}}}}
      render={({ error, props }) => {
        if (error) {
          console.log(`${error} <= error Relay OrgCards`);
          return <div>Error!</div>;
        }
        console.log("PROP="+JSON.stringify(props))
        if (!props) {
            renderTable=false;
          return (
            <div>
              <p>Have not received any proposals!!!</p>
            </div>
          );
        }
        props.proposals.forEach(function(e){
          console.log("push!"+e.user.firstName);
          rows.push(createData(e.user.firstName,e.propUrl,e.user.githubHandle))
          console.log("noOfRows: "+rows.length)
           console.log("noOfRows: "+rows.length)
        });
        return (
          renderTable&&
  console.log("TABLE:"+JSON.stringify(rows)) ||
  console.log("TABLERows: "+rows.length) ||
  
    (<Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Proposal URL</TableCell>
            <TableCell align="right">Github URL</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          { rows.map((row) => (
            <TableRow key={JSON.stringify(row)}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.propsalURL}</TableCell>
              <TableCell align="right"><a href={row.githubUrl}>{row.githubUrl}</a></TableCell>

            </TableRow>
         ))
        } 
        </TableBody> 
      </Table>
    </Paper>)
           
        );
      }
      } 
    />
   </div>
  );
}
