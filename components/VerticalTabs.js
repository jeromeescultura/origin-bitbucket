import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import json2mq from "json2mq";
import { useMediaQuery } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="p-3 md:p-6 lg:p-10 ">
          <div className="flex flex-col  lg:flex-row justify-evenly lg:items-center">
            {children}
          </div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const matches = useMediaQuery(
    json2mq({
      minWidth: 1024,
    })
  );

  return (
    <Box
      className="flex flex-col lg:flex-row"
      sx={{
        flexGrow: 1,
        borderRadius: "16px",
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        indicatorColor="secondary"
        variant="scrollable"
        orientation={matches ? "vertical" : "horizontal"}
        scrollButtons
        className="min-w-[250px]"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: "divider", color: "#232323" }}
      >
        <Tab
          label="Clean-Ready club access"
          className="md:items-start md:text-left text-sm text-secondaryText"
          {...a11yProps(0)}
        />
        <Tab
          label="Impact reduction tracking"
          className="md:items-start md:text-left text-sm text-secondaryText"
          {...a11yProps(1)}
        />
        <Tab
          label="Marketing toolkit"
          className="md:items-start md:text-left text-sm text-secondaryText"
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
          <div className="lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]">
            <Image
              src="/images/clean-ready.png"
              width={300}
              height={300}
              objectFit="cover"
              alt="betty"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="py-10 pr-2 pl-2 lg:pl-8">
          <p className="text-[20px] leading-6 mb-4">
            Direct line access to our club support representatives for:
          </p>
          <ul className="space-y-8 text-left py-8">
            <li className="flex items-start gap-4">
              <Image
                src="/icons/check-yellow.svg"
                width={20}
                height={20}
                objectFit="contain"
              />
              <p> Bespoke site analysis for renewable installs</p>
            </li>
            <li className="flex items-start gap-4">
              <Image
                src="/icons/check-yellow.svg"
                width={20}
                height={20}
                objectFit="contain"
              />
              <p> Energy efficiency advice</p>
            </li>
            <li className="flex items-start gap-4">
              <Image
                src="/icons/check-yellow.svg"
                width={20}
                height={20}
                objectFit="contain"
              />
              <p> Energy efficiency advice</p>
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          reprehenderit doloremque assumenda quibusdam, distinctio deleniti odit
          eos nisi, quis molestias recusandae itaque nobis soluta id minus
          impedit odio rerum facere!
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet
          velit delectus nesciunt pariatur natus veniam nemo ratione, in aut
          sunt quasi voluptatem facilis impedit odio maiores qui tempore fuga?
        </div>
      </TabPanel>
    </Box>
  );
}
