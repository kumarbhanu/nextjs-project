import loader from "@/assets/loader.gif";
import Image from "next/image";
const LoadingPage = () => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  };
  return (
    <div style={style}>
      <Image src={loader} width={148} height={148} alt="loading.." />
    </div>
  );
};

export default LoadingPage;
