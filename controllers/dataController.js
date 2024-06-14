const Day = require("../model/Day");

const writeData = async (req, res) => {
  const { date, stock, object } = req.body;

  try {
    const day_check = await Day.findOne({ date: date }).exec();
    if (!day_check) {
      await Day.create({ date: date });
    }
    const day = await Day.findOne({ date: date }).exec();
    if (day.stocks[stock] !== null) {
      res.status(409).json({
        status: 409,
        data: day.stocks[stock],
        message: "Veri daha önce kaydedildi!",
      });
    } else {
      day.stocks[stock] = object;
      await day.save();
      res.status(200).json({
        status: 200,
        data: day.stocks[stock],
        message: "Veri başarıyla kaydedildi!",
      });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

module.exports = { writeData };
