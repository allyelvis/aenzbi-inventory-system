import { getSession } from 'next-auth/react';

export default function IndexPage() {
  return <h1>Welcome to the Inventory System</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
