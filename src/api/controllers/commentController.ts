import {Request, Response, NextFunction} from 'express';
import fetchData from '../../lib/fetchData';

type ChatResponse = {
  choices: {
    message: {
      content: string;
    };
  }[];
};

const commentPost = async (
  req: Request<{}, {}, {text: string}>,
  res: Response<{response: string}>,
  next: NextFunction
) => {
  try {
    const url = `${process.env.OPENAI_API_URL}/v1/chat/completions`;

    const data = await fetchData<ChatResponse>(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You generate clear, professional and respectful replies to YouTube 		comments.',
          },
          {
            role: 'user',
            content: req.body.text,
          },
        ],
      }),
    });

    res.json({
      response: data.choices[0].message.content,
    });
  } catch (error) {
    next(error);
  }
};

export {commentPost};
