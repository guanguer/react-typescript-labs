import { Card } from '$/common/components/card';
import { use } from 'react';
import { currentDate } from './utilities';
import type { Post } from './types';
import z from 'zod';

type NewsArticleProps = {
  id: number;
};

const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
}) satisfies z.ZodType<Post>;

const fetchArticle = async (id: number): Promise<Post> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const possiblePost = response.json();
  return PostSchema.parse(possiblePost);
};

export const NewsArticle = ({ id = 1 }: NewsArticleProps) => {
  const article = use(fetchArticle(id));

  return (
    <Card as="article" className="space-y-4 font-mono md:first:col-span-2">
      <header className="flex items-start justify-between">
        <h2 className="text-lg font-semibold">{article?.title}</h2>
        <p className="text-sm whitespace-nowrap text-gray-500">{currentDate}</p>
      </header>
      <p>{article?.body}</p>
    </Card>
  );
};
