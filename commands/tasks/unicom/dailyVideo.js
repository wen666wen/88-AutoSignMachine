
var dailyVideo = {
  doTask: async (axios, options) => {
    await require('./rewardVideo').doTask(axios, {
      ...options,
      acid: 'AC20200624091508',
      taskId: '734225b6ec9946cca3bcdc6a6e14fc1f',
      codeId: 945254827,
      reward_name: '联通老总求封号'
    })
  }
}

module.exports = dailyVideo