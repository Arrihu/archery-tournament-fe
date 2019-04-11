import React from 'react'
import { Button, Table, Card, Row, Col } from 'reactstrap';

import './style/user.scss'


class UserList extends React.Component {

    render() {
        const { users } = this.props.dataState

        return(
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='data-title'>
                                <h4><b>List User Data</b></h4>
                            </div>
                        </Col>
                        <Col>
                            <div className='btn-add-user' align='right'>
                                <Button onClick={this.props.toggleUserForm} color='primary'>
                                    <i className='cui-cursor'></i> <b>Add User</b>
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    <Table>
                        <thead>
                            <tr>
                                <th style={{width: 30}}>#</th>
                                <th style={{width: 150}}>Nama</th>
                                <th style={{width: 100}}>Email</th>
                                <th style={{width: 100}}>Username</th>
                                <th style={{width: 100}}>Password</th>
                                <th style={{width: 140}}>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                typeof(users) == "object" &&
                                users.map((user, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                            <td>{user.password}</td>
                                            <td>
                                                <Button color='warning' size='sm' onClick={this.props.selectUser.bind(this, user)}>
                                                    <i className="cui-note" />
                                                </Button>

                                                <span style={{paddingLeft: 10}}></span>

                                                <Button className="btn btn-danger btn-sm" 
                                                    onClick={this.props.onDeleteUser.bind(this, user.id)}>
                                                    <i className="cui-trash" />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </Table>
                </Card>
            </div>
        )
    }
}

export default UserList