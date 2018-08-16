import React from 'react';
import { Table } from 'semantic-ui-react'

const QueryResult = ({ users }) => {
    const rows = users.map((user, i) => {
        return (
            <Table.Row key = {i}>
                <Table.Cell>{ user.name }</Table.Cell>
                <Table.Cell>{ user.age }</Table.Cell>
                <Table.Cell>{ user.email }</Table.Cell>
                <Table.Cell>{ user.premium_plan }</Table.Cell>
            </Table.Row>
        )
    })
    return (
        <Table color='black' inverted>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Age</Table.HeaderCell>
                    <Table.HeaderCell>E-mail address</Table.HeaderCell>
                    <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                { rows }
            </Table.Body>
        </Table>
    )
}

export default QueryResult;