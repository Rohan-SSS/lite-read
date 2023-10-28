import { useParams } from "react-router-dom";
const GenrePage = () => {
  const { genre } = useParams();
  return (
    <>
      <h1>{genre} Genre Page</h1>
      <h3>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
      </h3>
    </>
  );
};
export default GenrePage;
