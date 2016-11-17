/**
 * Created by holly on 17/11/16.
 */

BlazeLayout.setRoot("body");

const authenticatedRoutes = FlowRouter.group({
    name: 'authenticated'
});

const publicRoutes = FlowRouter.group({
    name: 'public'
    //triggersEnter: [publicRedirect] //Allows an Array of functions to be executed b4 all of the routes in our Public Group
});


publicRoutes.route("/", {
    name: "home",
    action(){
        BlazeLayout.render("baseLayout", {content: "home", menu: "publicMenu"});
    }
});