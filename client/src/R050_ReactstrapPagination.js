import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class R050_ReactstrapPagination extends Component {
  pagination = (type) => {
    alert('go' + type);
  }

  render() {
    return (
		<>
			<Pagination size="lg" aria-label="Page navigation">
				<PaginationItem>
					<PaginationLink first onClick={(e) => this.pagination('first')} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink previous onClick={(e) => this.pagination('이전')} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink onClick={(e) => this.pagination('1')}>1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink onClick={(e) => this.pagination('2')}>2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink next onClick={(e) => this.pagination('next')} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink last onClick={(e) => this.pagination('last')} />
				</PaginationItem>
			</Pagination>
		</>
	);
  }
}
