export interface postObject {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  active: boolean;
}
export interface post {
  posts: postObject[];
  limit: number;
  skip: number;
  total: number;
}
