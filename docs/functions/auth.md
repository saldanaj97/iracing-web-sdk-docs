---
sidebar_position: 1
---

# Authentication

## Authenticating With iRacing Servers

In order to pull data from the iRacing API, you need to be an active member. If you are not currently a member or need to renew your membership, links to the iRacing website are available in the [getting started](/docs/getting-started/intro) section of the docs.

Once an account has been acquired, you can then authenticate with the API using the functions below.

### Authentication

#### authenticate('email', 'password')

- Required Params

  - email: your iRacing Email associated with the active membership
  - password: your iRacing Password associated with the account

- Returns: An instance of the IRacing SDK class

On the iRacing forums the developers state you must hash your password, but this has already been taken care of for you by the package so you can just provide your email and password unhashed.

**Note: It is recommended you place the email and password in a .env file and use the variables that way for security purposes if you plan on having your code anywhere online.**

```javascript
import IRacingSDK from "iracing-web-sdk"

async function login() {
  const sdk = new IRacingSDK("email", "password")
  await sdk.authenticate()
  return sdk.authenticated
}
```
