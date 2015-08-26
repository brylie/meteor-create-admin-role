Meteor.startup(function() {
  // Define the admin role
  try {
    var adminRoleName = Meteor.settings.private.adminRoleName;
  } catch (error) {
    var adminRoleName = 'admin';
  };

  // Create Admin role if it doesn't exist
  Meteor.call('createRoleIfNotExisting', adminRoleName);
});
