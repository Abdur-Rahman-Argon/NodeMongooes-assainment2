const {
  getToursService,
  getOneUniqueToursService,
  createToursService,
  updateOneToursService,
  getMostCheapestToursService,
  getTrendingToursService,
} = require("../Services/tour.services");

exports.getTours = async (req, res, next) => {
  try {
    const queries = {};

    const filters = { ...req.query };

    const excludeFields = ["sort", "page", "limit"];
    excludeFields.forEach((field) => delete filters[field]);

    //sortby
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    // field
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }

    // page & limit
    if (req.query.page) {
      // console.log(req.query);
      const { page = 1, limit = 5 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const tours = await getToursService(filters, queries);

    res.status(200).json({
      status: "Success",
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is Not get",
      error: error.message,
    });
  }
};

exports.getOneUniqueTours = async (req, res, next) => {
  try {
    const id = req.params.id;
    const tour = await getOneUniqueToursService(id);
    res.status(200).json({
      status: "Success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is Not get",
      error: error.message,
    });
  }
};

exports.getMostCheapestTours = async (req, res, next) => {
  try {
    const tour = await getMostCheapestToursService();
    res.status(200).json({
      status: "Success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is Not get",
      error: error.message,
    });
  }
};

exports.getTrendingTours = async (req, res, next) => {
  try {
    const tour = await getTrendingToursService();
    res.status(200).json({
      status: "Success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is Not get",
      error: error.message,
    });
  }
};

exports.getMostCheapestTours = async (req, res, next) => {
  try {
    const tour = await getMostCheapestToursService();
    res.status(200).json({
      status: "Success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is Not get",
      error: error.message,
    });
  }
};

exports.createTours = async (req, res, next) => {
  try {
    const result = await createToursService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Data Inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is Not Inserted",
      error: error.message,
    });
  }
};

exports.updateOneTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateOneToursService(id, req.body);

    res.status(200).json({
      status: "Success",
      message: "Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data couldn't Update",
      error: error.message,
    });
  }
};
