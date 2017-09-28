# tomsen:oauth2-gitlab

An ES2015 Meteor OAuth2 handler package for Gitlab.

This is a fully working OAuth login service, allowing you to use Gitlab as your Meteor authentication method.

If you want to use it "as is" you can just `meteor add tomsen:oauth2-accounts-gitlab` to your application which adds the ui part and pulls in this package.

This is completely based on the work of Rob Fallows, lots of kudos to him to take the pain and pave the way.
There is the original [blog article](http://robfallows.github.io/2015/12/17/writing-an-oauth-2-handler.html) which should be read prior to forking and hacking!

See also the [complementary OAuth2 flow package](https://github.com/tomsen-san/meteor-accounts-gitlab): `tomsen-san:oauth2-accounts-gitlab`.

## Usage
When using one of the accounts packages for meteor (accounts-ui) the package
installs itself as one of the login handlers. The login panel offers to login
using gitlab.
In your gitlab instance the meteor app has to be registered ([see here](https://docs.gitlab.com/ee/integration/oauth_provider.html)). This creates an
application id and a secret. You are also required to select a scope of access
for the client app. Recommendable is something like *read_user* if you only want to
read some basic data like username, name and maybe groups of a user.
On the very first attempt to login with gitlab in your app
a configuration form opens which accepts
* the URL of the gitlab instance you use to authenticate
* the application id
* the secret
* the scope

This configuration is saved on the server and then used to authenticate
the users of the app.
