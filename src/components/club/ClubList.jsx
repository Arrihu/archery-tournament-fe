import React from 'react'
import { Button } from 'reactstrap'


class ClubList extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <div className="row">
                    <div className="col-sm-6" align="left">
                        <h5>List Data Club</h5>
                    </div>

                    <div className="col-sm-6" align="right">
                        <Button color="primary" onClick={this.props.modalToggle}>
                            <i className="cui-cursor" /> Add Club
                        </Button>
                    </div>
                </div>

                <br/>
                <div className="card">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="#">#</th>    
                                <th scope="col">Name</th>    
                                <th scope="col">Address</th>    
                                <th scope="col">Action</th>    
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Arrihu</td>
                                <td>Mataram</td>
                                <td>
                                    <button className="btn btn-warning">
                                        <i className="cui-pencil"></i>
                                    </button>
                                    <button className="btn btn-danger">
                                        <i className="cui-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ClubList