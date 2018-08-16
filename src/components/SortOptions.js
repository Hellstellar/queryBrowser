import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const tagOptions = [
      {
        text: 'Name',
        value: 'name',
        label: { color: 'red', empty: true, circular: true },
      },
      {
        text: 'Age',
        value: 'age',
        label: { color: 'red', empty: true, circular: true },
      },
      {
        text: 'Email',
        value: 'email',
        label: { color: 'red', empty: true, circular: true },
      }
]

const SortOptions = ({ onSort }) => {
    return (
        <Dropdown 
            onChange={onSort} 
            text='Filter Users' 
            icon='filter' 
            options={tagOptions} 
            floating labeled button 
            className='icon'
        />
    )
}

export default SortOptions;