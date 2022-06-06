import React from 'react';
import {Grid, Space} from "antd";
import {ActionContent, LicenseString, PersonFullName, PersonName} from "./style/name";
import ActionItemWrap from "./style/item-wrap";
import TakeActionForm from "./form";

const {useBreakpoint} = Grid;

const TakeActionItem = ({person}) => {
    const breakpoints = useBreakpoint();

    return (
        <ActionItemWrap>
            <img
                src={person.user_avatar}
                alt={person.name}
                width={breakpoints.md ? 110 : 70}
                height={breakpoints.md ? 110 : 70}
                style={{
                    borderRadius: 200,
                    objectFit: 'cover'
                }}
            />
            {/* <ItemContent>

            </ItemContent> */}
            <div style={{width:'100%'}}>
                <PersonName>
                    {person.full_name}
                </PersonName>
                <Space>
                   
                    <LicenseString>
                    {person.state}&nbsp;&nbsp;&nbsp;{person.country}&nbsp;&nbsp;&nbsp;{person.license}&nbsp;&nbsp;{person.case_name}

                    </LicenseString>
                </Space>
                <ActionContent style={{fontSize:16}}>
                    <p>{person.page_contents.slice(0, 260)} ... ...</p>
                </ActionContent>
            </div>
            <div style={{width:'*'}}><TakeActionForm person={person}/></div>
        </ActionItemWrap>
    );
};

export default TakeActionItem;