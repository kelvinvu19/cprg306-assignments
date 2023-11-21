import { useUserAuth } from "./_utils/auth-context";

const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

if (user === null) {
  return <LandingPage />;
}

return (
  <div>
    {/*shopping list*/}
    <p>
      Welcome, {user.displayName} ({user.email})
    </p>
    {/*shopping list*/}
  </div>
);
