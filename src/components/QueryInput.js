import React from 'react'
import { Button, Input } from 'semantic-ui-react';
 
const QueryInput = ({ queryChange }) => (
    <Input 
        size='massive'
        label={<Button >RUN QUERY</Button>}
        labelPosition='right'
        placeholder='SQL QUERY' 
        onChange = { queryChange }
    />
)

export default QueryInput;