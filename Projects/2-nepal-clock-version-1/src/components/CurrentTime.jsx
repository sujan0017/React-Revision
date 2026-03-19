

function CurrentTime() {
  let time = new Date();

  return (
    <p className="lead">
      This is the current Date & Time : {time.toLocaleDateString()} |{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
