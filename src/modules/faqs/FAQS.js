import React from 'react'
import Table from '../../commonComponents/table/Table'
import { useFAQS } from './useFAQS'
import { CommonLoadingStyle } from '../../constants/CommonTableStyle'
import { Audio } from 'react-loader-spinner'
import { ToastContainer } from 'react-toastify'
export default function FAQS() {
    const [{ filterDataArray, loading, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick }] = useFAQS()
    return (

        <>
            <ToastContainer />
            {
                loading ?
                    <CommonLoadingStyle.LoaderContainer>
                        <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
                    </CommonLoadingStyle.LoaderContainer>
                    :
                    <Table title="FAQS"
                        tableHeadings={['Name', 'Email', 'Phone', 'Question', 'Actions']}
                        data={filterDataArray}
                        handleClickOpen={handleClickOpen}
                        open={open}
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                        handleAnchorClose={handleAnchorClose}
                        handleAnchorClick={handleAnchorClick}
                        openAnchor={openAnchor}
                    />
            }
        </>


    )
}
