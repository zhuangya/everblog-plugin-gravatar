'use strict';

const gravatar = require('ya-gravatar');
const debug = require('debug')('everblog-plugin-gravatar');

module.exports = function everblogGravatar (everblogPayload, options) {
  let config = everblogPayload['$blog'];
  debug('config -> %j', config);

  config.author.avatar = config.author.avatar || gravatar.url(config.author.email, options);
  debug('avatar -> %j', config.author.avatar);

  everblogPayload['$blog'] = config;
};
