import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { useQuery } from "@tanstack/react-query";

//obtengo los articulos
const fetchArticles= async() => {
  const {data} = await axios.get('http://localhost:9000/articles');
  return data;
};
const ArticleList=() =>{
  //uso reactQ para obtener los articles
  const {data: articles, isLoading, error}= useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading articles: {error.message}</p>;

  return (
    <>
      <div className="p-2.5 mx-auto flex items-center justify-center max-w-6xl">
        <div className="container mx-auto p-4">
          <div className="flex flex-col gap-5">
            {articles.map((article, key) => (
              <Card
                key={article.id + `${key}`}
                className="gap-5 items-center shadow-md rounded-lg overflow-hidden flex p-5"
              >
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="bg-white shadow-md rounded-lg overflow-hidden aspect-square w-full max-w-[100px] object-cover"
                />
                <div>
                  <CardHeader className="pt-0">
                    <CardTitle>{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <CardDescription className="pb-0">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pb-0">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Read more
                    </a>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="relative min-h-screen h-full w-full bg-slate-900">
      
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div> */}
    </>
  );
};

export default ArticleList;
