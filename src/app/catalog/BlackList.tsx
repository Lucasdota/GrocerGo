import Table from "./Table";

type Props = {
  card: string;
};

const BlackList = ({card}: Props) => {
  const discount = 0.09;
  return (
    <article>
      <Table discount={discount} card={card} />
    </article>
  );
};

export default BlackList;
