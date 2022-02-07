import { useState } from 'react';

export function UseCourses() {
  const [loading, setLoading] = useState(false)
 
  const data = [
    {
      name: 'sami',
      trainer:'Naveed sarwar',
      status: 'Active',
      phone: '000000000000',
      image: 'image'
    },
    {
      name: 'sami',
      trainer:'Naveed sarwar',
      status: 'Closed',
      phone: '000000000000',
      image: 'image'
    },
    {
      name: 'sami',
      trainer:'Naveed sarwar',
      status: 'Active',
      phone: '000000000000',
      image: 'image'
    },
    {
      name: 'sami',
      trainer:'Naveed sarwar',
      status: 'Active',
      phone: '000000000000',
      image: 'image'
    },
  ]
  return [{data, loading}]
}
