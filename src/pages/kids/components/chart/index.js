import React from 'react';
import KidsChartWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import P1 from "../../../../components/paragraph";

import ChartImage from '../../../../assets/img/chart.png'

const KidsChart = () => {
    return (
        <KidsChartWrap>
            <Container>
                <SectionTitle>
                    Crime Bill Targeted Black Men VAWA Targeted Black Women
                </SectionTitle>
                <P1>
                    You paid for Hunter Biden's $7000 sunglasses! Seeing the riches the Biden
                    Crime Family was racking in locking up black men, the Clinton's decided to build their own empire
                    targeting black women with <a
                    href='https://www.saveservices.org/2021/03/vawa-long-standing-and-widespread-waste-fraud-and-abuse/'
                    target='_blank'>VAWA</a>, a bogus cover for Planned Parenthood and Family Court. Since
                    the Bill Clinton sign VAWA and Safe Families Act aka <b>Cash for Kids</b>, revenue from divorces has
                    increased 60 fold from $1 billion to $60 billion a year. The family court is a system of illegal
                    wealth transfer from parents to lawyers, judges, DAs, police, therapists, bogus experts using their
                    kids.
                </P1>
                <img src={ChartImage} alt="Divorce industry revenue since bill clinton made 'kids for cash' law"/>
            </Container>
        </KidsChartWrap>
    );
};

export default KidsChart;