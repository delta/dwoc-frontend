import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Stype imports
import WebFont from "webfontloader";
import { header2 } from "./../../DwocStyles";
import { makeStyles } from "@material-ui/core/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

WebFont.load({
  google: {
    families: [header2.fontFamily]
  }
});

const useStyles = makeStyles(theme => ({
  header2: header2
}));

const colorArry=["#285467","#00818A","#2FAF91","#8CD881","#00C6BB"]


const environment=require("../../Environment").environment
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('-');
}


export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  let color=colorArry[Math.random()*colorArry.length]
  return (
    <div>

    <div style={{ paddingTop: "120px" }} id="timeline">
      <h2 className={classes.header2}>Timeline </h2>
      <VerticalTimeline>
      <QueryRenderer
        environment={environment}
        query={graphql`

          query TimelineQuery {
            events {
              id
              date
              eventDesc
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            console.log(`${error} <= error Relay OrgCards`);
            return <div>Error!</div>;
          }
          if(props && props.events){
            return (
              <div>

               {props.events.map(element=>(
                  <VerticalTimelineElement
                      key={element.id}
                      className="vertical-timeline-element--education"
                      contentStyle={{ background:color , color: "#fff" }}
                      contentArrowStyle={{ borderRight: `7px solid ${color}` }}
                      date={formatDate(element.date)}
                      iconStyle={{ background: color, color: "#fff" }}
                    >
                      <h3 className="vertical-timeline-element-title">{element.eventDesc}</h3>

                      <p>Para 2</p>
                    </VerticalTimelineElement>
                  ))}
                </div>
            );

          }else{
            return(<h1>Hello</h1>)
          }

        }}
      />






      </VerticalTimeline>
      <div style={{ height: "20px" }}></div>
    </div>
    </div>
  );
}
