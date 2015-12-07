'use strict';

var Utils = {};
Utils.reset = function(name) {
	if (typeof name === 'string') {
		name = [name];
	}
	for (var i = 0; i < name.length; i ++) {
		_cleanUpMongoCollection(name[i]);
	}
};
function _cleanUpMongoCollection(name) {
	var container = Meteor.isServer ? Meteor.server.method_handlers : Meteor.connection._methodHandlers;
	delete container['/' + name + '/insert'];
	delete container['/' + name + '/update'];
	delete container['/' + name + '/remove'];
	if (Meteor.isClient) {
		delete Meteor.connection._stores[name];
	}
};

MongoTestUtils = Utils;
