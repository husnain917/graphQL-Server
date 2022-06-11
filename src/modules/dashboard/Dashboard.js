import React from "react";
import { DS } from "./DashboardStyle";
import Card from './card/Card';
import UseDashboard from "./UseDashboard";

export default function Dashboard() {
    const [{
        AdminLength,
        TeacherLength,
        studentLength,
        successLength,
        state,
        eventLength,
        speakerListLength,
        courseLength,
        courseBatchlength,
        enrollement,
        COURSE_LOADING,
        USERS_LOADING,
        EVENTS_LOADING,
        SUCCESS_LOADING,
        BATCH_LOADING,
        SPEAKERS_LOADING,
        ENROLMENT_LOADING
    }] = UseDashboard();

    return (
        <>
            <DS.MainPageContainer>
                <DS.CardsRow>
                    <DS.CardContainer>
                        <Card
                            value={studentLength ? studentLength : 0}
                            USERS_LOADING={USERS_LOADING}
                            heading='STUDENTS'
                            icon={<DS.PeopleOutline />}
                        />
                    </DS.CardContainer>
                    <DS.CardContainer>
                        <Card
                            value={TeacherLength ? TeacherLength : 0}
                            USERS_LOADING={USERS_LOADING}
                            heading='TEACHERS'
                            icon={<DS.RecordVoiceOver />}
                        />
                    </DS.CardContainer><DS.CardContainer>
                        <Card
                            value={AdminLength ? AdminLength : 0}
                            USERS_LOADING={USERS_LOADING}
                            heading='ADMINS'
                            icon={<DS.PersonIcon />}
                        />
                    </DS.CardContainer>
                </DS.CardsRow>
                <DS.CardsRow>
                    <DS.CardContainer>
                        <Card
                            value={successLength ? successLength : 0}
                            SUCCESS_LOADING={SUCCESS_LOADING}
                            heading='SUCCESS STORIES'
                            icon={<DS.LocalActivity />}
                        />
                    </DS.CardContainer>
                    <DS.CardContainer>
                        <Card
                            value={eventLength ? eventLength : 0}
                            EVENTS_LOADING={EVENTS_LOADING}
                            heading='EVENTS'
                            icon={<DS.EventAvailableIcon />}
                        />
                    </DS.CardContainer>
                    <DS.CardContainer>
                        <Card
                            value={courseLength ? courseLength : 0}
                            COURSE_LOADING={COURSE_LOADING}
                            heading='COURSES'
                            icon={<DS.Subscriptions />}
                        />
                    </DS.CardContainer>
                </DS.CardsRow>
                {
                    state.user?.role === "OWNER" ?
                        <DS.CardsRow>
                            <DS.CardContainer>
                                <Card
                                    value={speakerListLength ? speakerListLength : 0}
                                    SPEAKERS_LOADING={SPEAKERS_LOADING}
                                    heading='SPEAKERS'
                                    icon={<DS.SurroundSoundIcon />}
                                />
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Card
                                    value={courseBatchlength ? courseBatchlength : 0}
                                    BATCH_LOADING={BATCH_LOADING}
                                    heading='COURSE BATCH'
                                    icon={<DS.Subscriptions />}
                                />
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Card
                                    value={enrollement ? enrollement : 0}
                                    ENROLMENT_LOADING={ENROLMENT_LOADING}
                                    heading='ENROLLMENT APPROVAL'
                                    icon={<DS.CheckCircleIcon />} />
                            </DS.CardContainer>
                        </DS.CardsRow>
                        :
                        ''
                }
            </DS.MainPageContainer>
        </>
    )
}