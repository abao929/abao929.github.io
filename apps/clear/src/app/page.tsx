import { auth } from '@/auth'
import { SignInButton, SignOutButton } from '@/components/auth-buttons'

export default async function Home() {
  const session = await auth()

  return (
    <div>
      <h1>Clear</h1>
      {session ? (
        <div>
          <p>Signed in as {session.user?.email}</p>
          <SignOutButton />
        </div>
      ) : (
        <SignInButton />
      )}
    </div>
  )
}
