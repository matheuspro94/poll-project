const PollModel = require('../models/poll.model')

module.exports = {
  // create a new poll
  async create(req, res) {
    try {
      const { title, dateStart, dateFinish, options } = req.body

      const createPoll = await PollModel.create({
        title,
        dateStart,
        dateFinish
      })

      const createOptions = await PollModel.create({
        options
      })

      return res.status(201).json({
        createPoll,
        createOptions,
        message: 'Poll created successfully'
      })
    } catch (error) {
      console.log(error)
    }
  }
  // update an existing poll
  // remove an existing poll
}
