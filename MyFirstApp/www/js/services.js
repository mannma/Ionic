angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '朱宇翔',
    lastText: '新的票据系统是否将原来数据补录?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '张成浩',
    lastText: '建议建设数据跟踪系统',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '杨爽',
    lastText: '实时数据推送架构的演变',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '白延春',
    lastText: '小白投顾的投资组合如何实现更加智能化!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '李晓亮',
    lastText: '客户信用评级和估值的计量方法',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
