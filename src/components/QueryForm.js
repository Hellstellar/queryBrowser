import React from 'react';
import { Form, TextArea, Button, Grid } from 'semantic-ui-react'
 
const QueryForm = ({ queryChange, onSubmit, query }) => (
    <Form>
        <Form.Field>
            <TextArea placeholder='Write your query here ...' value={query} onChange = { queryChange } />
        </Form.Field>
        <Form.Field>
            <Grid centered padded>
                <Button onClick = {onSubmit} primary>RUN QUERY</Button>
            </Grid>
        </Form.Field>
    </Form>
)

export default QueryForm;