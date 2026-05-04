import { FallingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <FallingLines
        color="#2563eb"
        width="200"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};

export default Loading;
