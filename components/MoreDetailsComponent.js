import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const MoreDetailsComponent = ({ text, children }) => {
  return (
    <div>
      <Accordion className="shadow-none border-[1px] border-[#E3E3E3] text-white">
        <AccordionSummary
          expandIcon={<img src="/icons/expand.svg" alt="expand" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MoreDetailsComponent;
