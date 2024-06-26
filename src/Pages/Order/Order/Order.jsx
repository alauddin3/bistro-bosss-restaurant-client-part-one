import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import coverBackground from '../../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet-async';
import useFoodMenu from '../../../hooks/useFoodMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';



const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu, loading] = useFoodMenu();


    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Order Food || Bistro Boss Restaurant</title>
            </Helmet>
            <Cover backgroundImage={coverBackground} title={'Order Food'}></Cover>
            <div className='p-12'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab >Salad</Tab>
                        <Tab >pizza</Tab>
                        <Tab >soup</Tab>
                        <Tab >dessert</Tab>
                        <Tab >drinks</Tab>

                    </TabList>

                    <TabPanel >
                        <OrderTab item={salad} isLoading={loading}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;