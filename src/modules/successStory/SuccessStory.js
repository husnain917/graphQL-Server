import React from 'react';
import Table from '../../commonComponents/table/Table';
import { useSuccessStory } from './useSuccessStory';
import { Audio } from 'react-loader-spinner';
import { SuccessStoryStyle } from './SuccessStoryStyle';
import { ToastContainer } from 'react-toastify';
export default function SuccessStory() {
  const [{filterDataArray, loading, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick}] = useSuccessStory();
  return (
    <>
      <ToastContainer />
      {loading ? (
        <SuccessStoryStyle.LoaderContainer>
          <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
        </SuccessStoryStyle.LoaderContainer>
      ) : (
        <div>
          <Table
            title={'Success Stories'}
            tableHeadings={['Name', 'Email', 'Role', 'Phone', 'Image', 'Actions']}
            data={filterDataArray}
            handleClickOpen={handleClickOpen}
            open={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
            handleAnchorClose={handleAnchorClose}
            handleAnchorClick={handleAnchorClick}
            openAnchor={openAnchor}
          />
        </div>
      )}
    </>
  );
}
