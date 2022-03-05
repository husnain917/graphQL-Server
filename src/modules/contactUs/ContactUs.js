import React from "react"
import Table from '../../commonComponents/table/Table'
import useContactUs from "./useContactUs"
import { CommonLoadingStyle } from "../../constants/CommonTableStyle"
import { Audio } from "react-loader-spinner"
import { ToastContainer } from "react-toastify"
export default function ContactUs() {
    const [{ filterDataArray, loading, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick }] = useContactUs()
    return (
        <div>
            <>
                <ToastContainer />
                {
                    loading ?
                        <CommonLoadingStyle.LoaderContainer>
                            <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
                        </CommonLoadingStyle.LoaderContainer>
                        :
                        <Table title="Contact us"
                            tableHeadings={['Name', 'Email', 'Subject', 'Message', 'Status', 'Actions']}
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



        </div>
    )
}
