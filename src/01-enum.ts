/* enums are a way that TS enables developers to define named constants, much more strict than
using literal types */
enum ROLES {
  ADMIN,
  SOMEONE,
  SELLER = 'seller',
  CUSTOMER = 'customer',
}
/* There's three types of enums: numeric, string and heterogeneous, the last being the ones least
used and, even the ones that TS doesn't recommend using, like the example above */

/* enum members who don't have initializers will take numeric values, starting with 0 and adding
1 to every member there is. In order for this to work, the first member has to be at least the
only one without an initializer, otherwise errors will pop-up */
console.log(ROLES.ADMIN, ROLES.SOMEONE);

/* enums can be asigned to types */
type User = {
  username: string,
  role: ROLES;
}

/* and used like this */
const nicoUser: User = {
  username: 'Nico',
  role: ROLES.ADMIN
}
