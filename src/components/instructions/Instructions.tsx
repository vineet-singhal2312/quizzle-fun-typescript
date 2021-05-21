import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Instructions.css";
import { useStyles } from "./Instruction.utils";

export default function Instructions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);


  const handleChange =
  (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="instructions">
      <Accordion
        id="instruction"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography id="instruction-title" className={classes.heading}>
            Points
          </Typography>
          <Typography id="instruction" className={classes.secondaryHeading}>
            Look points structure!!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="instruction-list">
            <ul>
              <li>Each correct answer carry 4 points.</li>
              <li>Each incorrect answer carry -1 point.</li>
              <li>
                You can pass the question it will not give you any negative or
                positive point.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        id="instruction"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography id="instruction-title" className={classes.heading}>
            Timer
          </Typography>
          <Typography id="instruction" className={classes.secondaryHeading}>
            Each question has specific time limit!!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="instruction-list">
            <ul>
              <li>
                {" "}
                You have 30 second for each question, Next question will be
                appear automatically after 30 second.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        id="instruction"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography id="instruction-title" className={classes.heading}>
            Questions
          </Typography>
          <Typography id="instruction" className={classes.secondaryHeading}>
            Question structure explanation!!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="instruction-list">
            <ul>
              <li>You will have to face 10 questions.</li>
              <li>Each question has 1 correct answer and 3 wrong answers.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
