const NotePage = async ({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) => {
  const { noteId } = await params;
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 pt-4">
        Note ID: {noteId}
      </h1>
    </div>
  );
};

export default NotePage;
