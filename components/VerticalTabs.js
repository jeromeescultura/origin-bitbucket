import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import json2mq from "json2mq";
import { Grid, useMediaQuery } from "@mui/material";

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
          <div className="flex flex-col lg:flex-row justify-evenly lg:items-start">
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
      className="flex flex-col lg:flex-row relative"
      sx={{
        flexGrow: 1,
        borderRadius: "16px",
        bgcolor: "background.paper",
      }}
    >
      <p className="flex justify-center lg:justify-start lg:pl-4 pt-4 font-medium text-primaryText absolute inset-0">
        Business Club Benefits
      </p>
      <Tabs
        indicatorColor="secondary"
        variant="scrollable"
        orientation={matches ? "vertical" : "horizontal"}
        scrollButtons
        className="min-w-[250px] mt-12"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: "divider", color: "#232323" }}
      >
        <Tab
          label="Dedicated Business Club Specialist"
          className="md:items-start md:text-left text-sm text-secondaryText"
          {...a11yProps(0)}
        />
        <Tab
          label="Impact reduction tracking"
          className="md:items-start md:text-left text-sm text-secondaryText"
          {...a11yProps(1)}
        />
        <Tab
          label="Free marketing toolkit"
          className="md:items-start md:text-left text-sm text-secondaryText"
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
          <div className="w-[80%] lg:w-[250px] xl:w-[300px] max-w-[300px]">
            <img src="images/perks.jpg" className="w-full" alt="perks" />
          </div>
        </div>
        <div className="py-10 lg:pt-0 pr-2 pl-2 lg:pl-8">
          <p className="text-[20px] leading-6 mb-4">
            Direct line access to our dedicated Business Club Specialists for:
          </p>
          <ul className="space-y-8 text-left py-8">
            <li className="flex items-start gap-4">
              <img src="icons/check-yellow.svg" className="w-5" alt="check" />
              {/* <div className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
                <Image
                  src="/icons/check-yellow.svg"
                  width={40}
                  height={40}
                  objectFit="contain"
                  alt="check"
                />
              </div> */}
              <p> Bespoke site analysis for solar installs</p>
            </li>
            <li className="flex items-start gap-4">
              <img src="icons/check-yellow.svg" className="w-5" alt="check" />
              {/* <div className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
                <Image
                  src="/icons/check-yellow.svg"
                  width={40}
                  height={40}
                  objectFit="contain"
                  alt="check"
                />
              </div> */}
              <p> Energy efficiency support for your business</p>
            </li>
            <li className="flex items-start gap-4">
              <img src="icons/check-yellow.svg" className="w-5" alt="check" />
              {/* <div className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
                <Image
                  src="/icons/check-yellow.svg"
                  width={40}
                  height={40}
                  objectFit="contain"
                  alt="check"
                />
              </div> */}
              <p>Guidance on cleaner energy solutions</p>
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <div className="w-[80%] lg:w-[250px] xl:w-[300px] max-w-[300px]">
            <img src="images/perks-2.jpg" className="w-full" alt="perks" />
          </div>

          {/*         
          <div className="lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]">
            <Image
              src="/images/perks-2.jpg"
              width={300}
              height={300}
              objectFit="cover"
              alt="betty"
              className="rounded-xl"
            />
          </div> */}
        </div>
        <div className="py-10 lg:pt-0 pr-2 pl-2 lg:pl-8">
          <p className="text-[20px] leading-6 mb-4">
            All businesses choosing to participate with us will receive
          </p>
          <ul className="space-y-8 text-left py-8">
            <li className="flex items-start gap-4">
              <img src="icons/check-yellow.svg" className="w-5" alt="check" />
              {/* <div className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
                <Image
                  src="/icons/check-yellow.svg"
                  width={40}
                  height={40}
                  objectFit="contain"
                  alt="check"
                />
              </div> */}
              <p>Insights on how your business has supported cleaner energy</p>
            </li>
            <li className="flex items-start gap-4">
              <img src="icons/check-yellow.svg" className="w-5" alt="check" />
              {/* <div className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
                <Image
                  src="/icons/check-yellow.svg"
                  width={40}
                  height={40}
                  objectFit="contain"
                  alt="check"
                />
              </div> */}
              <p> Energy Efficiency Checklist</p>
            </li>
            <li className="flex items-start gap-4">
              <img src="icons/check-yellow.svg" className="w-5" alt="check" />
              {/* <div className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
                <Image
                  src="/icons/check-yellow.svg"
                  width={40}
                  height={40}
                  objectFit="contain"
                  alt="check"
                />
              </div> */}
              <p>
                An opportunity to share what you would want from future
                decarbonisation services
              </p>
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <div className="w-[80%] lg:w-[250px] xl:w-[300px] max-w-[300px]">
            <img src="images/perks-3.jpg" className="w-full" alt="perks" />
          </div>

          {/* <div className="lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]">
            <Image
              src="/images/perks-3.jpg"
              width={300}
              height={300}
              objectFit="cover"
              alt="betty"
              className="rounded-xl"
            />
          </div> */}
        </div>
        <div className="py-10 lg:pt-0 pr-2 pl-2 lg:pl-8">
          <p className="text-[20px] leading-6 mb-4">
            Let others know about the steps you&apos;re making through our free
            toolkit which includes
          </p>
          <ul className="space-y-8 text-left py-8">
            <li className="flex items-start gap-4">
              <img src="icons/check-yellow.svg" className="w-5" alt="check" />
              {/*             
              <div className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
                <Image
                  src="/icons/check-yellow.svg"
                  width={40}
                  height={40}
                  objectFit="contain"
                  alt="check"
                />
              </div> */}
              <p>
                Downloadable assets to help you and your employees share the
                steps you&apos;ve made
              </p>
            </li>
            <li className="flex items-start gap-4">
              <img src="icons/check-yellow.svg" className="w-5" alt="check" />
              {/* <div className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
                <Image
                  src="/icons/check-yellow.svg"
                  width={40}
                  height={40}
                  objectFit="contain"
                  alt="check"
                />
              </div> */}
              <p>
                Opportunities to be recognised in our customer case studies
                &amp; blogs
              </p>
            </li>
          </ul>
        </div>
      </TabPanel>
    </Box>
  );
}
