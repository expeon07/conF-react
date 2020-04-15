import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    renderDish(selectedDish) {
        if (selectedDish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );       
        } 
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(selectedDish) {
        if (selectedDish != null) {
            const comments = selectedDish.comments.map((comment) => {
                var options = { year: 'numeric', month: 'long', day: 'numeric' };
                var date = new Date(comment.date).toLocaleDateString([], options);
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {date}</p>
                    </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            )
        } 
        else {
            return(
                <div></div>
            );
        }
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Dishdetail;