/**
 * Created by holly on 17/11/16.
 */

Template.notFound.helpers({
    currentPath() {
        return FlowRouter.current().path;
    }
});