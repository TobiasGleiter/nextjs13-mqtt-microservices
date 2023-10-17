export const createComment = async (body: any, postId: any) => {
  try {
    const res = await fetch(`http://localhost:4001/posts/${postId}/comments`, {
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
