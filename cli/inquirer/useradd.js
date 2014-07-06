var inquirer = require('inquirer')
  , Promise = require('bluebird')
  , i18n = require('i18n')
  , _ = require('lodash')

module.exports = function(opts) {
  return new Promise(function(resolve, reject) {

    inquirer.prompt([
      {
        type      : 'list',
        name      : 'role',
        message   :  i18n.__('Role?'),
        default   : 'user',
        choices   : ['admin','user'],
        when      : function() {
          return opts.role === undefined
        }
      },
      {
        type      : 'password',
        name      : 'password',
        message   : i18n.__('Password?'),
        validate  : function(v) {
          return val.length > 0
        },
        when      : function() {
          return opts.password === undefined
        }
      }
    ], function(answers) {
      resolve(_.extend(opts, answers))
    })
  })
}
