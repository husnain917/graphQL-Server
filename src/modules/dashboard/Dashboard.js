import React from "react";
import { DS } from "./DashboardStyle";
import Card from './card/Card';
import UseDashboard from "./UseDashboard";
export default function Dashboard({ authState }) {
    const [{ Notify, student, success, staff, course, event, admin }] = UseDashboard();
    if (authState) {
        Notify()
    }


    return (

        <DS.MainPageContainer>
            <DS.CardsRow>
                <DS.CardContainer>
                    <Card value={student ? student : 0} heading='STUDENTS' icon={<DS.PeopleOutline />} />
                </DS.CardContainer>
                <DS.CardContainer>
                    <Card value={staff ? staff : 0} heading='TEACHERS' icon={<DS.RecordVoiceOver />} />
                </DS.CardContainer><DS.CardContainer>
                    <Card value={admin ? admin : 0} heading='ADMINS' icon={<DS.PersonIcon />} />
                </DS.CardContainer>
            </DS.CardsRow>
            <DS.CardsRow>
                <DS.CardContainer>
                    <Card value={success ? success : 0} heading='SUCCESS STORIES' icon={<DS.LocalActivity />} />
                </DS.CardContainer>
                <DS.CardContainer>
                    <Card value={event ? event : 0} heading='EVENTS' icon={<DS.EventAvailableIcon />} />
                </DS.CardContainer>
                <DS.CardContainer>
                    <Card value={course ? course : 0} heading='COURSES' icon={<DS.Subscriptions />} />
                </DS.CardContainer>
            </DS.CardsRow>
        </DS.MainPageContainer>
    )
}