import React, {Fragment} from 'react'
import TakeActionHero2 from "./components/hero2";
import TakeActionContent from "./components/action";
import { ConsoleSqlOutlined } from '@ant-design/icons';


export const TakeActionPage = ({person}) => {
    console.log('fsadfa',person)
    return (
        <Fragment>
            <TakeActionHero2 person={person}/>
            <TakeActionContent person={person}/>
        </Fragment>
    )
}

export default TakeActionPage 