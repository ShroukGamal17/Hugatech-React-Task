import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsSlice.jsx";
import { Card } from "react-bootstrap";
import { BsCartDashFill } from "react-icons/bs";
function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-center">Products</h2>
      <div className="d-flex flex-wrap m-5">
        {products.map(function (product) {
          return (
            <div key={product.id}>
              <Card
                style={{
                  border: "none",
                  width: "330px",
                  height: "340px",
                  margin: "10px",
                }}
              >
                <Card.Body>
                  <Card.Img
                    variant="top"
                    style={{ height: "30vh" }}
                    src={product.thumbnail}
                  />
                  <Card.Text>{product.title}</Card.Text>
                  <Card.Title>
                    {" "}
                    ${product.price}{" "}
                    <BsCartDashFill
                      style={{ color: "#029FAE", marginLeft: "225px" }}
                    />
                  </Card.Title>
                </Card.Body>
              </Card>
              {/* <Link to={`/details/${product.id}`}>{product.title}</Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
