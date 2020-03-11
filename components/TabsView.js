import React, { Component } from 'react';
import { Container, Header, Content, Left, Body, Right, ScrollableTab, Title, Tab, Tabs } from 'native-base';
import TodaysDeals from './Tabs/TodaysDeals';
import CashbackDeals from './Tabs/CashbackDeals';
import TrendingDeals from './Tabs/TrendingDeals';
import FeaturedDeals from './Tabs/FeaturedDeals';
export default class TabsExample extends Component {
    render() {
        return (
            <TodaysDeals />
            // <Container> 
            //     <Tabs
            //         tabBarUnderlineStyle={{ backgroundColor: '#443266' }}
            //         renderTabBar={() => (
            //             <ScrollableTab style={{ backgroundColor: 'red' }} />
            //         )}>
            //         <Tab
            //             tabStyle={{ backgroundColor: '#F1F0FF' }}
            //             activeTabStyle={{ backgroundColor: '#C3C3E5' }}
            //             textStyle={{ color: '#000' }}
            //             activeTextStyle={{ color: '#8C489F' }}
            //             heading="Today's Deal">
            //             <TodaysDeals />
            //         </Tab>
            //         <Tab
            //             tabStyle={{ backgroundColor: '#F1F0FF' }}
            //             activeTabStyle={{ backgroundColor: '#C3C3E5' }}
            //             textStyle={{ color: '#000' }}
            //             activeTextStyle={{ color: '#8C489F' }}
            //             heading="Cashback Deals" >
            //             <CashbackDeals />
            //         </Tab>
            //         <Tab
            //             tabStyle={{ backgroundColor: '#F1F0FF' }}
            //             activeTabStyle={{ backgroundColor: '#C3C3E5' }}
            //             textStyle={{ color: '#000' }}
            //             activeTextStyle={{ color: '#8C489F' }}
            //             heading="Trending Deals" >
            //             <TrendingDeals />
            //         </Tab>
            //         <Tab
            //             tabStyle={{ backgroundColor: '#F1F0FF' }}
            //             activeTabStyle={{ backgroundColor: '#C3C3E5' }}
            //             textStyle={{ color: '#000' }}
            //             activeTextStyle={{ color: '#8C489F' }}
            //             heading="Featured Deals" >
            //             <FeaturedDeals />
            //         </Tab>
            //     </Tabs>
            // </Container>
        );
    }
}