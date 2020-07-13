import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

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

function Renderdish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardBody>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </CardBody>
    </Card>
  );
}
const DishDetails = (props) => {
  const dish = props.dish;
  if (dish != null)
    return (
      <div class="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Renderdish dish={props.dish} />
          </div>

          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};
export default DishDetails;
