import { Link } from "react-router-dom";
import "./CategoryCard.css";
import { Button } from "@mui/material";

const CategoryCard = (props) => {
  return (
    <div className="category__card__card" key={props.data.index}>
      <div className="category__image">
        <img
          src={`http://localhost:8081\\images\\${
            props.data.image ? props.data.image : ""
          }`}
          alt=""
          className="product__img"
        />
      </div>
      <div className="category__card__detail">
        <div className="category__name">
          <span>{props.data.name}</span>
        </div>
        <div className="category__card__action">
          <Link to={`/${props.data.name}`}>
            <Button
              variant="outlined"
              sx={[
                {
                  "&:hover": {
                    backgroundColor: "none",
                    borderColor: "#C38D9E",
                    color: "#C38D9E",
                  },
                  borderRadius: "20px",
                  borderColor: "#C38D9E",
                  backgroundColor: "#C38D9E",
                  color: "#000",
                  fontWeight: "700",
                },
              ]}
            >
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
