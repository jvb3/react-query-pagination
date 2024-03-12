type DescriptionProps = {
  description: string;
};

const Description = ({ description }: DescriptionProps) => {
  return (
    <>
      <p>{description}</p>
    </>
  );
};

export default Description;
