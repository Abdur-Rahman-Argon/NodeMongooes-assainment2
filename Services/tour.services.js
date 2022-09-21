const Tour = require("../Modal/Tour");

exports.getToursService = async (filter, queries) => {
  console.log(filter);
  const tours = await Tour.find(filter)
    .sort(queries.sortBy)
    .select(queries.fields)
    .skip(queries.skip)
    .limit(queries.limit);

  const total = await Tour.countDocuments();
  const page = await Math.ceil(total / queries.limit);
  return { total, page, tours };
};

exports.getOneUniqueToursService = async (id) => {
  const tour = await Tour.find({ $or: [{ _id: id }] });
  const view = await Tour.updateOne({ _id: id }, { $inc: { views: 1 } });
  return tour;
};

exports.getMostCheapestToursService = async () => {
  const tour = await Tour.find().sort({ price: 1 }).limit("3");
  return tour;
};

exports.getTrendingToursService = async () => {
  const tour = await Tour.find().sort({ views: -1 }).limit("3");
  return tour;
};

exports.createToursService = async (data) => {
  const result = await Tour.create(data);
  return result;
};

exports.updateOneToursService = async (tourId, data) => {
  const result = await Tour.updateOne(
    { _id: tourId },
    { $set: data },
    { runValidators: true }
  );
  return result;
};
