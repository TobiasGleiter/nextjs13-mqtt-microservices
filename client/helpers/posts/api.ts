export const createPost = async (body: any) => {
  try {
    const res = await fetch(`http://localhost:4000/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};
