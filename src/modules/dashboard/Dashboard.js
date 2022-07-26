import React, { useEffect, useState } from "react";
import { DS } from "./DashboardStyle";
import Card from './card/Card';
import UseDashboard from "./UseDashboard";
import { Link } from "react-router-dom";

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
        userGroupOrganizationLength,
        enrollement,
        ENROLMENT_LOADING,
        COURSE_LOADING,
        all_org,
        ALL_ORG_LOADING,
        USER_LOADING,
        EVENTS_LOADING,
        CATEGORY_LOADING,
        SPEAKERS_LOADING,
        SUCCESS_LOADING,
        BATCH_LOADING,
        USER_GROUP_LOADING
    }] = UseDashboard();
   

    const userRole = state?.user.userGroup.map((items) => {
        return items.userGroupRole
    })





    return (
        <>
            <DS.MainPageContainer>
                <DS.CardsRow>
                    <DS.CardContainer>
                        <Link to='/' className="link">
                            <Card
                                value={all_org ? all_org : 0}
                                USERS_LOADING={ALL_ORG_LOADING}
                                heading='ORGANIZATION'
                                icon={<DS.PeopleOutline />}
                            />
                        </Link>
                    </DS.CardContainer>
                    <DS.CardContainer>
                        <Link to='/staff' className="link">
                            <Card
                                value={AdminLength ? AdminLength : 0}
                                USERS_LOADING={USER_LOADING}
                                heading='ADMINS'
                                icon={<DS.PersonIcon />}
                            />
                        </Link>
                    </DS.CardContainer>
                    <DS.CardContainer>
                        <Link to='/staff' className="link">
                            <Card
                                value={TeacherLength ? TeacherLength : 0}
                                USERS_LOADING={USER_LOADING}
                                heading='TEACHERS'
                                icon={<DS.RecordVoiceOver />}
                            />
                        </Link>
                    </DS.CardContainer>
                </DS.CardsRow>
                <DS.CardsRow>
                    <DS.CardContainer>
                        <Link to='/students' className="link">
                            <Card
                                value={studentLength ? studentLength : 0}
                                USERS_LOADING={USER_LOADING}
                                heading='STUDENTS'
                                icon={<DS.PeopleOutline />}
                            />
                        </Link>
                    </DS.CardContainer>
                    <DS.CardContainer>
                        <Link to='/courses' className="link">
                            <Card
                                value={courseLength ? courseLength : 0}
                                COURSE_LOADING={COURSE_LOADING}
                                heading='COURSES'
                                icon={<DS.Subscriptions />}
                            />
                        </Link>
                    </DS.CardContainer>
                    <DS.CardContainer>
                        <Link to='/events' className="link">
                            <Card
                                value={eventLength ? eventLength : 0}
                                EVENTS_LOADING={EVENTS_LOADING}
                                heading='EVENTS'
                                icon={<DS.EventAvailableIcon />}
                            />
                        </Link>
                    </DS.CardContainer>
                </DS.CardsRow>
                {
                    userRole === "ORGANIZATIONKEY" || "OWNER" ?
                        <DS.CardsRow>
                            <DS.CardContainer>
                                <Link to='/courseBatch' className="link">
                                    <Card
                                        value={courseBatchlength ? courseBatchlength : 0}
                                        BATCH_LOADING={BATCH_LOADING}
                                        heading='COURSE BATCH'
                                        icon={<DS.Subscriptions />}
                                    />
                                </Link>
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Link to='/approve-enrollment' className="link">
                                    <Card
                                        value={enrollement ? enrollement : 0}
                                        ENROLMENT_LOADING={ENROLMENT_LOADING}
                                        heading='ENROLLMENT APPROVAL'
                                        icon={<DS.CheckCircleIcon />}
                                    />
                                </Link>
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Link to='/successStory' className="link">
                                    <Card
                                        value={successLength ? successLength : 0}
                                        SUCCESS_LOADING={SUCCESS_LOADING}
                                        heading='SUCCESS STORIES'
                                        icon={<DS.LocalActivity />}
                                    />
                                </Link>
                            </DS.CardContainer>
                            <DS.CardContainer>
                                <Link to='/speakers' className="link">
                                    <Card
                                        value={speakerListLength ? speakerListLength : 0}
                                        SPEAKERS_LOADING={SPEAKERS_LOADING}
                                        heading='SPEAKERS'
                                        icon={<DS.SurroundSoundIcon />}
                                    />
                                </Link>
                            </DS.CardContainer>
                        </DS.CardsRow>
                        :
                        ''
                }
            </DS.MainPageContainer>
        </>
    )
}