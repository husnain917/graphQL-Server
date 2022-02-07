import React from 'react';

export function useEnrollmentApproval() {
  const [loading, setLoading] = React.useState(false)
  //   const data=[
  //       {
  //         StudentName:'sami',
  //         Email:'sami@gmail.com',
  //         Course:'React Native',
  //         PaymentMethod:'Credit card',
  //         Amount:'-----',
  //         TransactionID:'-------',
  //         Status:'active',
  //       }
  //   ]
  const data = [
    {
      name: 'sami',
      email: 'samishokat@gmail.com',
      course: 'react native',
      paymentMethod: 'debit card',
      amount: '15000 RS',
      transactionId: 'none',
      status: 'active'
    },
    {
      name: 'ahsan',
      email: 'samishokat@gmail.com',
      course: 'react native',
      paymentMethod: 'debit card',
      amount: '15000 RS',
      transactionId: 'none',
      status: 'offline'
    },
    {
      name: 'sami',
      email: 'samishokat@gmail.com',
      course: 'react native',
      paymentMethod: 'debit card',
      amount: '15000 RS',
      transactionId: 'none',
      status: 'offline'
    },
    {
      name: 'ali',
      email: 'samishokat@gmail.com',
      course: 'react native',
      paymentMethod: 'debit card',
      amount: '15000 RS',
      transactionId: 'none',
      status: 'offline'
    },
  ]
  return [data, loading]
}

