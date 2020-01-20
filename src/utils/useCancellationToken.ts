interface CancellationToken {
  isCancelled: boolean;
  cancel(): void;
}

const useCancellationToken = (): CancellationToken => {
  const token = {
    isCancelled: false,
    cancel: () => {}
  };

  token.cancel = () => (token.isCancelled = true);

  return token as CancellationToken;
};

export default useCancellationToken;
