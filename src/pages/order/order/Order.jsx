import { useState } from "react";
import orderCover from "../../../../src/assets/shop/order.jpg";
import Cover from "../../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";

import OrderTab from "../orderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const Order = () => {
  const categories = ['salad','soup',  'pizza','drinks','dessert']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
    const [tabIndex , setTabindex] = useState(initialIndex)
    const [menu] = useMenu()
 
    console.log(category);
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    

  return (
    <div>
        <Helmet>
                <title>Bistro | Order</title>
            </Helmet>
      <Cover img={orderCover} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
  <TabList>
    <Tab>salad</Tab>
    <Tab>Soup</Tab>
    <Tab>Pizza</Tab>
    <Tab>Drinks</Tab>
    <Tab>Dessert</Tab>
  </TabList>
  <TabPanel>
    <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel >
    <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={desserts}></OrderTab>
  </TabPanel>
</Tabs>
    </div>
  );
};

export default Order;
