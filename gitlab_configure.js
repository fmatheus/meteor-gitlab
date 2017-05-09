Template.configureLoginServiceDialogForGitlab.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});

Template.configureLoginServiceDialogForGitlab.fields = function () {
  return [
    {property: 'gitlabInstanceUrl', label: 'Gitlab instance url'},
    {property: 'scope', label: 'permission scope in Gitlab'},
    {property: 'clientId', label: 'Client Id'},
    {property: 'secret', label: 'Client Secret'}
  ];
};
