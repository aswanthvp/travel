const Trips = require("../model/tripModel");

const saveTrips = async (tripsInfo) => {
  try {
    const trips = new Trips({
      places: tripsInfo.places,
      count: tripsInfo.count,
      budget: tripsInfo.budget,
      name: tripsInfo.name,
      email: tripsInfo.email,
      contact: tripsInfo.contact,
      days: tripsInfo.days,
    });
    await trips.save();
  } catch (error) {
    console.log("Error occurred");
    throw new Error(error);
  }
};

const getTrips = async ({ page }) => {
  try {
    var perPage = 10;
    const results = Trips.find()
      .limit(perPage)
      .skip(page * perPage);
    return results;
  } catch (error) {
    console.log("Error occurred");
    throw new Error(error);
  }
};
module.exports = { saveTrips, getTrips };
