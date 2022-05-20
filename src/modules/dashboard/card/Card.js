import React from 'react';
import { MetroSpinner   } from 'react-spinners-kit';
import { CS } from './CardStyle';
export default function SpacingGrid({ icon, heading, value, STAFF_LOADING, COURSE_LOADING, STUDENT_LOADING, EVENTS_LOADING, SUCCESS_LOADING }) {
    return (
        <CS.CardContainer>
            <CS.CenterContainer>
                {icon}
                <CS.Heading>{heading}</CS.Heading>
                {
                    STAFF_LOADING || COURSE_LOADING || STUDENT_LOADING || EVENTS_LOADING || SUCCESS_LOADING ?
                        <div style={{ display: "flex", justifyContent: "center" }}><MetroSpinner   color="#0D4cb5" height={10} width={10} /></div>
                        :
                        <CS.Value>{value}</CS.Value>
                }
            </CS.CenterContainer>
        </CS.CardContainer>
    );
}
