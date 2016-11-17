/**
 * Created by holly on 17/11/16.
 */

let administrators = [
    {
        name: { first: 'Admin', last: 'McAdmin' },
        email: 'admin@admin.com',
        password: 'password'
    }
];

let createUsers = ( users ) => {
    for ( let i = 0; i < users.length; i++ ) {
        let user       = users[ i ],
            userExists = checkIfUserExists( user.email );

        if ( !userExists ) {
            let userId  = createUser( user ),
                isAdmin = checkIfAdmin( user.email );

            if ( isAdmin ) {
                Roles.setUserRoles( userId, 'admin' );
            } else {
                Roles.setUserRoles( userId, 'employee' );
            }
        }
    }
};

let checkUserExists = (user) => {

}

let checkIfAdmin = ( email ) => {
    return _.find( administrators, ( admin ) => {
        return admin.email === email;
    });
};