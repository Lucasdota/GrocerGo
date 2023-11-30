import Table from "./Table";

type Props = {
  card: string;
};

const PlatinumList = ({ card }: Props) => {
  const discount = 0.06;
  return (
    <article>
      <Table discount={discount} card={card} />
    </article>
  );
};

export default PlatinumList;
