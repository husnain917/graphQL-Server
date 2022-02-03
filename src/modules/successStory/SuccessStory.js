import React from 'react';
import Table from '../../commonComponents/table/Table';
import { useSuccessStory } from './useSuccessStory';
import { Audio } from 'react-loader-spinner';
import { SuccessStoryStyle } from './SuccessStoryStyle';
import { ToastContainer } from 'react-toastify';
export default function SuccessStory() {
  const [data, loading] = useSuccessStory();
  return (
    <>
     <ToastContainer />
      {loading ? (
        <SuccessStoryStyle.LoaderContainer>
          <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
        </SuccessStoryStyle.LoaderContainer>
      ) : (
        <div>
          <Table data={data} title={'Success Stories'} />
        </div>
      )}
    </>
  );
}
