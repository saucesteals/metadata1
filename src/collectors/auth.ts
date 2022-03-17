export const generate = (): AuthData => {
  return {
    auth: {
      form: {
        method: "POST",
      },
    },
  };
};

export interface AuthData {
  auth: { form: { method: string } };
}
