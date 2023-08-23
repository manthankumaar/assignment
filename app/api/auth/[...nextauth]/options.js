export const options = (NextAuthOptions = {
  provider: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'username',
        },
        password: {
          label: 'Password',
          type: 'text',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        const user = { id: '42', name: 'dave', password: 'nextauth' }
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user
        } else return null
      },
    }),
  ],
})
