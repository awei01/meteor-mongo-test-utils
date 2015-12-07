# Mongo Test Utils #

Meteor testing utility that allows you to reset collections for unit testing.

## Motivation ##

Ever try to test your app with collections and struggle with getting your app back to a clean state before each test? This package should help.

Simply add a `MongoTestUtils.remove()` call to your `beforeEach()` declarations in your tests and your collections are ready for re-instantiation.

## Caveats ##

1. This package directly manipulates `private` Meteor properties. I'm not totally sure what the global impact is on a test envrionment, but, I haven't encountered anything negative yet. Since it's contained within a test instance, it should be okay.

## API ##

### `void` .reset([`string`|`array`] name) ###

Accepts a string or array of strings that are names of the collections you want to reset.

Insert this call into your `beforeEach()` or `beforeAll()` calls within your test suites.

## Example ##
```
describe('Some Suite', function() {
	beforeEach(function() {
		MongoTestUtils.remove('foo');
	});
	it('creating a Mongo.Collection', function() {
		var collection = new Mongo.Collection('foo');
		// do some assertions
	});
	it('creating another collection with same name', function() {
		var collection = new Mongo.Collection('foo');
		// do some other assertions
	});
});
```



