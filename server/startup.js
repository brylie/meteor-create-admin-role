Meteor.startup(function() {
	// Define the admin role
	var adminRole = Meteor.settings.private.adminRole || 'admin';

	// Create Admin role if it doesn't exist
	Meteor.call('createRoleIfNotExisting', adminRole);
});
