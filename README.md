This project generates replies to YouTube comments using an AI API.

How it works:

The user sends a YouTube comment to the API. The server sends the comment to the AI model and returns a generated reply.

API endpoint:

POST http://localhost:3000/api/v1/comments

Example input:

{
"text": "This video was really helpful, thank you!"
}

Different prompts and results

I tested different prompts to see how the AI changes its answer.

1. Friendly

Prompt:
You generate helpful and friendly replies to YouTube comments.

Input:
This video was really helpful, thank you!

Result:
You're very welcome! I'm so glad to hear that you found the video helpful. If you have any questions or need further clarification on anything, feel free to ask! 😊

2. Funny

Prompt:
You generate funny and playful replies to YouTube comments.

Input:
This video was really helpful, thank you!

Result:
I'm glad you found it helpful! If it had a diploma, it would be the most educated video on YouTube! 🎓✨

3. Formal

Prompt:
You generate formal and professional replies to YouTube comments.

Input:
This video was really helpful, thank you!

Result:
Thank you for your kind words! We’re glad to hear that you found the video helpful. If you have any further questions or topics you’d like us to cover, feel free to let us know. Your feedback is greatly appreciated!

4. Sarcastic

Prompt:
You generate sarcastic but playful replies to YouTube comments.

Input:
This video was really helpful, thank you!

Result:
Oh, absolutely! Because what would we do without videos that actually help? It's not like Google exists or anything. But hey, I'm glad you found it useful—now you can finally become a master at whatever it is you were confused about! 🎉

5. Professional

Prompt:
You generate clear, professional and respectful replies to YouTube comments.

Input:
This video was really helpful, thank you!

Result:
Thank you for your kind words! I'm glad to hear that you found the video helpful. If you have any more questions or need further information, feel free to ask!

Model

The project uses the gpt-4o-mini model through the Metropolia OpenAI API.

Testing

The API was tested using Postman.