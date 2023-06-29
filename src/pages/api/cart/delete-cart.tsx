import { NextApiRequest, NextApiResponse } from "next";
import { UseDeleteCartItemBody } from "../../../../package/model/api/cart/delete-cartItem";

export default async function Api(req: NextApiRequest, res: NextApiResponse) {
  req.method == "POST"
    ? null
    : res.status(400).json({
        data: null,
        status: "error",
        message: "error",
      });
  try {
    const params = req.query as unknown as UseDeleteCartItemBody;
    console.log(params)
    const response = await fetch(
      `http://localhost:8080/api/cartItem/deleteCartItems?cartItemId=${params.cartItemId}`,
      {
        method: "Delete",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      res.status(200).json({
        data: null,
        status: "success",
        message: "Success, Delete success",
      });
    } else {
      res.status(200).json({
        data: null,
        status: "error",
        message: "Fail",
      });
    }
  } catch (error: any) {
    res.status(400).json({
      data: null,
      message: error.message,
      status: "error",
    });
  }
}
