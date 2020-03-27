import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320'
      },
     {
        name: 'Cara Stevens',
        position: 'Sales Assistant',
        office: 'New York',
        age: '46',
        date: '2011/12/06',
        salary: '$145'
      },
      {
        name: 'Hermione Butler',
        position: 'Regional Director',
        office: 'London',
        age: '47',
        date: '2011/03/21',
        salary: '$356'
      },
      {
        name: 'Lael Greer',
        position: 'Systems Administrator',
        office: 'London',
        age: '21',
        date: '2009/02/27',
        salary: '$103'
      },
      {
        name: 'Jonas Alexander',
        position: 'Developer',
        office: 'San Francisco',
        age: '30',
        date: '2010/07/14',
        salary: '$86'
      },
      {
        name: 'Shad Decker',
        position: 'Regional Director',
        office: 'Edinburgh',
        age: '51',
        date: '2008/11/13',
        salary: '$183'
      },
      {
        name: 'Michael Bruce',
        position: 'Javascript Developer',
        office: 'Singapore',
        age: '29',
        date: '2011/06/27',
        salary: '$183'
      },
      {
        name: 'Donna Snider',
        position: 'Customer Support',
        office: 'New York',
        age: '27',
        date: '2011/01/25',
        salary: '$112'
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
}

export default DatatablePage;