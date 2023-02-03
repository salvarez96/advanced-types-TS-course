import { User, ROLES } from "./01-enum"

const currentUser: User = {
  username: 'someone',
  role: ROLES.CUSTOMER
}
const sellerUser: User = {
  username: 'someone',
  role: ROLES.SELLER
}
const sellerUser2: User = {
  username: 'someone',
  role: ROLES.SELLER
}
const adminUser: User = {
  username: 'someone',
  role: ROLES.ADMIN
}
const nonUser: User = {
  username: 'someone',
  role: ROLES.SOMEONE
}

export const checkRoles = (...currentUser: User[]) => {
  return currentUser.map(item => {
    switch (item.role) {
      case ROLES.ADMIN:
        return 'admin'
      case ROLES.CUSTOMER:
        return 'customer'
      case ROLES.SELLER:
        return 'seller'
      default:
        return 'unrecognized'
    }
  })
}

console.log(checkRoles(currentUser, sellerUser, sellerUser2, adminUser, nonUser), 'role'); // [ 'customer', 'seller', 'seller', 'admin', 'unrecognized' ] role
