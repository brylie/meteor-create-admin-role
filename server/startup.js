Meteor.startup(function() {
  // Define the admin role
  try {
    var adminRole = Meteor.settings.private.adminRoleName;
  } catch (error) {
    var adminRole = 'admin';
  };

  // Create Admin role if it doesn't exist
  Meteor.call('createRoleIfNotExisting', adminRoleName);
});
