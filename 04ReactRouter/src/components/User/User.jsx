import { useParams } from "react-router";

function User() {
  const { userid } = useParams();

  return (
    <>
      <div className="bg-yellow-500 p-4 text-xl text-center max-w-screen-xl mx-auto">
        User: {userid}
      </div>
    </>
  );
}

export default User;
