import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_ENROLLMENT } from './AllQueries';

export default function SampleDataFetch() {

    const { loading, error, data } = useQuery(GET_ENROLLMENT);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;




    //to fetch data on button Click

    
    // const [Users, { loading, error, data }] = useLazyQuery(GET_DATA);
    // const buttonHandle = () => {
    //     Users({ variables: { code: 'BR' } });
    // };


    return (

        <div>
            {data && (
                <ul>
                    {data.enrollmentApprovals.map((users) => (
                        <>
                            <div key={users.id}>
                                <li>{users.studentName}</li>
                                <li>{users.id}</li>
                            </div>
                        </>
                    ))}
                </ul>
            )}


            {/* <button onClick={buttonHandle}>button</button> */}


        </div>
    )
}
