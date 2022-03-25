import React from "react";
import { DS } from "./DashboardStyle";
import Card from './card/Card';
import UseDashboard from "./UseDashboard";
import { GetStudentsNum } from './Usecards'
export default function Dashboard({ authState }) {
    GetStudentsNum()
    const [{ Notify }] = UseDashboard();
    if (authState) {
        // Navigate('/dashboard)
        Notify()
    }

    return (

        <DS.MainPageContainer>
            <DS.CardsRow>
                <DS.CardContainer>
                    <Card value='0' heading='STUDENTS' icon={<DS.PeopleOutline />} />
                </DS.CardContainer>
                <DS.CardContainer>
                    <Card value='0' heading='TEACHERS' icon={<DS.RecordVoiceOver />} />
                </DS.CardContainer><DS.CardContainer>
                    <Card value='0' heading='ADMINS' icon={<DS.PersonIcon />} />
                </DS.CardContainer>
            </DS.CardsRow>
            <DS.CardsRow>
                <DS.CardContainer>
                    <Card value='0' heading='SUCCESS STORIES' icon={<DS.LocalActivity />} />
                </DS.CardContainer>
                <DS.CardContainer>
                    <Card value='0' heading='EVENTS' icon={<DS.EventAvailableIcon />} />
                </DS.CardContainer>
                <DS.CardContainer>
                    <Card value='0' heading='COURSES' icon={<DS.Subscriptions />} />
                </DS.CardContainer>
            </DS.CardsRow>
        </DS.MainPageContainer>
    )
}