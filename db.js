

var people = {
  RinatAbdullin: {
    avatar: "https://pbs.twimg.com/profile_images/3479036762/40c99d96aa9a4e57cfa7d54d1fb7d5b2.jpeg",
    fullName: "Rinat Abdullin",
    github: "abdullin",
    twitter: "abdullin"
  },
  RishatShamsutdinov: {
    avatar: "https://pbs.twimg.com/profile_images/507544081548206080/VJTYy-dc.jpeg",
    twitter: "Red_ReeS"
  },
  AndreyFeoktistov: {
    avatar: "https://pbs.twimg.com/profile_images/478884565369360384/RevpRhzK.png"
  },
  NikolayIakovlev: {
    avatar: "https://pbs.twimg.com/profile_images/2159744451/appleStore.jpg"
  }

};


var day20150427 = {
  date: "2015-04-27",
  schedule: [
    {
      type: "talk",
      presenter: people.RinatAbdullin,
      title: "React Native 1",
      subtitle: "с точки зрения не iOS разработчика",
      minutes: 15
    },
    {
      type: "talk",
      presenter: people.RishatShamsutdinov,
      title: "React Native 2",
      subtitle: "что ты тут нагородил?",
      minutes: 15
    },
    {
      type: "break",
      minutes: 10
    },
    {
      type: "talk",
      presenter: people.AndreyFeoktistov,
      title: "Рассказ про ODesk",
      subtitle: "или как митинговаться в пабе",
      minutes: 5
    },
    {
      type: "talk",
      presenter: people.NikolayIakovlev,
      title: "TopCoder",
      subtitle: "Основы конкуренции",
      minutes: 5
    }

  ],
}





var db = {
  days: [
    day20150427
  ],

};





module.exports = db;
