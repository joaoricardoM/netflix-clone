import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanet: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Profiles = () => {
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <div className="text-3xl md:text-8xl text-white text-center">
          {" "}
          who is watching ?{" "}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
