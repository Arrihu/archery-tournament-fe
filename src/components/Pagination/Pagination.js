import React from 'react'
import { Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap';


const PaginationComponent = () => {
    return (
        <div>
            <Container>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                    <PaginationLink previous href="#" />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">
                            4
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">
                            5
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                </Pagination>
            </Container>
        </div>
    )
}

export default PaginationComponent