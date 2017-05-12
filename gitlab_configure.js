Template.configureLoginServiceDialogForGitlab.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});

Template.configureLoginServiceDialogForGitlab.fields = function () {
  return [
    {property: 'gitlabInstanceUrl', label: 'Gitlab instance url'},
    {property: 'scope', label: 'Gitlab scope'},
    {property: 'clientId', label: 'Application Id'},
    {property: 'secret', label: 'Secret'}
  ];
};
