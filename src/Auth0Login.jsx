import * as React from 'react';
import { Auth0Lock } from 'auth0-lock';

const {
  SNOWPACK_PUBLIC_AUTH0_CLIENT_ID: clientId,
  SNOWPACK_PUBLIC_AUTH0_DOMAIN: domain,
} = import.meta.env;

export default function () {
    React.useEffect(() => {
        new Auth0Lock(clientId, domain);
    });

    return <p>Rendered login</p>
}