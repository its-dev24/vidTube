import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";

// const healthcheck = asyncHandler(async (req, res) => {
//   return res
//     .status(200)
//     .json(new ApiResponse(200, "OK", "Health check passed"));
// });

const healthcheck = async (req, res) => {
  try {
    return res
      .status(200)
      .json(new ApiResponse(200, "OK!", "Health check passed"));
  } catch (err) {
    res.status(404).json(new ApiError(404, "Oops!!"));
  }
};

export { healthcheck };
