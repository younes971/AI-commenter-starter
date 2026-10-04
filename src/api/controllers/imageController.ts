import {Request, Response, NextFunction} from 'express';
import fetchData from '../../lib/fetchData';

type ImageResponse = {
  data: {
    b64_json: string;
  }[];
};

const imagePost = async (
  req: Request<{}, {}, {prompt: string}>,
  res: Response<ImageResponse>,
  next: NextFunction
) => {
  try {
    const url = `${process.env.OPENAI_API_URL}/v1/images/generations`;

    const data = await fetchData<ImageResponse>(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-image-2',
        prompt: req.body.prompt,
        size: '1536x1024',
        quality: 'low',
      }),
    });

    res.json(data);
  } catch (error) {
    next(error);
  }
};

export {imagePost};