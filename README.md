# tomsen:oauth2-gitlab

An ES2015 Meteor OAuth2 handler package for Gitlab.

This is a fully working OAuth login service, allowing you to use Gitlab as your Meteor authentication method. 

If you want to use it "as is" you can just `meteor add tomsen:oauth2-accounts-gitlab` to your application which adds the ui part and pulls in this package.

This is completely based on the work of Rob Fallows, lots of kudos to him to take the pain and pave the way. 
There is the original [blog article](http://robfallows.github.io/2015/12/17/writing-an-oauth-2-handler.html) which should be read prior to forking and hacking!

See also the [complementary OAuth2 flow package](https://github.com/tomsen-san/meteor-accounts-gitlab): `tomsen-san:oauth2-accounts-gitlab`.
