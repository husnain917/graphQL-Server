import React, { useContext } from "react";
import { DS } from "./DashboardStyle";
import Card from './card/Card';
import UseDashboard from "./UseDashboard";
import { ToastSuccess } from '../../commonComponents/commonFunction/CommonFunction'
import { AppContext } from "../../State";

export default function Dashboard() {
    const { state, dispatch } = useContext(AppContext);
    const [{ staffLength, studentLength, successLength, eventLength, courseLength, adminLength, teacherLength, STAFF_LOADING, COURSE_LOADING, STUDENT_LOADING, EVENTS_LOADING, SUCCESS_LOADING }] = UseDashboard();

    // const toast = ToastSuccess('Welcome to DashBoard')

    return (

        <>
                    <DS.MainPageContainer>
                        <DS.CardsRow>
                            <DS.CardContainer>
                                <Card value={studentLength ? studentLength : 0} STUDENT_LOADING={STUDENT_LOADING} heading='STUDENTS' icon={<DS.PeopleOutline />} />
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Card value={staffLength ? staffLength : 0} STAFF_LOADING={STAFF_LOADING} heading='TEACHERS' icon={<DS.RecordVoiceOver />} />
                            </DS.CardContainer><DS.CardContainer>
                                <Card value={staffLength ? staffLength : 0} STAFF_LOADING={STAFF_LOADING} heading='ADMINS' icon={<DS.PersonIcon />} />
                            </DS.CardContainer>
                        </DS.CardsRow>
                        <DS.CardsRow>
                            <DS.CardContainer>
                                <Card value={successLength ? successLength : 0} SUCCESS_LOADING={SUCCESS_LOADING} heading='SUCCESS STORIES' icon={<DS.LocalActivity />} />
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Card value={eventLength ? eventLength : 0} EVENTS_LOADING={EVENTS_LOADING} heading='EVENTS' icon={<DS.EventAvailableIcon />} />
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Card value={courseLength ? courseLength : 0} COURSE_LOADING={COURSE_LOADING} heading='COURSES' icon={<DS.Subscriptions />} />
                            </DS.CardContainer>
                        </DS.CardsRow>
                    </DS.MainPageContainer>
            
        </>
    )
}