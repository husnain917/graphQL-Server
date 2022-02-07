import React from 'react';

export function useEvents() {
    const [loading, setLoading] = React.useState(false)

    const data = [
        {
            Title: "Cloud Computing",
            Venue: 'Techloset Solution',
            MaxTickets: '100',
            DateTime: '01/10/22',
            EventType: 'Techlonogy',
            Status: 'none',
            Speakers: 'naveed sarwar',

        },
        {
            Title: "Block chain",
            Venue: 'Techloset Solution',
            MaxTickets: '100',
            DateTime: '01/10/22',
            EventType: 'Techlonogy',
            Status: 'none',
            Speakers: 'naveed sarwar',
        },
        {
            Title: "Full stack",
            Venue: 'Techloset Solution',
            MaxTickets: '100',
            DateTime: '01/10/22',
            EventType: 'Techlonogy',
            Status: 'none',
            Speakers: 'naveed sarwar',
        },
        {
            Title: "Freelancing",
            Venue: 'Techloset Solution',
            MaxTickets: '100',
            DateTime: '01/10/22',
            EventType: 'Techlonogy',
            Status: 'none',
            Speakers: 'naveed sarwar',
        },
    ]

    return [data, loading]
}

