import CreateJobForm from '@/components/CreateJobForm'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import React from 'react'

const AddJobPage = () => {
   const queryClient = new QueryClient()

  return (
    <h1 className='text-4xl'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CreateJobForm />
      </HydrationBoundary>
    </h1>
  )
}

export default AddJobPage