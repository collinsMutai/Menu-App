import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderComments({ comments }) {
  if (comments != null)
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  else return <div></div>;
}
const DishDetails = (props) => {
  const dish = props.dish;
  if (dish != null)
    return (
      <div class="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardBody>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </CardBody>
            </Card>
          </div>

          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={dish.comments} />
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};
export default DishDetails;