/* eslint-disable @next/next/no-img-element */
export interface ImageProps {
  img: string;
  id: number;
}
const Image: React.FC<ImageProps> = ({ img }) => {
  return (
    <div>
      <img src={img} alt="Image description" />
    </div>
  );
};

export default Image;
