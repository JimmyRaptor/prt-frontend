import {
  Box,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const TabsComponent = ({ device, tabPosition, setSelectedDevice }) => {

  const tabs = [
    { label: "Down" },
    { label: "Delay" },
    { label: "Ready" },
    { label: "Standby" },
  ];

  return (
    <Box
      position="absolute"
      top={tabPosition.y}
      left={tabPosition.x}
      fontWeight="bold"
    >
      <Tabs
        variant="enclosed"
        colorScheme="green"
        borderWidth="1px"
        borderColor="gray.200"
        bg="blue.900"
      >
        <Box as="h1" textAlign="center" fontWeight="bold" fontSize="15px">
          {device.name}
        </Box>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={index} display="flex" alignItems="center">
              <Box as="p" flex="1">
                {tab.label}
              </Box>
              <Button
                variant="solid"
                colorScheme="blue"
                size="sm"
                onClick={() => setSelectedDevice(null)}
              >
                Submit
              </Button>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsComponent;
