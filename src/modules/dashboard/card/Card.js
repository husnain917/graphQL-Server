import React from 'react';
import { CS } from './CardStyle';
export default function SpacingGrid({ icon, heading, value }) {
    return (
        <CS.CardContainer>
            <CS.CenterContainer>
                {icon}
                <CS.Heading>{heading}</CS.Heading>
                <CS.Value>{value}</CS.Value>
            </CS.CenterContainer>
        </CS.CardContainer>
    );
}
