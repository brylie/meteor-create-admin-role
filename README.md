# meteor-create-admin-role
Create a Meteor.js administrative user role on startup.

# Details
This package looks for an Admin Role Name in the Meteor settings and creates the Admin Role, defaulting to 'admin'.

# Admin Role name configuration
If you would like a different Admin role name, add the following to your Meteor.settings:

```
{
  "adminRoleName": "admin-role-name"
}
```
