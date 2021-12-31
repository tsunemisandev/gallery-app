function Image({ url }) {
  return (
    <div className="max-w-sm">
      <a href={url} target="_blank">
        <img
          className="block object-cover object-center w-full h-full rounded"
          src={url}
        />
      </a>
    </div>
  );
}

export default Image;
