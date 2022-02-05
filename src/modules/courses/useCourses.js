import { useState } from 'react';

export function UseCourses() {
  const [loading, setLoading] = useState(false)
  const data = [
    {
      name: 'sami',
      email: 'samishokat@gmail.com',
      status: 'Active',
      phone: '000000000000',
      image: 'image'
    },
    {
      name: 'sami',
      email: 'samishokat@gmail.com',
      status: 'Closed',
      phone: '000000000000',
      image: 'image'
    },
    {
      name: 'sami',
      email: 'samishokat@gmail.com',
      status: 'Active',
      phone: '000000000000',
      image: 'image'
    },
    {
      name: 'sami',
      email: 'samishokat@gmail.com',
      status: 'Active',
      phone: '000000000000',
      image: 'image'
    },
  ]
  return [{data, loading}]
}
