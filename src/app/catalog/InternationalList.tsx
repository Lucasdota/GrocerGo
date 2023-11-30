import Table from "./Table";

type Props = {
	card: string
}

const InternationalList = ({card}: Props) => {
	const discount = 0.03;
	return (
    <article className="space-y-4 flex flex-col items-center">
      <Table discount={discount} card={card} />
    </article>
  );
}

export default InternationalList