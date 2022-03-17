export const generate = (): ErrorsData => {
  return {
    errors: [],
  };
};

interface ErrorDetail {
  message: string;
}

export interface ErrorsData {
  errors: ErrorDetail[];
}
