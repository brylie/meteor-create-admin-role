Package.describe({
  summary: "Define and create an Admin role when Meteor starts.",
  version: "0.1.3",
  name: "brylie:create-admin-role",
  git: "https://github.com/brylie/meteor-create-admin-role.git"
});

Package.on_use(function (api, where) {
  // Meteor version
  api.versionsFrom("1.0.1");

  // Dependencies
  api.use("alanning:roles@1.2.11", "server");
  api.use("brylie:create-role-if-undefined@0.1.0", "server");

  // Files
  api.add_files("server/startup.js", "server");
});
