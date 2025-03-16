var posts=["2025/03/16/hello-world/","2025/03/16/我的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };