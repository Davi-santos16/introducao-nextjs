import Comment from "./Comment";

type CommentListProps = {
  comentarios: {
    nome: string;
    mensagem: string;
    data: Date;
  }[];
};

export function CommentList({ comentarios }: CommentListProps) {
  if (comentarios.length === 0) {
    return <p className="text-black"> Nenhum comentário ainda.</p>;
  }

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1">
      {comentarios.map((c, i) => (
        <Comment key={i} nome={c.nome} mensagem={c.mensagem} data={c.data} />
      ))}
    </div>
  );
}
